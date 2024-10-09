import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-primary min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            VELUXCODE ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights and how the law protects you.
          </p>
          <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Identity Data</li>
            <li>Contact Data</li>
            <li>Technical Data</li>
            <li>Usage Data</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
          <h2 className="text-2xl font-bold mb-4">5. Your Legal Rights</h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
          </p>
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@veluxcode.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy