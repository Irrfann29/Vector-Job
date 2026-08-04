const userModel = require("../models/user.models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function registerUser(req, res) {
  const { username, email, password } = req.body;

  

  const isUserAlreadyExist = await userModel.findOne({

    $or: [{ username }, { email }],

  });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET_KEY
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User Created Successfully",

    user : {
        id : user._id,
        username : user.username,
        email : user.email
    }
  });
}

async function logInUser(req, res) {
  const { username, password, email } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    res.status(404).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Logged In successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

module.exports = { registerUser, logInUser };
