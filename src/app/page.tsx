"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain"}}
      title="Engineering the Future of Decentralized Liquidity"
      description="Private, high-throughput execution engines built for modern decentralized finance ecosystems."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blue-light-lines-dots-from-fiber-optic-wires-dark-background-computer-communications-idea-selective-focus-blur-dark-background_166373-1651.jpg",          alt: "Team member 1"},
        {
          src: "http://img.b2bpic.net/free-photo/blue-lights-long-exposure-technique_53876-144333.jpg",          alt: "Team member 2"},
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-futuristic-sci-fi-techno-lights-background_181624-21133.jpg",          alt: "Team member 3"},
        {
          src: "http://img.b2bpic.net/free-photo/traffic-light-trails-urban-street_1359-520.jpg",          alt: "Team member 4"},
        {
          src: "http://img.b2bpic.net/free-photo/3d-medical-background-wth-male-figure-running_1048-14657.jpg",          alt: "Team member 5"},
      ]}
      buttons={[
        {
          text: "Request Access",          href: "/inquiry"},
      ]}
      avatarText=""
      marqueeItems={[
        {
          type: "text",          text: "Low Latency"},
        {
          type: "text",          text: "Rust-powered"},
        {
          type: "text",          text: "DeFi Optimized"},
        {
          type: "text",          text: "Secure Execution"},
        {
          type: "text",          text: "Global Scale"},
      ]}
      avatarGroupClassName="scale-75"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split-actions"
      useInvertedBackground={false}
      features={[
        {
          title: "Low-Latency Execution",          description: "Utilizing Rust-based engines for sub-millisecond transaction speeds.",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-light-trails-blue-tone_1359-645.jpg",          imageAlt: "Latency"},
        {
          title: "Real-time Data Analytics",          description: "Processing high-throughput blockchain telemetry.",          imageSrc: "http://img.b2bpic.net/free-photo/finger-pressing-digital-graphic_1134-293.jpg",          imageAlt: "Analytics"},
        {
          title: "Scalable Infrastructure",          description: "Leveraging AWS Graviton architecture for efficient compute.",          imageSrc: "http://img.b2bpic.net/free-photo/programmer-walking-data-center-coding-laptop_482257-124794.jpg",          imageAlt: "Infrastructure"},
      ]}
      title="Core Infrastructure"
      description="Engineered for speed, reliability, and scale."
      imageClassName="scale-75"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Unmatched Performance"
      description="Our systems process trillions of data points with near-zero overhead."
      imageSrc="http://img.b2bpic.net/free-photo/server-infrastructure-systems-delivering-ai-automation-cloud-storage_482257-124360.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      metrics={[
        {
          value: "0.4ms",          title: "Execution Latency"},
        {
          value: "99.99%",          title: "Uptime Guarantee"},
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
              label: "LinkedIn",              href: "https://www.linkedin.com/company/project-carbon-fiber"},
          ],
        },
      ]}
      bottomLeftText="Copyright 2026 Project Carbon Fiber"
      bottomRightText="info@projectcarbonfiber.com"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}