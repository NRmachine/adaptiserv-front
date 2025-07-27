"use client"; // Indique que ce composant est un Client Component dans Next.js

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

// Données pour les articles de l'accordéon
const accordionItems = [
    {
        title: "1. Objet des Conditions",
        content: "Les présentes CGVU ont pour objet de définir les modalités et conditions dans lesquelles ADAPTISERV met à disposition ses services et les conditions d'utilisation du Site par l'utilisateur."
    },
    {
        title: "2. Accès au Site et aux Services",
        content: "L'accès au Site www.adaptiserv.fr est gratuit. L'accès à nos prestations de services peut être soumis à la création d'un compte et/ou au paiement d'une prestation. L'utilisateur s'engage à fournir des informations exactes et à jour lors de son inscription."
    },
    {
        title: "3. Description des Services Proposés",
        content: `ADAPTISERV propose une gamme de prestations de services pour les entreprises, incluant par exemple :
            <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Services de courtage en électricité</li>
                <li>Services de sérigraphie et impression</li>
                <li>Services de création digitale</li>
                <li>Mise à disposition d'agents commerciaux</li>
            </ul>`
    },
    {
        title: "4. Obligations de l'Utilisateur",
        content: `L'utilisateur s'engage à utiliser le Site et les services de manière loyale et conforme aux présentes CGVU, aux lois et règlements en vigueur. Il s'engage notamment à ne pas :
            <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Utiliser le Site à des fins illégales ou non autorisées.</li>
                <li>Porter atteinte aux droits de propriété intellectuelle d'ADAPTISERV ou de tiers.</li>
                <li>Tenter d'accéder de manière non autorisée à nos systèmes informatiques ou à des données.</li>
            </ul>`
    },
    {
        title: "5. Propriété Intellectuelle",
        content: "Tous les contenus présents sur le Site (textes, images, logos, vidéos, etc.) sont la propriété exclusive d'ADAPTISERV ou de ses partenaires et sont protégés par le droit d'auteur. Toute reproduction ou exploitation, totale ou partielle, est strictement interdite sans notre autorisation écrite préalable."
    },
    {
        title: "6. Limitation de Responsabilité",
        content: "ADAPTISERV ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du Site ou de l'impossibilité de l'utiliser. Nous mettons tout en œuvre pour assurer un service de qualité mais ne garantissons pas que le Site sera exempt d'erreurs ou de virus."
    },
    {
        title: "7 & 8. Modifications et Droit Applicable",
        content: `<p><strong>Modifications :</strong> Nous nous réservons le droit de modifier ces CGVU à tout moment. Les changements prendront effet dès leur publication sur le Site. Il est de votre responsabilité de les consulter régulièrement.</p>
                   <p><strong>Droit applicable :</strong> Ces CGVU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.</p>`
    }
];

// Données pour les questions fréquentes (FAQ)
const faqItems = [
    {
        question: "Puis-je utiliser le logo d'ADAPTISERV sur mon site ?",
        answer: "Non, sauf autorisation écrite de notre part. Tous les logos, textes et images sont notre propriété intellectuelle (voir article 5 de nos CGVU)."
    },
    {
        question: "Que se passe-t-il si les conditions changent ?",
        answer: "Nous publierons les nouvelles conditions sur le site. En continuant à utiliser nos services après une modification, vous acceptez les nouvelles conditions (voir article 7 de nos CGVU)."
    },
    {
        question: "Comment puis-je contacter ADAPTISERV pour un litige ?",
        answer: "En cas de litige, et à défaut d'accord amiable, compétence exclusive est attribuée aux tribunaux compétents de Paris (voir article 8 de nos CGVU)."
    }
];

// Données pour les Mentions Légales
const mentionsLegalesItems = [
    {
        title: "1. Éditeur du Site",
        content: `<strong>Nom de l'entreprise :</strong> ADAPTISERV<br/>
                  <strong>Forme juridique :</strong> [SARL, SAS, Auto-entreprise, etc.]<br/>
                  <strong>Adresse du siège social :</strong> [Votre adresse complète]<br/>
                  <strong>Numéro de téléphone :</strong> [Votre numéro de téléphone]<br/>
                  <strong>Adresse e-mail :</strong> [Votre adresse e-mail de contact]<br/>
                  <strong>Numéro d'immatriculation (SIRET/RCS) :</strong> [Votre numéro SIRET/RCS]<br/>
                  <strong>Capital social :</strong> [Votre capital social, si applicable]`
    },
    {
        title: "2. Responsable de la publication",
        content: `<strong>Nom :</strong> [Nom et prénom du responsable de la publication]<br/>
                  <strong>Contact :</strong> [Adresse e-mail ou numéro de téléphone du responsable]`
    },
    {
        title: "3. Hébergeur du Site",
        content: `<strong>Nom de l'hébergeur :</strong> [Nom de votre hébergeur, ex: OVH, Gandi, AWS, Vercel, Netlify]<br/>
                  <strong>Adresse du siège social de l'hébergeur :</strong> [Adresse de l'hébergeur]<br/>
                  <strong>Numéro de téléphone de l'hébergeur :</strong> [Numéro de téléphone de l'hébergeur]`
    },
    {
        title: "4. Propriété Intellectuelle",
        content: `ADAPTISERV est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, icônes, sons, logiciels.
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : ADAPTISERV.
                  Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`
    },
    {
        title: "5. Données Personnelles",
        content: "Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre Politique de Confidentialité."
    },
    {
        title: "6. Litiges",
        content: "Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, compétence exclusive est attribuée aux tribunaux compétents de Paris."
    }
];

