"use client"; 

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';   

export default function confidentialite() {
    // État pour gérer la tab active
    const [activeTab, setActiveTab] = useState('collecte');

    // Données pour les toggles (pour simuler leur état)
    const [marketingToggle, setMarketingToggle] = useState(true);
    const [partageToggle, setPartageToggle] = useState(false);
    const [accesToggle, setAccesToggle] = useState(false);

    // Fonction pour changer de tab
    const handleTabClick = (tabId: string) => { // Type ajouté ici
        setActiveTab(tabId);
    };

    // Fonction pour gérer les toggles
    const handleToggleClick = (toggleName: string) => { // Type ajouté ici
        switch (toggleName) {
            case 'marketing':
                setMarketingToggle(!marketingToggle);
                break;
            case 'partage':
                setPartageToggle(!partageToggle);
                break;
            case 'acces':
                setAccesToggle(!accesToggle);
                break;
            default:
                break;
        }
    };

    // Effet pour gérer le comportement des explanations (afficher/masquer)
    useEffect(() => {
        const updateExplanationVisibility = (toggleState: boolean, explanationId: string) => { // Types ajoutés ici
            const explanationEl = document.getElementById(explanationId);
            if (explanationEl) {
                if (toggleState) {
                    explanationEl.classList.add('visible');
                } else {
                    explanationEl.classList.remove('visible');
                }
            }
        };

        updateExplanationVisibility(marketingToggle, 'marketing-explanation');
        updateExplanationVisibility(partageToggle, 'partage-explanation');
        updateExplanationVisibility(accesToggle, 'acces-explanation');
    }, [marketingToggle, partageToggle, accesToggle]);


    return (
        <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">

            <header className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Politique de Confidentialité d'ADAPTISERV</h1>
                <p className="text-lg text-slate-600">Votre vie privée, expliquée simplement.</p>
                <p className="text-sm text-slate-500 mt-2">Dernière mise à jour : 26 juillet 2025</p>
            </header>

            <main className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-slate-900/5">

                <div className="text-center border-b border-slate-200 pb-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Notre Engagement</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Chez ADAPTISERV, nous nous engageons à protéger votre vie privée. Ce guide interactif est conçu pour vous aider à comprendre quelles données nous collectons, pourquoi nous les collectons, et comment vous pouvez les contrôler. Pour toute question, n'hésitez pas à nous contacter.</p>
                </div>

                <nav className="mb-8">
                    <div id="tab-buttons" className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                        <button
                            data-tab="collecte"
                            className={`tab-btn text-sm sm:text-base p-3 rounded-lg transition-all duration-200 hover:bg-sky-100 ${activeTab === 'collecte' ? 'active' : ''}`}
                            onClick={() => handleTabClick('collecte')}
                        >
                            Ce que nous collectons
                        </button>
                        <button
                            data-tab="utilisation"
                            className={`tab-btn text-sm sm:text-base p-3 rounded-lg transition-all duration-200 hover:bg-sky-100 ${activeTab === 'utilisation' ? 'active' : ''}`}
                            onClick={() => handleTabClick('utilisation')}
                        >
                            Comment nous l'utilisons
                        </button>
                        <button
                            data-tab="securite"
                            className={`tab-btn text-sm sm:text-base p-3 rounded-lg transition-all duration-200 hover:bg-sky-100 ${activeTab === 'securite' ? 'active' : ''}`}
                            onClick={() => handleTabClick('securite')}
                        >
                            Votre sécurité
                        </button>
                        <button
                            data-tab="controle"
                            className={`tab-btn text-sm sm:text-base p-3 rounded-lg transition-all duration-200 hover:bg-sky-100 ${activeTab === 'controle' ? 'active' : ''}`}
                            onClick={() => handleTabClick('controle')}
                        >
                            Vos droits
                        </button>
                    </div>
                </nav>

                <div id="tab-contents">
                    <div id="collecte" className={`tab-content ${activeTab === 'collecte' ? 'active' : ''}`}>
                        <h3 className="text-xl font-bold mb-4">Informations que nous collectons</h3>
                        <p className="text-slate-600 mb-6">Pour vous fournir nos prestations de services aux entreprises et améliorer votre expérience sur www.adaptiserv.fr, nous pouvons collecter les types de données suivants :</p>
                        <div className="space-y-4">
                            <div className="flex items-start p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <span className="text-2xl mr-4 pt-1">👤</span>
                                <div>
                                    <h4 className="font-semibold">Informations d'identité</h4>
                                    <p className="text-slate-500">Votre nom et prénom.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <span className="text-2xl mr-4 pt-1">📧</span>
                                <div>
                                    <h4 className="font-semibold">Coordonnées</h4>
                                    <p className="text-slate-500">Votre adresse e-mail et autres informations de contact professionnelles.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <span className="text-2xl mr-4 pt-1">📍</span>
                                <div>
                                    <h4 className="font-semibold">Données démographiques</h4>
                                    <p className="text-slate-500">Code postal, préférences et intérêts liés à votre secteur d'activité.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="utilisation" className={`tab-content ${activeTab === 'utilisation' ? 'active' : ''}`}>
                        <h3 className="text-xl font-bold mb-4">Utilisation de vos informations</h3>
                        <p className="text-slate-600 mb-6">Vos données nous aident à vous offrir un meilleur service, notamment pour :</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <h4 className="font-semibold mb-1">✅ Améliorer nos services</h4>
                                <p className="text-slate-500 text-sm">Comprendre les besoins de votre entreprise pour faire évoluer nos offres.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <h4 className="font-semibold mb-1">📢 Communiquer avec vous</h4>
                                <p className="text-slate-500 text-sm">Vous envoyer des informations pertinentes ou des offres spéciales adaptées à votre activité.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <h4 className="font-semibold mb-1">🎨 Personnaliser votre expérience</h4>
                                <p className="text-slate-500 text-sm">Adapter le contenu de notre site web à vos centres d'intérêt.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg ring-1 ring-slate-200">
                                <h4 className="font-semibold mb-1">📊 Réaliser des études</h4>
                                <p className="text-slate-500 text-sm">Vous contacter occasionnellement pour des études de marché afin de mieux servir nos clients.</p>
                            </div>
                        </div>
                    </div>

                    <div id="securite" className={`tab-content ${activeTab === 'securite' ? 'active' : ''}`}>
                        <h3 className="text-xl font-bold mb-4">La sécurité de vos données est notre priorité</h3>
                        <div className="p-6 bg-sky-50 border-l-4 border-sky-500 rounded-r-lg">
                            <div className="flex items-center">
                                <span className="text-4xl mr-4">🛡️</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-sky-800">Engagement de sécurité</h4>
                                    <p className="text-sky-700">Nous nous engageons à protéger vos informations. Des mesures de sécurité physiques, électroniques et de gestion robustes sont en place pour empêcher tout accès ou divulgation non autorisé.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                            <h4 className="font-semibold text-amber-800">Liens vers d'autres sites</h4>
                            <p className="text-amber-700 text-sm">Notre politique ne s'applique pas aux sites externes. Soyez prudent et consultez leur propre politique de confidentialité lorsque vous quittez notre site.</p>
                        </div>
                    </div>

                    <div id="controle" className={`tab-content ${activeTab === 'controle' ? 'active' : ''}`}>
                        <h3 className="text-xl font-bold mb-4">Vous avez le contrôle</h3>
                        <p className="text-slate-600 mb-6">Vous pouvez gérer vos préférences et contrôler l'utilisation de vos données. Cliquez sur les options ci-dessous pour voir comment.</p>
                        <div className="space-y-4">
                            <div className="p-4 bg-white rounded-lg ring-1 ring-slate-200">
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggleClick('marketing')}>
                                    <label className="font-semibold select-none">Recevoir des communications marketing</label>
                                    <div id="marketing-toggle" className={`fake-toggle ${marketingToggle ? 'on' : ''}`}><div className="dot"></div></div>
                                </div>
                                <div id="marketing-explanation" className={`explanation ${marketingToggle ? 'visible' : ''} border-t border-slate-200`}>
                                    <p className="text-sm text-slate-500">Vous pouvez vous désinscrire à tout moment via le lien dans nos e-mails ou en nous contactant. Sur un formulaire, décochez la case correspondante pour ne pas être ajouté à nos listes.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-lg ring-1 ring-slate-200">
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggleClick('partage')}>
                                    <label className="font-semibold select-none">Partage d'informations avec des tiers</label>
                                    <div id="partage-toggle" className={`fake-toggle ${partageToggle ? 'on' : ''}`}><div className="dot"></div></div>
                                </div>
                                <div id="partage-explanation" className={`explanation ${partageToggle ? 'visible' : ''} border-t border-slate-200`}>
                                    <p className="text-sm text-slate-500">Nous ne vendons, ne distribuons et ne louons pas vos informations personnelles à des tiers sans votre permission, sauf si la loi l'exige.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-lg ring-1 ring-slate-200">
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggleClick('acces')}>
                                    <label className="font-semibold select-none">Accéder à vos données et les corriger</label>
                                    <div id="acces-toggle" className={`fake-toggle ${accesToggle ? 'on' : ''}`}><div className="dot"></div></div>
                                </div>
                                <div id="acces-explanation" className={`explanation ${accesToggle ? 'visible' : ''} border-t border-slate-200`}>
                                    <p className="text-sm text-slate-500">Vous pensez que nous détenons des informations incorrectes ? Contactez-nous à Contact@adaptiserv.fr et nous les corrigerons rapidement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
                <div className="space-y-4 max-w-2xl mx-auto">
                    <details className="bg-white p-4 rounded-lg shadow-sm ring-1 ring-slate-900/5 cursor-pointer group">
                        <summary className="font-semibold list-none flex justify-between items-center">
                            Vendez-vous mes données ?
                            <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">+</span>
                        </summary>
                        <p className="mt-2 text-slate-600">Non. Nous ne vendons, ne distribuons ni ne louons vos informations personnelles à des tiers sans votre permission explicite, sauf si la loi nous y oblige.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-sm ring-1 ring-slate-900/5 cursor-pointer group">
                        <summary className="font-semibold list-none flex justify-between items-center">
                            Comment puis-je me désinscrire des e-mails ?
                            <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">+</span>
                        </summary>
                        <p className="mt-2 text-slate-600">Vous pouvez vous désinscrire à tout moment en cliquant sur le lien "se désinscrire" situé en bas de chaque e-mail que nous envoyons, ou en nous contactant directement.</p>
                        <p className="mt-2 text-slate-600"></p>

                    </details>
                </div>
            </section>
<div>
    <p>
        
    </p>
</div>
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
                          href="/conditions"
                          className="text-indigo-600 hover:text-indigo-700 font-medium underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Conditions générales/Mentions légales/Gestion des cookies
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
    );
}