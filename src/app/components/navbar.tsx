'use client'

import { useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import {
  BoltIcon,
  BuildingStorefrontIcon,
  CommandLineIcon,
  PhoneIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const navigation = [
  { name: 'Acceuil', href: '/' },
  { name: 'Contact', href: '/contact' },
]

const solutions = [
  {
    name: 'Courtage Energrie',
    description: 'Comparez et sélectionnez les meilleures offres.',
    href: '/energie',
    icon: BoltIcon,
  },
  {
    name: 'Service Digital',
    description: 'Creation Digitale Sites et apps selon vos Projets.',
    href: '/site',
    icon: CommandLineIcon,
  },
  {
    name: 'Sérigraphie et Impression',
    description: 'Conception, impression, pose.',
    href: '/serigraphie',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Agents Commerciaux',
    description: 'Présence commerciaux foires, distribution, publicité et revente de produits.',
    href: '/commerciale',
    icon: UsersIcon,
  },
]
 

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="ADAPTISERV"
            className="h-10 w-auto group-hover:rotate-180 transition-transform duration-500"
            width={150}
            height={150}
          />
          <span className="text-xl font-bold text-gray-900">ADAPTISERV</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              {item.name}
            </Link>
          ))}

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-purple-600">
              Solutions
              <ChevronDownIcon className="w-5 h-5" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white shadow-lg ring-1 ring-gray-200">
                <div className="p-4">
                  {solutions.map((item) => (
                    <Link key={item.name} href={item.href} className="flex gap-4 p-3 rounded-lg hover:bg-purple-50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <item.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>

        {/* Connexion button */}
        <div className="hidden lg:flex">
          <Link
            href="/login"
            className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white font-semibold hover:bg-purple-700 transition"
          >
            Connexion →
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700 hover:bg-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 overflow-y-auto sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" className="h-8 w-auto" width={200} height={200} />
              <span className="font-bold text-lg text-gray-900">ADAPTISERV</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-purple-100 rounded-md"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => setShowSolutions(!showSolutions)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50"
            >
              <span>Solutions</span>
              <ChevronDownIcon className={`h-5 w-5 transition-transform ${showSolutions ? 'rotate-180' : ''}`} />
            </button>

            {showSolutions && (
              <div className="space-y-2 pl-4">
                {solutions.map((item) => (
                  <Link key={item.name} href={item.href} className="block text-sm text-gray-700 hover:text-purple-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/login"
              className="block w-full rounded-md bg-purple-600 px-4 py-2 text-center text-white font-semibold hover:bg-purple-700"
            >
              Connexion →
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