// NOUVEAU : Données pour la Gestion des Cookies
const cookieManagementItems = [
    {
        title: "1. Qu'est-ce qu'un cookie ?",
        content: "Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il est utilisé pour améliorer votre expérience de navigation et fournir des informations aux propriétaires du site."
    },
    {
        title: "2. Comment utilisons-nous les cookies ?",
        content: `Nous utilisons les cookies pour :
            <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Assurer le bon fonctionnement du site (cookies strictement nécessaires).</li>
                <li>Analyser l'utilisation du site (cookies de performance/analytiques comme Google Analytics).</li>
                <li>Personnaliser votre expérience (cookies de fonctionnalité).</li>
                <li>Publicité ciblée (si applicable, cookies de ciblage/publicitaires).</li>
            </ul>`
    },
    {
        title: "3. Types de cookies utilisés",
        content: `Nous distinguons :
            <ul class="list-disc list-inside mt-2 space-y-1">
                <li><strong>Strictement nécessaires :</strong> Indispensables au fonctionnement.</li>
                <li><strong>Performance/Analytiques :</strong> Pour comprendre et améliorer le site (données anonymes).</li>
                <li><strong>Fonctionnalité :</strong> Pour mémoriser vos préférences.</li>
                <li><strong>Ciblage/Publicitaires :</strong> Pour des publicités pertinentes (si applicable).</li>
            </ul>`
    },
    {
        title: "4. Comment gérer les cookies ?",
        content: "Vous pouvez accepter ou refuser les cookies en modifiant les paramètres de votre navigateur ou via notre outil de gestion des cookies (si disponible). La désactivation de certains cookies peut affecter la fonctionnalité du site."
    },
    {
        title: "5. Modifications de cette politique",
        content: "Nous pouvons mettre à jour cette Politique de Gestion des Cookies. Toute modification sera publiée sur cette page avec une nouvelle date d'entrée en vigueur. Nous vous encourageons à consulter régulièrement cette page."
    }
];


// Composant réutilisable pour un élément d'accordéon ou de FAQ
interface CollapsibleItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    toggleHandler: () => void;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, content, isOpen, toggleHandler }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState('0px'); // État pour contrôler max-height

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                // Lorsque l'élément s'ouvre, on définit la hauteur sur la scrollHeight
                // Cela permet à la transition CSS de s'animer de 0 à la hauteur réelle
                setContentHeight(`${contentRef.current.scrollHeight}px`);
            } else {
                // Lorsque l'élément se ferme, on définit la hauteur à 0
                setContentHeight('0px');
            }
        }
    }, [isOpen]); // Dépendance à isOpen

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                className={`w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 transition-colors duration-200 ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                onClick={toggleHandler}
            >
                {title}
                <span className={`text-indigo-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
                ref={contentRef}
                className="collapsible-content"
                style={{ maxHeight: contentHeight }} // Utilise l'état pour maxHeight
            >
                <div className="p-4 pt-0 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

// Composant pour la section FAQ
interface FAQSectionProps {
    faqItems: { question: string; answer: string }[];
    openFaqIndex: number | null;
    toggleFaq: (index: number) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems, openFaqIndex, toggleFaq }) => {
    return (
        <section className="mt-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-slate-900/5">
            <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
                Vous avez des interrogations sur nos CGVU ? Trouvez des réponses rapides ici.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
                {faqItems.map((item, index) => (
                    <CollapsibleItem
                        key={index}
                        title={item.question}
                        content={item.answer}
                        isOpen={openFaqIndex === index}
                        toggleHandler={() => toggleFaq(index)}
                    />
                ))}
            </div>
        </section>
    );
};

// Composant pour la section Mentions Légales
interface MentionsLegalesSectionProps {
    mentionsLegalesItems: { title: string; content: string }[];
    openMentionsLegalesIndex: number | null;
    toggleMentionsLegales: (index: number) => void;
}

const MentionsLegalesSection: React.FC<MentionsLegalesSectionProps> = ({ mentionsLegalesItems, openMentionsLegalesIndex, toggleMentionsLegales }) => {
    return (
        <section className="mt-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-slate-900/5">
            <h2 className="text-2xl font-bold text-center mb-8">Mentions Légales</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
                Retrouvez ici les informations légales concernant ADAPTISERV et l'utilisation de notre site web.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
                {mentionsLegalesItems.map((item, index) => (
                    <CollapsibleItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openMentionsLegalesIndex === index}
                        toggleHandler={() => toggleMentionsLegales(index)}
                    />
                ))}
            </div>
        </section>
    );
};

