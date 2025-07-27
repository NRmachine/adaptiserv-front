"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  LightBulbIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BuildingStorefrontIcon, // Nouvelle icône pour les restaurants
} from '@heroicons/react/24/outline';

import Gradiant from './gradiant';
import MagicBento from './magicbento';
import TextPressure from './textPressure';
import ShinyText from './shinyText';

const digitalServices = [
  {
    name: 'Création Web & Applications Sur Mesure',
    description:
      'Nous concevons et développons des sites internet performants et des applications innovantes, adaptés à 100% à vos besoins spécifiques et à votre image de marque.',
    icon: CodeBracketIcon,
    color: 'from-emerald-500 to-green-600',
    stat: 'Visibilité et impact numérique renforcés',
  },
  {
    name: 'Maintenance & Support Continu',
    description:
      'Assurez la stabilité et la sécurité de vos plateformes digitales. Nous gérons les mises à jour, les correctifs et le support technique pour une disponibilité maximale.',
    icon: WrenchScrewdriverIcon,
    color: 'from-blue-500 to-indigo-600',
    stat: 'Fonctionnement 24/7 et sérénité garantie',
  },
  {
    name: 'Optimisation SEO & Visibilité Web',
    description:
      'Améliorez votre classement dans les moteurs de recherche et attirez un trafic qualifié. Nous mettons en œuvre des stratégies SEO avancées pour maximiser votre présence en ligne.',
    icon: MagnifyingGlassIcon,
    color: 'from-purple-500 to-pink-600',
    stat: 'Jusqu\'à la 1ère page Google et plus de clients',
  },
  {
    name: 'Accompagnement Stratégique Digital',
    description:
      'Bénéficiez de conseils d\'experts pour naviguer dans l\'écosystème digital. Nous vous guidons dans vos choix stratégiques pour une croissance durable.',
    icon: LightBulbIcon,
    color: 'from-cyan-500 to-blue-600',
    stat: 'Stratégie digitale claire et pertinente',
  },
  {
    name: 'Gestion de Contenu & Mises à Jour',
    description:
      'Nous vous aidons à maintenir votre contenu frais et pertinent. Mise à jour régulière, ajout de nouvelles fonctionnalités pour garder vos plateformes dynamiques.',
    icon: DocumentTextIcon,
    color: 'from-orange-500 to-red-600',
    stat: 'Contenu toujours pertinent et à jour',
  },
  {
    name: 'Solutions E-commerce & Paiement',
    description:
      'Développez votre activité en ligne avec des solutions e-commerce sécurisées et performantes, intégrant des systèmes de paiement fluides et fiables.',
    icon: ShoppingCartIcon,
    color: 'from-teal-500 to-cyan-600',
    stat: 'Augmentation de vos ventes en ligne',
  },
  {
    name: 'Audit & Analyse de Performance',
    description:
      'Nous réalisons des audits approfondis de vos plateformes existantes pour identifier les points d’amélioration et optimiser leur performance digitale.',
    icon: ChartBarIcon,
    color: 'from-red-500 to-orange-600',
    stat: 'Optimisation de vos investissements digitaux',
  },
  {
    name: 'Marketing Digital & Acquisition',
    description:
      'Attirez et convertissez plus de clients grâce à des stratégies de marketing digital ciblées : campagnes publicitaires, réseaux sociaux, email marketing.',
    icon: RocketLaunchIcon,
    color: 'from-fuchsia-500 to-pink-600',
    stat: 'Croissance accélérée de votre clientèle',
  },
  // Nouvelle solution pour les restaurants
  {
    name: 'Solutions Digitales pour Restaurants',
    description:
      'Créez une présence en ligne irrésistible avec des systèmes de commande en ligne, de réservation, et de gestion de menu digital, augmentant votre visibilité et vos revenus.',
    icon: BuildingStorefrontIcon, // Icône de restaurant/magasin
    color: 'from-yellow-500 to-amber-600', // Nouvelle couleur pour la distinguer
    stat: 'Optimisez commandes et réservations',
  },
];

