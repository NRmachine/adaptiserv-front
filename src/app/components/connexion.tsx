'use client'

import { useState, FormEvent } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Field, Label, Switch } from '@headlessui/react'
import Link from 'next/link'

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('') // State for displaying messages to the user
  const [isComingSoon, setIsComingSoon] = useState(true); // New state to control "coming soon" mode

  // Function to handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault() // Prevent the default form submission (page reload)

    if (isComingSoon) {
      setMessage("Cet espace sera bientôt disponible. Merci de votre patience !");
      return; // Stop further processing if in coming soon mode
    }

    setMessage('Tentative de connexion en cours...') // Display a message

    // Here you would typically add your authentication logic,
    // e.g., send email and password to an API.
    console.log('Email:', email)
    console.log('Mot de passe:', password)
    console.log('Se souvenir de moi:', rememberMe)

    // Simulate an API call or a delay
    setTimeout(() => {
      // In a real application, you'd check credentials and redirect or show an error
      if (email === 'vip@example.com' && password === 'password123') { // Example credentials
        setMessage('Connexion réussie ! Redirection vers votre espace VIP...')
        // console.log('Connexion réussie ! Redirection...')
        // window.location.href = '/vip-dashboard'; // Redirect to VIP dashboard
      } else {
        setMessage('Erreur de connexion : Email ou mot de passe incorrect.')
      }
    }, 1500) // Simulate a 1.5 second delay for API response
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background gradient for visual appeal */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      {/* Main content area */}
      <div className="mx-auto max-w-2xl text-center">
        {/* VIP specific title */}
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Accès Membres VIP</h2>
        {/* VIP specific subtitle */}
        <p className="mt-2 text-lg/8 text-gray-600">Bienvenue dans votre espace privilégié Adaptiserv.</p>
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20 p-8 bg-white shadow-lg rounded-xl">
        {/* Coming Soon message */}
        {isComingSoon && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md text-center font-medium">
            <p>Cet espace sera bientôt disponible. Merci de votre patience !</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          {/* Email input field */}
          <div>
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Adresse email VIP
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="votre@email-vip.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isComingSoon} // Disable input when coming soon
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Password input field with toggle visibility */}
          <div>
            <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
              Mot de passe VIP
            </label>
            <div className="mt-2.5 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Votre mot de passe secret"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isComingSoon} // Disable input when coming soon
                className="block w-full rounded-md bg-white px-3.5 py-2 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isComingSoon} // Disable button when coming soon
                className="absolute inset-y-0 right-0 flex items-center pr-3 disabled:cursor-not-allowed"
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me switch and Forgot password link */}
          <Field className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Switch
                checked={rememberMe}
                onChange={setRememberMe}
                disabled={isComingSoon} // Disable switch when coming soon
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Se souvenir de moi</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
              <Label className="text-sm/6 text-gray-600 disabled:opacity-50">
                Se souvenir de moi
              </Label>
            </div>
            {/* Link updated to a more appropriate password reset page */}
            <Link
              href="/forgot-password"
              className={`text-sm font-semibold ${isComingSoon ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-500'}`}
              aria-disabled={isComingSoon} // ARIA attribute for accessibility
              tabIndex={isComingSoon ? -1 : 0} // Prevent tabbing when disabled
            >
              Mot de passe oublié ?
            </Link>
          </Field>
        </div>

        {/* Message display area */}
        {message && !isComingSoon && ( // Only show dynamic messages if not in coming soon mode
          <p className={`mt-4 text-center text-sm ${message.includes('réussie') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        {/* Submit button */}
        <div className="mt-10">
          <button
            type="submit"
            disabled={isComingSoon} // Disable button when coming soon
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isComingSoon ? 'Bientôt disponible' : 'Accéder à mon Espace VIP'}
          </button>
        </div>

        {/* VIP membership call to action */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Pas encore membre VIP ?{' '}
          <Link
            href="/vip-membership"
            className={`font-semibold ${isComingSoon ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-500'}`}
            aria-disabled={isComingSoon} // ARIA attribute for accessibility
            tabIndex={isComingSoon ? -1 : 0} // Prevent tabbing when disabled
          >
            Découvrez comment devenir un membre privilégié
          </Link>
          .
        </div>
      </form>
    </div>
  )
}