// NOUVEAU : Composant pour la section Gestion des Cookies
interface CookieManagementSectionProps {
    cookieManagementItems: { title: string; content: string }[];
    openCookieManagementIndex: number | null;
    toggleCookieManagement: (index: number) => void;
}

const CookieManagementSection: React.FC<CookieManagementSectionProps> = ({ cookieManagementItems, openCookieManagementIndex, toggleCookieManagement }) => {
    return (
        <section className="mt-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-slate-900/5">
            <h2 className="text-2xl font-bold text-center mb-8">Gestion des Cookies</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
                Découvrez comment ADAPTISERV utilise les cookies sur www.adaptiserv.fr et comment vous pouvez les gérer.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
                {cookieManagementItems.map((item, index) => (
                    <CollapsibleItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openCookieManagementIndex === index}
                        toggleHandler={() => toggleCookieManagement(index)}
                    />
                ))}
            </div>
        </section>
    );
};


export default function conditions() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [openMentionsLegalesIndex, setOpenMentionsLegalesIndex] = useState<number | null>(null);
    const [openCookieManagementIndex, setOpenCookieManagementIndex] = useState<number | null>(null); // NOUVEL état pour les cookies

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    };

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const toggleMentionsLegales = (index: number) => {
        setOpenMentionsLegalesIndex(openMentionsLegalesIndex === index ? null : index);
    };

    // NOUVELLE fonction de bascule pour la Gestion des Cookies
    const toggleCookieManagement = (index: number) => {
        setOpenCookieManagementIndex(openCookieManagementIndex === index ? null : index);
    };

    return (
        <>
            {/* Styles globaux pour le comportement de l'accordéon/FAQ */}
            <style jsx global>{`
                .collapsible-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-in-out;
                }
                .collapsible-content p + p {
                    margin-top: 0.75rem;
                }
            `}</style>

            <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">

                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Nos Conditions d'Utilisation</h1>
                    <p className="text-lg text-slate-600">Un guide interactif pour comprendre nos services et vos droits.</p>
                    <p className="text-sm text-slate-500 mt-2">Dernière mise à jour : 26 juillet 2025</p>
                </header>

                <main className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-slate-900/5">

                    <section id="summary" className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">L'essentiel en bref</h2>
                        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
                            Voici un aperçu rapide des points clés de nos Conditions Générales de Vente et d'Utilisation.
                            Cliquez sur les sections détaillées ci-dessous pour en savoir plus.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                                <div className="text-3xl mb-2">🤝</div>
                                <h3 className="font-semibold">Utilisation Loyale</h3>
                                <p className="text-sm text-slate-600">Utilisez nos services de manière légale et respectueuse.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                                <div className="text-3xl mb-2">©️</div>
                                <h3 className="font-semibold">Propriété Intellectuelle</h3>
                                <p className="text-sm text-slate-600">Le contenu du site nous appartient. Pas de copie sans autorisation.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
                                <div className="text-3xl mb-2">⚙️</div>
                                <h3 className="font-semibold">Nos Services</h3>
                                <p className="text-sm text-slate-600">Nous vous mettons à disposition des prestations de services pour entreprises.</p>
                            </div>
                        </div>
                    </section>

                    <section id="details">
                        <h2 className="text-2xl font-bold text-center mb-8">Détails des Conditions</h2>
                        <div className="space-y-3">
                            {accordionItems.map((item, index) => (
                                <CollapsibleItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openAccordionIndex === index}
                                    toggleHandler={() => toggleAccordion(index)}
                                />
                            ))}
                        </div>
                    </section>
                </main>

                {/* Utilisation du composant FAQSection */}
                <FAQSection faqItems={faqItems} openFaqIndex={openFaqIndex} toggleFaq={toggleFaq} />

                {/* Utilisation du composant MentionsLegalesSection */}
                <MentionsLegalesSection 
                    mentionsLegalesItems={mentionsLegalesItems} 
                    openMentionsLegalesIndex={openMentionsLegalesIndex} 
                    toggleMentionsLegales={toggleMentionsLegales} 
                />

                {/* NOUVEAU : Utilisation du composant CookieManagementSection */}
                <CookieManagementSection
                    cookieManagementItems={cookieManagementItems}
                    openCookieManagementIndex={openCookieManagementIndex}
                    toggleCookieManagement={toggleCookieManagement}
                />

                <footer className="w-full border-t border-slate-200 bg-white px-4 py-6">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left max-w-7xl">
        {/* Logo + nom à gauche */}
        <nav className="flex items-center gap-3">
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
        </nav>

        {/* Liens + copyright à droite */}
        <div className="flex flex-col sm:items-end">
          <p>
            <a
              href="/confidentialite"
              className="text-indigo-600 hover:text-indigo-700 font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique de confidentialité
            </a>{" "}
            —{" "}
            <a
              href="/"
              className="text-indigo-600 hover:text-indigo-700 font-medium underline ml-1"
            >
              Accueil
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} ADAPTISERV. Tous droits réservés.</p>
        </div>
      </div>
    </footer>

            </div>
        </>
    );
}