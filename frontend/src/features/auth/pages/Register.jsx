import React from 'react'
import { Eye, ArrowRight } from 'lucide-react'


const colors = {
  bg: '#0B1120',
  surface: '#121B2E',
  border: '#223049',
  accent: '#4FD1C5',
  textPrimary: '#E7ECF5',
  textMuted: '#93A0B8',
  textFaint: '#5C6B85',
}

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
`



function Field({ id, label, type = 'text', placeholder, rightSlot }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-xs tracking-widest uppercase mb-2"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: colors.textMuted }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg px-4 py-3 text-sm outline-none"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            color: colors.textPrimary,
            fontFamily: "'Inter', sans-serif",
          }}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
    </div>
  )
}

export default function Register() {
  return (
    <div className="min-h-screen w-full flex" style={{ backgroundColor: colors.bg }}>
      <style>{fontImport}</style>

      {/* Left: signature visual, hidden on small screens */}
      <div
        className="hidden lg:flex lg:w-1/2 p-16 items-center justify-center"
        style={{ backgroundColor: colors.bg, borderRight: `1px solid ${colors.border}`,fontFamily: "'IBM Plex Mono', monospace" }}
      >
      <h1 className=' p-4 px-5 text-4xl rounded-2xl' style={{backgroundColor: colors.bg}}>VectorJob</h1>
      </div>

      {/* Right: form markup — no state, no handlers, static UI only */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-2 lg:hidden"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: colors.accent }}
            >
              VectorJob
            </p>
            <h1
              className="text-2xl mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textPrimary, fontWeight: 600 }}
            >
              Create your account
            </h1>
            <p className="text-sm" style={{ color: colors.textMuted, fontFamily: "'Inter', sans-serif" }}>
              Takes about a minute. No credit card needed.
            </p>
          </div>

          <form>
            <Field id="fullName" label="Full name" type="text" placeholder="Enter Your Name" />

            <Field id="email" label="Email" type="email" placeholder="you@example.com" />

            <Field
              id="password"
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              rightSlot={<Eye size={16} style={{ color: colors.textFaint }} />}
            />

            <Field
              id="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder="Confirm Password"
              rightSlot={<Eye size={16} style={{ color: colors.textFaint }} />}
            />

            <label
              htmlFor="terms"
              className="flex items-start gap-2 text-sm select-none mb-7"
              style={{ color: colors.textMuted, fontFamily: "'Inter', sans-serif" }}
            >
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-4 h-4 rounded mt-0.5"
                style={{ accentColor: colors.accent }}
              />
              <span>
                I agree to the{' '}
                <a href="#" style={{ color: colors.accent }} className="hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" style={{ color: colors.accent }} className="hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-lg py-3 text-sm"
              style={{
                backgroundColor: colors.accent,
                color: '#08201D',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Create account <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-8 text-sm text-center" style={{ color: colors.textMuted, fontFamily: "'Inter', sans-serif" }}>
            Already have an account?{' '}
            <a href="#" style={{ color: colors.accent }} className="hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}