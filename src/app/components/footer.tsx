import Image from 'next/image'
import Gradiant from './gradiant'
import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Énergie', href: '/energie' },
    { name: 'Création Web', href: '/site' },
    { name: 'Sérigraphie', href: '/serigraphie' },
    { name: 'Agent Commercial', href: '/commerciale' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    {
      name: 'Économisez sur vos factures énergétiques',
      href: '/energie',
      description: 'Réduisez vos coûts de gaz et électricité'
    },
    {
      name: 'Création digitale complète',
      href: '/site',
      description: 'Sites web, logiciels et applications sur mesure'
    },
    {
      name: 'Maintenance et support web',
      href: '/support',
      description: 'Accompagnement continu de votre présence digitale'
    },
    {
      name: 'Optimisation SEO',
      href: '/seo',
      description: 'Améliorez votre visibilité en ligne'
    },
    {
      name: 'Impression professionnelle',
      href: '/serigraphie',
      description: 'Cartes de visite, flyers et affiches publicitaires'
    },
    {
      name: 'Solutions commerciales',
      href: '/commerciale',
      description: 'Agent commercial pour vos ventes et distribution'
    },
  ],
  support: [
    {
      name: 'Nous contacter',
      href: '/contact',
      description: 'Une question ? Contactez notre équipe'
    },
    {
      name: 'Demander un devis',
      href: '/contact',
      description: 'Obtenez une estimation gratuite'
    },
    
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.instagram.com/adaptiserv?igsh=MW55ejN3bHdtdm9ibA==',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://x.com/Adaptiserv',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 8.002.01 6.78.048 2.979.206.206 2.979.048 6.78.01 8.002 0 8.396 0 12.017c0 3.621.01 4.015.048 5.237.158 3.801 2.931 6.574 6.732 6.732 1.222.038 1.616.048 5.237.048 3.621 0 4.015-.01 5.237-.048 3.801-.158 6.574-2.931 6.732-6.732.038-1.222.048-1.616.048-5.237 0-3.621-.01-4.015-.048-5.237C23.826 2.979 21.053.206 17.252.048 16.03.01 15.636 0 12.017 0zm0 2.17c3.557 0 3.97.01 5.168.048 2.912.132 4.513 1.733 4.645 4.645.038 1.198.048 1.611.048 5.168 0 3.557-.01 3.97-.048 5.168-.132 2.912-1.733 4.513-4.645 4.645-1.198.038-1.611.048-5.168.048-3.557 0-3.97-.01-5.168-.048-2.912-.132-4.513-1.733-4.645-4.645C2.179 15.987 2.17 15.574 2.17 12.017c0-3.557.01-3.97.048-5.168.132-2.912 1.733-4.513 4.645-4.645C8.047 2.179 8.46 2.17 12.017 2.17z"
            clipRule="evenodd"
          />
          <path d="M12.017 5.838a6.18 6.18 0 100 12.359 6.18 6.18 0 000-12.359zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/adaptiserv/',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-white" aria-labelledby="footer-heading">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <Gradiant />
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-12">
            <div className="grid grid-cols-1 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Navigation</h3>
                  <ul role="list" className="space-y-4">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Nos Services</h3>
                  <ul role="list" className="space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="group block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Support Client</h3>
                  <ul role="list" className="space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="group block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Informations Légales</h3>
                  <ul role="list" className="space-y-4">
                    <li>
                      <Link href="/confidentialite" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                        Politique de confidentialité
                      </Link>
                    </li>
                    <li>
                      <Link href="/conditions" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                        Conditions générales
                      </Link>
                    </li>
                    <li>
                      <Link href="/mentions-legales" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                        Mentions légales
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                        Gestion des cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 xl:mt-0">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Restez Informé</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Recevez nos actualités, conseils et offres exclusives directement dans votre boîte mail.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Adresse email
                    </label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      autoComplete="email"
                      className="w-full appearance-none rounded-xl border-0 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    S'abonner à la newsletter
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-indigo-200">
                  <p className="text-xs text-gray-500 mb-4">Suivez-nous sur les réseaux sociaux</p>
                  <div className="flex space-x-4">
                    {navigation.social.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        className="text-gray-400 hover:text-indigo-600 transition-colors duration-200 transform hover:scale-110"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon aria-hidden="true" className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-gray-200 pt-8 lg:mt-20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="ADAPTISERV"
                    className="h-10 w-auto hover:rotate-180 transition-transform duration-500"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="hidden md:block text-sm text-gray-500">
                  Votre partenaire digital de confiance
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 md:mt-0">
                © 2025 Adaptiserv. Tous droits réservés. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}