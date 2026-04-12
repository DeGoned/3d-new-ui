import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-6">
      <div className="max-w-[1620px] mx-auto px-8 lg:px-12 xl:px-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.svg" alt="ProtoTi" className="h-10 mb-4" />
          <p className="text-sm text-slate-500">Shenzhen ProtoTi Technology Co., LTD</p>
          <p className="text-sm text-slate-400 mt-1">User Name: kriseoooooo@gmail.com</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-4">Contact</h4>
          <p className="text-sm text-slate-500 flex items-center gap-2 mb-2">
            <Phone size={14} /> Phone: +86 18126397112
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <Mail size={14} /> Email: hello@prototi.com
          </p>
        </div>
        <div>
          <div className="md:max-w-[332px] md:ml-auto">
            <h4 className="font-bold text-slate-800 mb-4">Office</h4>
            <p className="text-sm text-slate-500 flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Address: 8th Floor, Biaofan Technology Building, Tower C, No.6 Gongye Road, Baoan, Shenzhen, China, 518104
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" alt="Mastercard" className="h-6 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-5 object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1620px] mx-auto px-8 lg:px-12 xl:px-14 mt-6 pt-6 border-t border-slate-100">
        <p className="text-sm text-slate-400 text-center">&copy; 2018-2025 ProtoTi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
