
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translate } from '@/translations';

const ContactInfo = () => {
  const { language, direction } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className={`text-xl font-bold mb-4 font-serif ${direction === 'rtl' ? 'text-right' : ''}`}>
        {translate('contactInformation', language)}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-3 rounded-full mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div className={direction === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold">{translate('phone', language)}</h4>
            <p className="text-gray-600">073-702-1736</p>
            <p className="text-sm text-gray-500">
              {translate('mondayThursday', language)}: 09:00-17, {translate('friday', language)}: 09-14:00
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-3 rounded-full mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div className={direction === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold">{translate('email', language)}</h4>
            <p className="text-gray-600">victoria.neiman@gmail.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-3 rounded-full mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div className={direction === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold">{translate('address', language)}</h4>
            <p className="text-gray-600">
              4 Mota Gur<br />
              Petah Tikva<br />
              Israel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
