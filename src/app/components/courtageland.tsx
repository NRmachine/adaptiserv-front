import { ArrowPathIcon, CalculatorIcon, CloudArrowUpIcon, CurrencyEuroIcon, DocumentCheckIcon, FingerPrintIcon, LockClosedIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Gradiant from './gradiant'

const features = [
	{
		name: 'Des tarifs négociés au meilleur prix',
		description:
			'Grâce à nos partenariats avec les principaux fournisseurs du marché.',
		icon: CurrencyEuroIcon,
	},
	{
		name: 'Un contrat sur mesure.',
		description: 'Adapté à votre activité et à votre consommation.',
		icon: CalculatorIcon,
	},
	{
		name: 'Des prix bloqués',
		description: 'Pendant toute la durée du contrat (1 an, 2 ans, 3 ans ou plus).',
		icon: DocumentCheckIcon,
	},
	{
		name: 'Une protection contre les hausses de tarifs.',
		description: 'Liées à l’instabilité du marché.',
		icon: ShieldCheckIcon,
	},
]

export default function Courtageland() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<Gradiant />
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base/7 font-semibold text-indigo-600">
						Réduisez votre facture.
					</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
						Courtage en électricité et gaz pour les entreprises .
					</p>
					<p className="mt-6 text-lg/8 text-gray-600">
						Nous accompagnons les entreprises de toutes tailles dans la réduction de
						leurs coûts énergétiques, grâce à notre service de courtage 100 % gratuit
						et sans engagement. On compare, On négocie, Vous décidez
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base/7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
				<div className="flex justify-center">
					<div className="relative rounded-full px-3 py-3 text-sm/6 text-gray-600 ring-3 ring-gray-900/10 hover:ring-gray-900/20">
						Obtenez un offre en 48h.{' '}
						<a
							href="#"
							className="font-semibold text-indigo-600"
						>
							<span aria-hidden="true" className="absolute inset-0" />
							Commencer maintenant <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}