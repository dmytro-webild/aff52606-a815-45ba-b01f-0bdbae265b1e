"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import React, { useState } from 'react';

export default function InquiryPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', product: 'solana-infra' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mqazkweo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Form submission error:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "/" },
              { name: "Inquiry", id: "/inquiry" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Project Carbon Fiber"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4">
          <h1 className="text-4xl font-bold mb-8">Submit an Inquiry</h1>
          {status === 'success' ? (
              <div className="text-center p-8 bg-green-500/10 border border-green-500 rounded">Thank you for your inquiry. We will be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <div className="flex flex-col gap-2">
                <label className="font-medium">Product Interested In</label>
                <select 
                  className="w-full p-3 border rounded bg-black text-white"
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                >
                  <option value="solana-infra">Access to Custom Solana Infrastructure</option>
                  <option value="trading-bots">Access to Custom Trading Bots</option>
                  <option value="market-data">Access to Custom Market Data</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'} 
                className="w-full bg-blue-600 text-white p-3 rounded font-bold disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit'}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
        <div id="footer" data-section="footer">
          <FooterSimple 
             columns={[{ title: "", items: [{ label: "Home", href: "/" }]}]}
             bottomLeftText=""
             bottomRightText=""
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}