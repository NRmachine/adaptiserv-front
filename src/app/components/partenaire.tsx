'use client'

import Image from 'next/image'

const partners = [
  { name: 'EDF', src: '/partenaires/edf.png' },
  { name: 'Engie', src: '/partenaires/engie.png' },
  { name: 'Total Energies', src: '/partenaires/TotalEnergies.png' },
  { name: 'Alpiq', src: '/partenaires/Alpiq.png' },
  { name: 'Ekwateur', src: '/partenaires/Ekwateur.png' },
  { name: 'Eni', src: '/partenaires/Eni.png' },
  { name: 'Mint Energie', src: '/partenaires/Mint.png' },
  { name: 'OHM Energie', src: '/partenaires/OHMenergie.jpeg' },
  { name: 'Planète OUI', src: '/partenaires/PlaneteOUI.png' },
  { name: 'Primeo Energie', src: '/partenaires/PrimeoEnergie.png' },
  { name: 'Vattenfall', src: '/partenaires/Vattenfall.png' },
  { name: 'Ilek', src: '/partenaires/ilek.png' },
]

export default function Partenaire() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Nos partenaires de confiance dans le secteur énergétique
        </h2>
        <div className="mt-10 overflow-hidden">
          <div className="flex animate-scroll-seamless">
            {/* Premier ensemble de logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
                style={{ width: '200px', height: '100px' }}
              >
                <Image
                  alt={partner.name}
                  src={partner.src}
                  width={140}
                  height={70}
                  className="w-32 h-16 object-contain"
                />
              </div>
            ))}
            {/* Duplication exacte pour la boucle parfaite */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
                style={{ width: '200px', height: '100px' }}
              >
                <Image
                  alt={partner.name}
                  src={partner.src}
                  width={140}
                  height={70}
                  className="w-32 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${partners.length} - 64px * ${partners.length}));
          }
        }

        .mt-10 {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .animate-scroll-seamless {
          animation: scroll-seamless 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
  