"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
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
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "/" },
        { name: "Inquiry", id: "/inquiry" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Project Carbon Fiber"
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Project Carbon Fiber"
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
        { id: "m1", name: "Noah Braun", role: "Co-Founder", description: "Lead Systems Architect ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1776192347167-tp82gh00.jpg?w=1200&h=1200" },
        { id: "m2", name: "Patrick DeBiase", role: "Co-Founder ", description: "Lead Front End Developer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CJnQJYMSiA6jhejhdDXPX2Rx55/uploaded-1776192914378-1mhmooxi.jpg?w=1200&h=1200" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "", items: [{ label: "Inquiry", href: "/inquiry" }, { label: "Contact", href: "/contact" }] },
        { title: "", items: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/project-carbon-fiber" }] },
      ]}
      bottomLeftText=""
      bottomRightText=""
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}