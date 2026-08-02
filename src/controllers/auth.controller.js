const userModel = require('../models/user.models')

async function registerUser(req,res){

    const {username, email, password } = req.body;

    if (!username || !email || !password ){
        res.status(400).json({
            message : "Please Provide Email Username And Password"
        })
    }

    const isUserAlreadyExist = await userModel.findOne({
        $or : [{username}, {email}]
    })

    if (isUserAlreadyExist){
        res.status(400).json({
            message : "User Already Exists"
        })


    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({

        username,
        email,
        password : hash,

    })

    const token = jwt.sign({
        id : user._id,
        username : user.username
    }, process.env.JWT_SECRET_KEY)


    res.cookie("token", token)

    res.status(200).json({
        message: "User Created Successfully"
    })



}

module.exports = {registerUser};