/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  MoreVertical, Smartphone, Globe, MapPin, Heart, 
  Handshake, Baby, Languages, Phone, Mail, UserPlus, 
  Building2, Share2, MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-28">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-5 py-3 h-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                alt="Paul McKennon" 
                className="w-10 h-10 rounded-full object-cover border-2 border-red-600"
                src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-1/301912814_444456501077208_1265034097862772927_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=JYg_fJMWu0YQ7kNvwFmdYXF&_nc_oc=Adp25PAFp0ZHWmnv2fhCK-Q4G4s7I0uioJaDxVE-UFSyUvXheU3J0bSvYl7XGqrzDcU&_nc_zt=24&_nc_ht=scontent-yyz1-1.xx&_nc_gid=IVLbaESKf_oEye1IGHay7w&_nc_ss=7a3a8&oh=00_Af2J1h99PPe2saQ6ZTQTBBToT1YAPMRk9hG_KjEnjBnJMA&oe=69EDFD19"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <h1 className="text-sm font-bold tracking-tight uppercase text-red-600">RE/MAX Realtron Realty Inc.</h1>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      <main className="pt-20 px-5 max-w-2xl mx-auto space-y-6">
        {/* Hero Card */}
        <section className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="h-32 bg-blue-700 relative">
            <img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2lahuxUDiUMaDH_U_ufKCkpKGB7Ne9010fDHaHkGGNaIVi2JSbO_iktFdoRzrqrMNCWFtQ4C7x7RKi3848APscEFQ3pfspQz5p_N31yaOo0Zz0cjOa-NP3K1EIGeeSR8JnXMTHu9D8_Q-U3pAHIa2BhIgJkY-ziw2Xrxt11_HUeeqXELAUKxaSxBhRUTMcs-mroO1peS8leOzIw7hl7Ox49e21NQtPJQfZjCNZE1p24oWTBGAENee42D--pnULkzwrAGuPcvRoo" />
          </div>
          <div className="px-6 pb-8 -mt-12 relative text-center">
            <div className="inline-block p-1 bg-white rounded-full mb-4 shadow-lg">
              <img className="w-24 h-24 rounded-full object-cover" src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-1/301912814_444456501077208_1265034097862772927_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=JYg_fJMWu0YQ7kNvwFmdYXF&_nc_oc=Adp25PAFp0ZHWmnv2fhCK-Q4G4s7I0uioJaDxVE-UFSyUvXheU3J0bSvYl7XGqrzDcU&_nc_zt=24&_nc_ht=scontent-yyz1-1.xx&_nc_gid=IVLbaESKf_oEye1IGHay7w&_nc_ss=7a3a8&oh=00_Af2J1h99PPe2saQ6ZTQTBBToT1YAPMRk9hG_KjEnjBnJMA&oe=69EDFD19" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tighter">Paul McKennon</h2>
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-6">Sales Representative</p>
            <div className="flex gap-3 justify-center mb-4">
              <button className="flex-1 bg-red-600 text-white font-bold text-sm py-4 rounded-lg shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg active:scale-95">CONTACT ME</button>
              <button className="px-4 border border-gray-300 rounded-lg text-blue-700 flex items-center justify-center transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95">
                <Share2 size={20} />
              </button>
            </div>
            <button className="w-full flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 font-bold text-sm py-4 rounded-lg transition-all duration-200 hover:bg-red-50 hover:border-red-700 active:scale-95">
              <UserPlus size={20} /> SAVE CONTACT
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 text-center transition-all duration-200 hover:border-blue-300 hover:shadow-md cursor-pointer">
            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Experience</span>
            <span className="text-xl font-extrabold text-blue-700">38 Years</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 text-center transition-all duration-200 hover:border-red-300 hover:shadow-md cursor-pointer">
            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Specialty</span>
            <span className="text-xl font-extrabold text-red-600">Rentals</span>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-xl border border-gray-200">
          {[
            { icon: Smartphone, label: 'MOBILE / DIRECT', value: '(416) 567-7253', href: 'tel:4165677253' },
            { icon: MessageSquare, label: 'WHATSAPP', value: 'Chat on WhatsApp', href: 'https://wa.me/14165677253' },
            { icon: Globe, label: 'WEBSITE', value: 'www.realtronhomes.com', href: 'https://www.realtronhomes.com/' },
            { icon: MapPin, label: 'OFFICE', value: '885 Progress Ave, Ste 209, Toronto, ON M1H 3G3' }
          ].map((item, i) => (
            <div key={i} className="p-5 flex items-center gap-4 border-b last:border-b-0 border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                <item.icon size={20} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-blue-700 uppercase tracking-widest">{item.label}</span>
                {item.href ? <a href={item.href} className="font-bold text-gray-900">{item.value}</a> : <p className="font-bold text-gray-900">{item.value}</p>}
              </div>
            </div>
          ))}
        </section>

        {/* Hobbies / Activities / Languages */}
        <div className="space-y-4">
          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Heart size={16} /> HOBBIES & LIFESTYLE
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Chess & Games', 'Baseball', 'Bridge & Cards'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-200 rounded-full text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Handshake size={16} /> CIVIC ACTIVITIES
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                <Baby size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Children's Miracle Network</p>
                <p className="text-sm text-gray-500">Active Contributor & Supporter</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200 flex justify-between items-center text-sm font-bold text-gray-900">
            <span className="flex items-center gap-2 text-blue-700 uppercase tracking-widest">
              <Languages size={16} /> LANGUAGES
            </span>
            <span>English</span>
          </section>

          {/* Lead Capture */}
          <section className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Looking for a rental?</h3>
            <p className="text-sm text-gray-500 text-center mb-6">Send Paul a quick message and he'll get back to you shortly.</p>
            <form className="space-y-4">
              <input type="text" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
              <textarea className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="How can I help you today?" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
              <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 hover:bg-blue-800 hover:shadow-md active:scale-95">Send Message</button>
            </form>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pt-6 pb-20">
        <div className="flex justify-center items-center gap-4 opacity-60">
          <Building2 size={32} className="text-red-600" />
          <div className="text-left leading-none">
            <span className="block font-black text-xl text-red-600">RE/MAX</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Realtron Realty Inc.</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-4">Independently Owned and Operated. © 2024 Paul McKennon. All rights reserved.</p>
      </footer>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-white border-t border-gray-200 z-50">
        {[
          { icon: Phone, label: 'Call', href: 'tel:4165677253' },
          { icon: Mail, label: 'Email', href: 'mailto:paul@paul567sale.com' },
          { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/14165677253' },
          { icon: Globe, label: 'Website', href: 'https://www.realtronhomes.com/' }
        ].map((item, i) => (
          <a key={i} href={item.href} className={`flex flex-col items-center text-gray-500 ${item.color || ''}`}>
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
