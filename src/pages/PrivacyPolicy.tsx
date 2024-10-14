import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations/translations'

const PrivacyPolicy = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="bg-background dark:bg-gray-900 text-primary dark:text-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">{t.privacyPolicy}</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <p className="mb-4">{t.lastUpdated}: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold mb-4">1. {t.introduction}</h2>
          <p className="mb-4">{t.introductionText}</p>
          <h2 className="text-2xl font-bold mb-4">2. {t.dataWeCollect}</h2>
          <p className="mb-4">{t.dataWeCollectText}</p>
          <ul className="list-disc list-inside mb-4">
            <li>{t.identityData}</li>
            <li>{t.contactData}</li>
            <li>{t.technicalData}</li>
            <li>{t.usageData}</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">3. {t.howWeUseYourData}</h2>
          <p className="mb-4">{t.howWeUseYourDataText}</p>
          <ul className="list-disc list-inside mb-4">
            <li>{t.provideServices}</li>
            <li>{t.notifyChanges}</li>
            <li>{t.customerSupport}</li>
            <li>{t.improveServices}</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">4. {t.dataSecurity}</h2>
          <p className="mb-4">{t.dataSecurityText}</p>
          <h2 className="text-2xl font-bold mb-4">5. {t.yourLegalRights}</h2>
          <p className="mb-4">{t.yourLegalRightsText}</p>
          <h2 className="text-2xl font-bold mb-4">6. {t.contactUs}</h2>
          <p>{t.contactUsText}</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy