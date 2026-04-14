"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';

export default function LandingPage() {
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
        {
          name: "Home",          id: "/"},
        {
          name: "Inquiry",          id: "/inquiry"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Project Carbon Fiber"
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Project Carbon Fiber (North Carolina). Contact us at contact@yourdomain.com."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Meet the Team"
      description="Experts in distributed systems and DeFi primitives."
      members={[
        {
          id: "m1",          name: "Sarah Chen",          role: "Lead Architect",          description: "Ex-AWS infrastructure lead.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-suit-cope-arrangement-happiness_1134-978.jpg"},
        {
          id: "m2",          name: "Marcus Thorne",          role: "DevOps Engineer",          description: "Blockchain scaling specialist.",          imageSrc: "http://img.b2bpic.net/free-photo/it-staff-member-server-hub-establishing-performance-benchmarks_482257-124780.jpg"},
      ]}
      imageClassName="scale-75"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "",          items: [
            {
              label: "Inquiry",              href: "/inquiry"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "",          items: [
            {
              label: "LinkedIn",              href: "https://linkedin.com"},
          ],
        },
      ]}
      bottomLeftText="Copyright 2026 Project Carbon Fiber"
      bottomRightText="contact@yourdomain.com"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
