"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import React, { useState } from 'react';

export default function InquiryPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', product: 'solana-infra' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "Inquiry", id: "/inquiry" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Project Carbon Fiber"
          />
        </div>
        <div className="container mx-auto py-20 px-4 min-h-[60vh]">
          <h1 className="text-4xl font-bold mb-8">Submit an Inquiry</h1>
          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            <div className="flex flex-col gap-2">
              <label className="font-medium">Product Interested In</label>
              <select 
                className="w-full p-3 border rounded bg-black text-white"
                onChange={(e) => setFormData({...formData, product: e.target.value})}
              >
                <option value="solana-infra">Access to custom Solana Infrastructure</option>
                <option value="trading-bots">Access to custom Trading Bots</option>
                <option value="market-data">Access to Custom Market Data</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-bold">Submit</button>
          </form>
        </div>
        <div id="footer" data-section="footer">
          <FooterSimple 
             columns={[{ title: "Links", items: [{ label: "Home", href: "/" }]}]} 
             bottomLeftText="Copyright 2026 Project Carbon Fiber" 
             bottomRightText="All rights reserved"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}