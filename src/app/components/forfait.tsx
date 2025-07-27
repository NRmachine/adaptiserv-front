'use client'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Link from 'next/link'

const tiers = [
	{
		name: 'Site Vitrine Essential',
		id: 'tier-essential',
		price: '499€',
		period: '/site',
		description: 'La solution idéale pour débuter votre présence en ligne.',
		features: [
			'Design responsive (mobile & desktop)',
			"Jusqu'à 5 pages",
			'Formulaire de contact',
			'Support par email',
		],
		featured: false,
	},
	{
		name: 'Site Pro Premium',
		id: 'tier-premium',
		price: '1499€',
		period: '/site',
		description: 'La solution premium pour une présence en ligne exceptionnelle.',
		features: [
			'Tout du forfait Pro',
			'Pages illimitées',
			'E-commerce intégré',
			'Système de réservation',
			'Support 24/7',
		],
		featured: true,
	},
	{
		name: 'Site Pro',
		id: 'tier-pro',
		price: '999€',
		period: '/site',
		description: 'Une solution complète pour votre entreprise.',
		features: [
			'Tout du forfait Essential',
			"Jusqu'à 10 pages",
			'Blog intégré',
			'Optimisation SEO avancée',
			'Support prioritaire',
		],
		featured: false,
	},
]

export default function Forfait() {
	const [selectedTier, setSelectedTier] = useState<string | null>(null)

	const handleTierSelection = (tierId: string) => {
		setSelectedTier(tierId)

		// Scroll to contact section
		const contactSection = document.getElementById('contact')
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' })
		}

		// You can add additional actions here like:
		// - Updating URL parameters
		// - Sending analytics event
		// - Showing a modal
		console.log(`Selected tier: ${tierId}`)
	}

	return (
		<div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="services">
			<div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
				<div
					className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>


			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-base/7 font-semibold text-indigo-600">Nos Forfaits</h2>
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
					Choisissez l'offre adaptée à vos besoins
				</p>
			</div>

			<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3">
				{tiers.map((tier) => (
					<div
						key={tier.id}
						className={`rounded-3xl ${
							tier.featured
								? 'relative bg-gray-900 lg:scale-110 z-10 shadow-2xl'
								: 'bg-white/60'
						} p-8 ring-1 ring-gray-900/10 sm:p-10`}
					>
						{tier.featured && (
							<div className="absolute -top-4 right-0 left-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-3 py-1 text-sm font-semibold text-white text-center">
								Recommandé
							</div>
						)}
						<h3
							className={`text-base/7 font-semibold ${
								tier.featured ? 'text-indigo-400' : 'text-indigo-600'
							}`}
						>
							{tier.name}
						</h3>
						<p className="mt-4 flex items-baseline gap-x-2">
							<span
								className={`text-5xl font-semibold tracking-tight ${
									tier.featured ? 'text-white' : 'text-gray-900'
								}`}
							>
								{tier.price}
							</span>
							<span
								className={
									tier.featured ? 'text-gray-400' : 'text-gray-500'
								}
							>
								{tier.period}
							</span>
						</p>
						<p
							className={`mt-6 text-base/7 ${
								tier.featured ? 'text-gray-300' : 'text-gray-600'
							}`}
						>
							{tier.description}
						</p>
						<ul
							role="list"
							className={`mt-8 space-y-3 text-sm/6 ${
								tier.featured ? 'text-gray-300' : 'text-gray-600'
							} sm:mt-10`}
						>
							{tier.features.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<CheckIcon
										className={`h-6 w-5 flex-none ${
											tier.featured ? 'text-indigo-400' : 'text-indigo-600'
										}`}
									/>
									{feature}
								</li>
							))}
						</ul>
						<Link
							href={`/contact?plan=${tier.id}`}
							className="block w-full"
							onClick={(e) => {
								e.preventDefault()
								handleTierSelection(tier.id)
							}}
						>
							<button
								className={`w-full mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10
                ${selectedTier === tier.id
									? 'bg-indigo-700 hover:bg-indigo-800'
									: 'bg-indigo-500 hover:bg-indigo-600'}`}
							>
								{selectedTier === tier.id
									? 'Option sélectionnée'
									: tier.featured
									? 'Choisir ce forfait'
									: 'Je commence mon projet'}
							</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
