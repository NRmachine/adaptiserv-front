"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  // Icônes adaptées aux services de sérigraphie/impression
  ArrowRightIcon,
  PaintBrushIcon, // Pour le design/création graphique
  CreditCardIcon, // Pour les cartes de visite/impression petit format
  MegaphoneIcon, // Pour les affiches/publicité
  BuildingStorefrontIcon, // Pour les panneaux/signalétique/installation
  SwatchIcon, // Pour l'impression générale/couleurs
  PhotoIcon,
  WrenchScrewdriverIcon,
  MapPinIcon, // Pour le visuel/graphisme
} from '@heroicons/react/24/outline';
import Gradiant from './gradiant';
import MagicBento from './magicbento';
import TextPressure from './textPressure';
import ShinyText from './shinyText';

// Renommé et adapté pour la sérigraphie
const SerigraphieServices = [
  {
    name: 'Création Design Graphique',
    description:
      'Nous réalisons des designs percutants et uniques pour tous vos supports de communication, de la conception initiale à la mise en page finale.',
    icon: PaintBrushIcon, // Icône pour le design
    color: 'from-emerald-500 to-green-600',
    stat: 'Identité visuelle impactante',
  },
  {
    name: 'Impression Petits Formats',
    description:
      'Cartes de visite, flyers, dépliants... Nous imprimons tous vos documents publicitaires avec une qualité irréprochable et des délais optimisés.',
    icon: CreditCardIcon, // Icône pour les cartes/petits formats
    color: 'from-blue-500 to-indigo-600',
    stat: 'Qualité d\'impression supérieure',
  },
  {
    name: 'Affiches Publicitaires & Flyers',
    description:
      'Créez de l\'impact avec nos affiches grand format et flyers personnalisés, conçus pour attirer l\'attention et maximiser votre visibilité.',
    icon: MegaphoneIcon, // Icône pour les affiches/publicité
    color: 'from-purple-500 to-pink-600',
    stat: 'Visibilité maximale garantie',
  },
  {
    name: 'Panneaux Publicitaires & Enseignes',
    description:
      'Du petit panneau à l\'enseigne géante, nous fabriquons des supports publicitaires durables et sur mesure pour une présence remarquable.',
    icon: BuildingStorefrontIcon, // Icône pour les panneaux/signalétique
    color: 'from-cyan-500 to-blue-600',
    stat: 'Supports grand format personnalisés',
  },
  {
    name: 'Installation & Pose Professionnelle',
    description:
      'Nos équipes assurent la pose et l\'installation de tous vos supports (panneaux, bâches, adhésifs) avec expertise et sécurité.',
    icon: WrenchScrewdriverIcon, // Icône pour l'installation/montage
    color: 'from-orange-500 to-red-600',
    stat: 'Installation rapide et sécurisée',
  },
  {
    name: 'Impression Tous Supports & Textiles',
    description:
      'Sérigraphie sur textiles, objets, bâches... Nous imprimons sur une multitude de supports pour une communication variée et efficace.',
    icon: SwatchIcon, // Icône pour l'impression diversifiée/textile
    color: 'from-teal-500 to-cyan-600',
    stat: 'Personnalisation illimitée',
  },
];

// Renommé et adapté pour la sérigraphie
const features = [
  {
    icon: PaintBrushIcon,
    title: 'Création Design',
  },
  {
    icon: CreditCardIcon,
    title: 'Impression Petits Formats',
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'Panneaux & Installation',
  },
  {
    icon: MegaphoneIcon,
    title: 'Affiches Publicitaires',
  },
  {
    icon: SwatchIcon,
    title: 'Impression Multi-supports',
  },
  {
    icon: MapPinIcon, // Nouvelle icône pour la distribution
    title: 'Distribution sur Mesure', // Nouveau titre pour la distribution
  },
];


export default function Serigraphie() { // Renommé le composant en "Serigraphie"
  const containerRef = useRef(null);

  return (
    <div className="w-full min-h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center text-black bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <Gradiant />
      
      {/* Decorative Background Blobs - Ajustés pour tous les écrans */}
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

      {/* Container principal avec padding adaptatif */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Hero Section - Centré avec des marges adaptatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-12 sm:py-16 md:py-20 lg:py-28"
        >
          {/* Logo - Taille adaptative */}
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
                alt="Logo Adaptiserv"
                width={80}
                height={80}
                className="relative object-contain hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
          </motion.div>

          {/* Title avec taille adaptative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6"
          >
            <TextPressure
              text="SERVICES DE SÉRIGRAPHIE & IMPRESSION" // NOUVEAU TITRE
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
          </motion.div>

          {/* Subtitle centré avec largeur maximale adaptative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4"
          >
            <ShinyText
              text="De la conception graphique à l'installation finale, nous gérons tous vos projets d'impression : cartes de visite, flyers, affiches, et panneaux grand format pour une communication impactante." // Nouvelle description
              disabled={false}
              speed={3}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
            />
          </motion.div>

          {/* Quick Stats - Grid responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">300+</div> {/* Stat adaptée */}
              <div className="text-xs sm:text-sm text-gray-600">Projets réalisés</div> {/* Description stat adaptée */}
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600">20 ans</div> {/* Stat adaptée */}
              <div className="text-xs sm:text-sm text-gray-600">d'expérience</div> {/* Description stat adaptée */}
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">100%</div> {/* Stat adaptée */}
              <div className="text-xs sm:text-sm text-gray-600">Satisfaction client</div> {/* Description stat adaptée */}
            </div>
          </motion.div>
        </motion.div>

        {/* Impression Categories (features) - Centré avec largeur adaptative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 flex justify-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-sm sm:max-w-xl lg:max-w-4xl"> {/* Ajusté pour 5 éléments */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MagicBento Section - Centré avec largeur maximale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center py-8 sm:py-12 mb-8 sm:mb-12"
        >
        <div className="w-full max-w-xs sm:max-w-4xl md:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto">
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
        </div>
        </motion.div>

        {/* Services Grid (formerly "Nos avantages exclusifs") - Grid adaptatif centré */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Pourquoi choisir notre expertise en sérigraphie ?</h3> {/* Nouveau titre */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-4">
              Découvrez les bénéfices concrets de collaborer avec notre équipe pour tous vos besoins en impression et communication visuelle.
            </p> {/* Nouvelle description */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-none mx-auto justify-items-center">
            {SerigraphieServices.map((service, i) => ( // Utilise SerigraphieServices
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-sm"
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`flex w-12 h-12 sm:w-16 sm:h-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="flex items-center gap-x-3 text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.name}
                  </h4>
                  
                  {/* Stat Badge */}
                  <div className={`inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${service.color} rounded-full mb-3 sm:mb-4`}>
                    {service.stat}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Centré avec boutons adaptatifs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-12 sm:py-16 flex justify-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-indigo-100 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Prêt à donner vie à vos projets d'impression ?
            </h3> {/* Nouveau titre */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
              Contactez-nous pour une estimation gratuite et découvrez comment nous pouvons sublimer votre communication visuelle.
            </p> {/* Nouvelle description */}
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Demander un devis gratuit
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
            
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rotating Logo Decoration - Position adaptative */}
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 opacity-10">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-spin-slow">
          <Image
            src="/logo.png"
            alt="Logo décoratif"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Background Blob - Ajusté pour tous les écrans */}
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
    </div>
  );
}