const mainFeatures = [
  {
    icon: CodeBracketIcon,
    title: 'Création Web & App',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'SEO & Visibilité',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Maintenance Digitale',
  },

  {
    icon: BuildingStorefrontIcon, // Ajout de la nouvelle icône
    title: 'Services Restaurants', // Nouveau titre pour cette fonctionnalité
  },
];

export default function DigitalServicesPage() {
  return (
    <main className="w-full min-h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center text-black bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <Gradiant />

      {/* Decorative Background Blobs - Adjusted for all screen sizes */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20
                     sm:w-[36.125rem] md:w-[50rem] lg:w-[72.1875rem] xl:w-[80rem]"
        />
      </div>

      {/* Main content container with adaptive padding */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* --- Hero Section --- */}
        <section className="text-center py-12 sm:py-16 md:py-20 lg:py-28" aria-labelledby="hero-title">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo - Adaptive size and enhanced hover effect */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="Logo Adaptiserv - Retour à l'accueil"
                  width={80}
                  height={80}
                  className="relative object-contain hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
            </motion.div>

            {/* Title with adaptive size */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <TextPressure
                text="NOS SERVICES DIGITAUX"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#8400acff"
                strokeColor="#ff0000"
                minFontSize={24}
              />
            </motion.h1>

            {/* Subtitle centered with adaptive max width */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4"
            >
              <ShinyText
                text="Propulsez votre présence en ligne avec nos solutions digitales complètes : création web & applications, optimisation SEO, maintenance et marketing digital."
                disabled={false}
                speed={3}
                className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
              />
            </motion.p>

            {/* Quick Stats - Responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">+10 ans</div>
                <div className="text-xs sm:text-sm text-gray-600">d'expertise digitale</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">clients satisfaits</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">Croissance</div>
                <div className="text-xs sm:text-sm text-gray-600">mesurable de votre ROI</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Key Service Categories --- */}
        <section className="mb-12 sm:mb-16 flex justify-center" aria-labelledby="categories-title">
          <h2 id="categories-title" className="sr-only">Nos Principales Catégories de Services</h2>
          {/* Ajustement de la grille pour accueillir la nouvelle fonctionnalité */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- MagicBento Section --- */}
        <section className="w-full flex justify-center py-8 sm:py-12 mb-8 sm:mb-12" aria-labelledby="magicbento-title">
          <h2 id="magicbento-title" className="sr-only">Explorez nos fonctionnalités uniques avec MagicBento</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-xs sm:max-w-4xl md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto"
          >
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={350}
              particleCount={15}
              glowColor="79, 70, 229"
            />
          </motion.div>
        </section>

        {/* --- Detailed Services Grid --- */}
        <section className="py-12 sm:py-16" aria-labelledby="detailed-services-title">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="detailed-services-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pourquoi choisir Adaptiserv pour votre stratégie digitale ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-4">
              Découvrez les bénéfices concrets de collaborer avec notre équipe d'experts pour propulser votre présence en ligne.
            </p>
          </div>

          {/* Ajustement de la grille pour accueillir le nouveau service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-none mx-auto justify-items-center">
            {digitalServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-sm"
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`flex w-12 h-12 sm:w-16 sm:h-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="flex items-center gap-x-3 text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.name}
                  </h3>

                  {/* Stat Badge */}
                  <div className={`inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${service.color} rounded-full mb-3 sm:mb-4`}>
                    {service.stat}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Call to Action (CTA) Section --- */}
        <section className="text-center py-12 sm:py-16 flex justify-center" aria-labelledby="cta-title">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-indigo-100 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <h2 id="cta-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Prêt à propulser votre présence digitale ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre succès en ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Demander une consultation
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>

            </div>
          </div>
        </section>
      </div>

      {/* Rotating Logo Decoration - Adaptive position and increased size for more impact */}
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 opacity-10">
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 animate-spin-slow">
          <Image
            src="/logo.png"
            alt="Adaptiserv logo décoratif en rotation"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Background Blob - Adjusted for all screen sizes */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-[20rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20
                     sm:w-[36.125rem] md:w-[50rem] lg:w-[72.1875rem] xl:w-[80rem]"
        />
      </div>
    </main>
  );
}