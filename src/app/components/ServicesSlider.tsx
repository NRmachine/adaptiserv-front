'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Importation des icônes pour les services
import {
  BriefcaseIcon,
  BoltIcon,
  GlobeAltIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';

// NOUVEAUX IMPORTS pour le composant Landing intégré
import BlurText from "./blurText";
import SplashCursor from './SplashCursor';

// Définition de la navigation pour le pied de page (intégrée ici)
const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Énergie', href: '/energie' },
    { name: 'Créer mon site', href: '/creer_mon_site' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Audit énergétique', href: '/energie' },
    { name: 'Création de sites web', href: '/site' },
    { name: 'Sérigraphie & impressions', href: '/serigraphie' },
    { name: 'Agent commercial', href: '/commerciale' },
  ],
  support: [
    { name: 'Documentation', href: 'confidentialite' },
    { name: 'FAQ', href: '/conditions' },
    { name: 'Support technique', href: '/contact' },
    { name: 'Nous contacter', href: '/contact' },
  ],
  legal: [
    { name: 'Confidentialité', href: 'confidentialite' },
    { name: "Conditions d'utilisation", href: '/conditions' },
    { name: 'Mentions légales', href: '/conditions' },
    { name: 'Cookies', href: '/conditions' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/16RdXZDjkR/?mibextid=wwXIfr',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
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
      href: 'https://www.instagram.com/adaptiserv?igsh=MW55ejN3bHdtdm9ibA==',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
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
      name: 'Twitter',
      href: 'https://x.com/Adaptiserv',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/adaptiserv/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
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
};

export default function Landinghome() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="flex-grow w-full overflow-hidden">
      {/* SECTION HÉRO */}
      <section className="relative flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
          {/* FOND FLOU HAUT */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b993ff] to-[#7e57c2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
            />
          </div>

          {/* CONTENU PRINCIPAL DE LA SECTION HÉRO */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* LOGO AVEC ROTATION AU SURVOL */}
            <div className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48">
              <Image
                src="/logo.png"
                alt="Logo"
                width={192} // Taille de base pour l'image (peut être ajustée)
                height={192} // Taille de base pour l'image (peut être ajustée)
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
                priority
              />
            </div>

            {/* TITRE ET DESCRIPTION AVEC EFFET BLURTEXT */}
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                <BlurText
                  text="Solutions professionnelles pour entreprises."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
                />
              </h1>
              <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10">
                <BlurText
                  text="Adaptiserv accompagne les professionnels avec des services sur-mesure : optimisation d'énergie, création web, impression & design, et externalisation commerciale."
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-base sm:text-lg text-center md:text-left"
                />
              </div>
            </div>
          </div>

          {/* BOUTONS DE LA SECTION HÉRO */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              scroll={false}
              className="inline-flex items-center justify-center rounded-md bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-violet-700 transition duration-300 ease-in-out"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Curseur animé */}
          <SplashCursor />
        </div>

        {/* FOND FLOU BAS */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#b993ff] to-[#7e57c2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          />
        </div>
      </section>

      {/* SECTION APERÇU DES SERVICES */}
      <section id="services" className="w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 text-gray-900 dark:text-white"
          >
            Nos pôles de service
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Courtage en Energie',
                desc: "Optimisation gratuite de vos contrats d'électricité et de gaz.",
                icon: BoltIcon,
                link: "/energie"
              },
              {
                title: 'Services Digitaux', // Correction de la faute de frappe "Degitaux"
                desc: 'Laissez-nous gérer votre présence digitale et concrétiser vos rêves.',
                icon: GlobeAltIcon,
                link: "/site"
              },
              {
                title: 'Sérigraphie & Impressions',
                desc: ' Faites-vous remarquer sur le terrain et éclipsez vos concurrents.',
                icon: PencilIcon,
                link: "/serigraphie"
              },
              {
                title: 'Agents Commerciaux', // Correction de la faute de frappe "Agent Commerciaux"
                desc: "Plus de soucis : nos agents s'occupent de tout ! À vous de découvrir la tranquillité.",
                icon: BriefcaseIcon,
                link: "/commerciale",
              },
            ].map((item, i) => (
              <Link href={item.link} passHref key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer h-full"
                >
                  <div className="mb-4 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full shadow-md">
                    <item.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            À propos d'Adaptiserv
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Fondée pour simplifier la vie des professionnels, Adaptiserv centralise les solutions B2B essentielles : énergie, digital, communication visuelle et développement commercial. Notre approche est humaine, notre engagement est concret.
          </motion.p>
        </div>
      </section>

      {/* SECTION NOS ENGAGEMENTS (VALEURS) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gray-900 dark:text-white"
          >
            Nos engagements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {["Conseil personnalisé", "Transparence totale", "Zéro engagement", "Accompagnement humain"].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
                className="bg-indigo-50 dark:bg-indigo-900 rounded-xl p-6 shadow-md flex items-center justify-center h-full min-h-[120px]"
              >
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 text-lg sm:text-xl leading-snug">{val}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION APPEL À L'ACTION (CTA) */}
      <section className="bg-indigo-600 dark:bg-indigo-800 text-white py-16 sm:py-20 lg:py-24 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Parlons de vos besoins
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-8 text-lg sm:text-xl"
          >
            Nos experts vous répondent sous 24h. Contactez-nous gratuitement.
          </motion.p>
          <Link href="#contact" scroll={false}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-700 dark:text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition duration-300 ease-in-out text-lg"
            >
              Contactez-nous
            </motion.button>
          </Link>
        </div>
      </section>

      {/* FOOTER INTÉGRÉ */}
      <footer id="contact" className="relative bg-white dark:bg-gray-950" aria-labelledby="footer-heading">
        <div className="relative z-10">
          <h2 id="footer-heading" className="sr-only">
            Pied de page
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-16 sm:pt-20 lg:pt-24">
            <div className="mt-16 border-t border-gray-900/10 dark:border-gray-700 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
              <div className="flex space-x-6 md:order-2 justify-center md:justify-start">
                {navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-sm leading-6 text-gray-600 dark:text-gray-400 text-center md:text-left md:order-1 md:mt-0">
                &copy; {currentYear} Adaptiserv. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}