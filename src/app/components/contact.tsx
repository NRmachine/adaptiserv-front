'use client'

import { useState } from 'react'
import { ChevronDown, Calendar, Clock, User } from 'lucide-react'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    siret: '',
    country: 'FR',
    phone: '',
    message: '',
    contactDate: '',
    contactTime: '',
    commercial: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  }

  const commerciaux = [
    { id: '1',  specialite: 'Courtage Energie' },
    { id: '2',  specialite: 'Solutions Digitales' },
    { id: '3',  specialite: 'Serigraphie et Impression' },
    { id: '4',  specialite: 'Agents Commerciaux' },
    { id: 'auto', name: 'Attribution automatique', specialite: 'Selon votre demande' }
  ]


  // Générer les créneaux horaires
  const timeSlots = []
  for (let hour = 9; hour <= 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      timeSlots.push(timeString)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos projets digitaux.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="space-y-8">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-indigo-600" />
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Prénom *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Entreprise
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="siret" className="block text-sm font-semibold text-gray-900 mb-2">
                    SIRET/SIREN
                  </label>
                  <input
                    id="siret"
                    name="siret"
                    type="text"
                    value={formData.siret}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="123 456 789 00012"
                    pattern="[0-9\s]{14,17}"
                  />
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Numéro de téléphone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="FR">🇫🇷 France (+33)</option>
                    <option value="DE">🇩🇪 Allemagne (+49)</option>
                    <option value="ES">🇪🇸 Espagne (+34)</option>
                    <option value="IT">🇮🇹 Italie (+39)</option>
                    <option value="AU">🇦🇺 Australie (+61)</option>
                    <option value="BR">🇧🇷 Brésil (+55)</option>
                    <option value="IN">🇮🇳 Inde (+91)</option>
                    <option value="JP">🇯🇵 Japon (+81)</option>
                    <option value="CN">🇨🇳 Chine (+86)</option>
                    <option value="RU">🇷🇺 Russie (+7)</option>
                    <option value="MX">🇲🇽 Mexico (+52)</option>
                    <option value="ZA">🇿🇦 Afrique du Sud (+27)</option>
                    <option value="NG">🇳🇬 Nigeria (+234)</option>
                    <option value="AR">🇦🇷 Argentine (+54)</option>
                    <option value="TR">🇹🇷 Turquie (+90)</option>
                    <option value="KR">🇰🇷 Corée du Sud (+82)</option>
                    <option value="NL">🇳🇱 Pays-Bas (+31)</option>
                    <option value="PT">🇵🇹 Portugal (+351)</option>
                    <option value="PL">🇵🇱 Pologne (+48)</option>
                    <option value="GR">🇬🇷 Grèce (+30)</option>
                    <option value="IE">🇮🇪 Irlande (+353)</option>
                    <option value="AT">🇦🇹 Autriche (+43)</option>
                    <option value="DK">🇩🇰 Danemark (+45)</option>
                    <option value="NO">🇳🇴 Norvège (+47)</option>
                    <option value="FI">🇫🇮 Finlande (+358)</option>
                    <option value="HU">🇭🇺 Hongrie (+36)</option>
                    <option value="CZ">🇨🇿 République tchèque (+420)</option>
                    <option value="RO">🇷🇴 Roumanie (+40)</option>
                    <option value="NZ">🇳🇿 Nouvelle-Zélande (+64)</option>
                    <option value="CL">🇨🇱 Chili (+56)</option>
                    <option value="CO">🇨🇴 Colombie (+57)</option>
                    <option value="EG">🇪🇬 Égypte (+20)</option>
                    <option value="TH">🇹🇭 Thaïlande (+66)</option>
                    <option value="ID">🇮🇩 Indonésie (+62)</option>
                    <option value="MY">🇲🇾 Malaisie (+60)</option>
                    <option value="PH">🇵🇭 Philippines (+63)</option>
                    <option value="PK">🇵🇰 Pakistan (+92)</option>
                    <option value="UA">🇺🇦 Ukraine (+380)</option>
                    <option value="BG">🇧🇬 Bulgarie (+359)</option>
                    <option value="HR">🇭🇷 Croatie (+385)</option>
                    <option value="SK">🇸🇰 Slovaquie (+421)</option>
                    <option value="EE">🇪🇪 Estonie (+372)</option>
                    <option value="LT">🇱🇹 Lituanie (+370)</option>
                    <option value="LV">🇱🇻 Lettonie (+371)</option>
                    <option value="MT">🇲🇹 Malte (+356)</option>
                    <option value="CY">🇨🇾 Chypre (+357)</option>
                    <option value="MC">🇲🇨 Monaco (+377)</option>
                    <option value="LI">🇱🇮 Liechtenstein (+423)</option>
                    <option value="MA">🇲🇦 Maroc (+212)</option>
                    <option value="DZ">🇩🇿 Algérie (+213)</option>
                    <option value="TN">🇹🇳 Tunisie (+216)</option>
                    <option value="SN">🇸🇳 Sénégal (+221)</option>
                    <option value="KE">🇰🇪 Kenya (+254)</option>
                    <option value="GH">🇬🇭 Ghana (+233)</option>
                    <option value="CM">🇨🇲 Cameroun (+237)</option>
                    <option value="ET">🇪🇹 Ethiopie (+251)</option>
                    <option value="TZ">🇹🇿 Tanzanie (+255)</option>
                    <option value="UG">🇺🇬 Ouganda (+256)</option>
                    <option value="SD">🇸🇩 Sudan (+249)</option>
                    <option value="LY">🇱🇾 Libye (+218)</option>
                    <option value="IQ">🇮🇶 Irak (+964)</option>
                    <option value="IR">🇮🇷 Iran (+98)</option>
                    <option value="AF">🇦🇫 Afghanistan (+93)</option>
                    <option value="BD">🇧🇩 Bangladesh (+880)</option>
                    <option value="LK">🇱🇰 Srilanka (+94)</option>
                    <option value="NP">🇳🇵 Népal (+977)</option>
                    <option value="VN">🇻🇳 Viêt Nam (+84)</option>
                    <option value="KH">🇰🇭 Cambodge (+855)</option>
                    <option value="MM">🇲🇲 Birmanie (+95)</option>
                    <option value="TW">🇹🇼 Taïwan (+886)</option>
                    <option value="HK">🇭🇰 Hong Kong (+852)</option>
                    <option value="MO">🇲🇴 Macao (+853)</option>
                    <option value="KR">🇰🇷 Corée du Sud (+82)</option>
                    <option value="UZ">🇺🇿 Ouzbékistan (+998)</option>
                    <option value="AZ">🇦🇿 Azerbaïdjan (+994)</option>
                    <option value="GE">🇬🇪 Géorgie (+995)</option>
                    <option value="AM">🇦🇲 Arménie (+374)</option>
                    <option value="BY">🇧🇾 Biélorussie (+375)</option>
                    <option value="MD">🇲🇩 Moldavie (+373)</option>
                    <option value="RS">🇷🇸 Serbie (+381)</option>
                    <option value="ME">🇲🇪 Monténégro (+382)</option>
                    <option value="AL">🇦🇱 Albanie (+355)</option>
                    <option value="MK">🇲🇰 Macédoine du Nord (+389)</option>
                    <option value="BA">🇧🇦 Bosnie-Herzégovine (+387)</option>
                    <option value="XK">🇽🇰 Kosovo (+383)</option>
                    <option value="QA">🇶🇦 Qatar (+974)</option>
                    <option value="KW">🇰🇼 Koweït (+965)</option>
                    <option value="OM">🇴🇲 Oman (+968)</option>
                    <option value="YE">🇾🇪 Yémen (+967)</option>
                    <option value="JO">🇯🇴 Jordanie (+962)</option>
                    <option value="LB">🇱🇧 Liban (+961)</option>
                    <option value="SY">🇸🇾 Syrie (+963)</option>
                    <option value="PS">🇵🇸 Palestine (+970)</option>
                    <option value="MN">🇲🇳 Mongolie (+976)</option>
                    <option value="KG">🇰🇬 Kirghizistan (+996)</option>
                    <option value="TJ">🇹🇯 Tadjikistan (+992)</option>
                    <option value="TM">🇹🇲 Turkménistan (+993)</option>
                    <option value="LA">🇱🇦 Laos (+856)</option>
                    <option value="BT">🇧🇹 Bhoutan (+975)</option>
                    <option value="SG">🇸🇬 Singapour (+65)</option>
                    <option value="TL">🇹🇱 Timor-Leste (+670)</option>
                    <option value="PG">🇵🇬 Papouasie-Nouvelle-Guinée (+675)</option>
                    <option value="FJ">🇫🇯 Fiji (+679)</option>
                    <option value="SB">🇸🇧 Salomon (+677)</option>
                    <option value="VU">🇻🇺 Vanuatu (+678)</option>
                    <option value="NC">🇳🇨 Nouvelle-Calédonie (+687)</option>
                    <option value="PF">🇵🇫 Polynésie française (+689)</option>
                    <option value="WS">🇼🇸 Samoa (+685)</option>
                    <option value="TO">🇹🇴 Tonga (+676)</option>
                    <option value="TV">🇹🇻 Tuvalu (+688)</option>
                    <option value="KI">🇰🇮 Kiribati (+686)</option>
                    <option value="NR">🇳🇷 Nauru (+674)</option>
                    <option value="FM">🇫🇲 Micronésie (+691)</option>
                    <option value="MH">🇲🇭 Marshall (+692)</option>
                    <option value="PW">🇵🇼 Palau (+680)</option>
                    <option value="CK">🇨🇰 Cook (+682)</option>
                    <option value="NU">🇳🇺 Niue (+683)</option>
                    <option value="TK">🇹🇰 Tokelau (+690)</option>
                    <option value="AS">🇦🇸 Samoa américaine (+1-684)</option>
                    <option value="GU">🇬🇺 Guam (+1-671)</option>
                    <option value="MP">🇲🇵 Mariannes du Nord (+1-670)</option>
                    <option value="VI">🇻🇮 Îles Vierges américaines (+1-340)</option>
                    <option value="PR">🇵🇷 Porto Rico (+1-787, +1-939)</option>
                    <option value="JM">🇯🇲 Jamaïque (+1-876)</option>
                    <option value="TT">🇹🇹 Trinité-et-Tobago (+1-868)</option>
                    <option value="BB">🇧🇧 Barbados (+1-246)</option>
                    <option value="BS">🇧🇸 Bahamas (+1-242)</option>
                    <option value="AG">🇦🇬 Antigua-et-Barbuda (+1-268)</option>
                    <option value="LC">🇱🇨 Sainte-Lucie (+1-758)</option>
                    <option value="VC">🇻🇨 Sainte-Vincent-et-les Grenadines (+1-784)</option>
                    <option value="GD">🇬🇩 Grenade (+1-473)</option>
                    <option value="KN">🇰🇳 Saint-Christophe-et-Niévès (+1-869)</option>
                    <option value="DM">🇩🇲 Dominique (+1-767)</option>
                    <option value="AI">🇦🇮 Anguilla (+1-264)</option>
                    <option value="BM">🇧🇲 Bermudes (+1-441)</option>
                    <option value="KY">🇰🇾 Cayman (+1-345)</option>
                    <option value="TC">🇹🇨 Turks-et-Caicos (+1-649)</option>
                    <option value="VG">🇻🇬 Îles Vierges britanniques (+1-284)</option>
                    <option value="MS">🇲🇸 Montserrat (+1-664)</option>
                    <option value="GF">🇬🇫 Guyane française (+594)</option>
                    <option value="SR">🇸🇷 Suriname (+597)</option>
                    <option value="GY">🇬🇾 Guyana (+592)</option>
                    <option value="EC">🇪🇨 Ecuador (+593)</option>
                    <option value="PE">🇵🇪 Pérou (+51)</option>
                    <option value="BO">🇧🇴 Bolivie (+591)</option>
                    <option value="PY">🇵🇾 Paraguay (+595)</option>
                    <option value="UY">🇺🇾 Uruguay (+598)</option>
                    <option value="VE">🇻🇪 Venezuela (+58)</option>
                    <option value="CR">🇨🇷 Costa Rica (+506)</option>
                    <option value="PA">🇵🇦 Panama (+507)</option>
                    <option value="GT">🇬🇹 Guatemala (+502)</option>
                    <option value="SV">🇸🇻 El Salvador (+503)</option>
                    <option value="HN">🇭🇳 Honduras (+504)</option>
                    <option value="NI">🇳🇮 Nicaragua (+505)</option>
                    <option value="CU">🇨🇺 Cuba (+53)</option>
                    <option value="DO">🇩🇴 République dominicaine (+1-809, +1-829, +1-849)</option>
                    <option value="HT">🇭🇹 Haiti (+509)</option>
                    <option value="BZ">🇧🇿 Belize (+501)</option>
                    <option value="JM">🇯🇲 Jamaica (+1-876)</option>
                    <option value="TT">🇹🇹 Trinité-et-Tobago (+1-868)</option>
                    <option value="BS">🇧🇸 Bahamas (+1-242)</option>
                    <option value="BB">🇧🇧 Barbuda (+1-246)</option>
                    <option value="AG">🇦🇬 Antigua-et-Barbuda (+1-268)</option>
                    <option value="LC">🇱🇨 Sainte-Lucie (+1-758)</option>
                    <option value="VC">🇻🇨 Sainte-Vincent-et-les Grenadines (+1-784)</option>
                    <option value="GD">🇬🇩 Grenade (+1-473)</option>
                    <option value="KN">🇰🇳 Saint-Christophe-et-Niévès (+1-869)</option>
                    <option value="DM">🇩🇲 Dominique (+1-767)</option>
                    <option value="AI">🇦🇮 Anguilla (+1-264)</option>
                    <option value="BM">🇧🇲 Bermudes (+1-441)</option>
                    <option value="KY">🇰🇾 Cayman (+1-345)</option>
                    <option value="TC">🇹🇨 Turks-et-Caicos (+1-649)</option>
                    <option value="VG">🇻🇬 Îles Vierges britanniques (+1-284)</option>
                    <option value="MS">🇲🇸 Montserrat (+1-664)</option>
                  </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="sm:col-span-2">
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>

            {/* Préférences de contact */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                Préférences de contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="contactDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Date souhaitée
                  </label>
                  <input
                    id="contactDate"
                    name="contactDate"
                    type="date"
                    value={formData.contactDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contactTime" className="block text-sm font-semibold text-gray-900 mb-2">
                    Heure souhaitée
                  </label>
                  <div className="relative">
                    <select
                      id="contactTime"
                      name="contactTime"
                      value={formData.contactTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Sélectionner une heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="commercial" className="block text-sm font-semibold text-gray-900 mb-2">
                    Commercial souhaité
                  </label>
                  <div className="relative">
                    <select
                      id="commercial"
                      name="commercial"
                      value={formData.commercial}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Choisir un commercial</option>
                      {commerciaux.map(commercial => (
                        <option key={commercial.id} value={commercial.id}>
                          {commercial.name} - {commercial.specialite}
                        </option>
                      ))}
                    </select>
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
              <p className="mt-2 text-sm text-gray-500">
                {formData.message.length}/500 caractères
              </p>
            </div>

            {/* Politique de confidentialité */}
            <div className="flex items-start space-x-3">
              <div className="flex items-center h-6">
                <input
                  id="agreed"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreed(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                  required
                />
              </div>
              <label htmlFor="agreed" className="text-sm text-gray-600">
                En cochant cette case, vous acceptez notre{' '}
                <a href="confidentialite" className="text-indigo-600 hover:text-indigo-500 font-semibold underline">
                  politique de confidentialité
                </a>{' '}
                et nos{' '}
                <a href="conditions" className="text-indigo-600 hover:text-indigo-500 font-semibold underline">
                  conditions d'utilisation
                </a>
                . *
              </label>
            </div>

            {/* Bouton de soumission */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!agreed}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Envoyer ma demande
              </button>
            </div>
          </div>
        </div>

        {/* Informations de contact alternatives */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">contact@adaptiserv.fr</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600">+33 605822126</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">Support@adaptiserv.fr</p>
          </div>
        </div>
      </div>
    </div>
  )
}