"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';

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
        { name: "Technology", id: "/technology" },
        { name: "Inquiry", id: "/inquiry" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Project Carbon Fiber"
    />
  </div>

  <div id="tech-details" data-section="tech-details">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our Infrastructure"
      description="We run on world-class cloud architecture. Our stacks are built on AWS EC2, utilizing VPC Peering and S3 buckets for secure, durable logging. Security is not just a feature—it is our foundation."
      bulletPoints={[
        { title: "AWS Powered", description: "Global availability using EC2 instances." },
        { title: "VPC Secured", description: "Isolated networks for maximum security." },
        { title: "Durable Storage", description: "S3 object storage for historical log processing." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-business-people-standing-server-room-with-laptop-discussing_662251-1526.jpg?w=600&h=400"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Network Capacity"
      description="Visualizing the throughput of our decentralized nodes."
      metrics={[
        { id: "m1", value: "1.2M", description: "TPS Supported" },
        { id: "m2", value: "50ms", description: "Finality Time" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Company", items: [{ label: "Inquiry", href: "/inquiry" }, { label: "Contact", href: "/contact" }, { label: "Tech", href: "/technology" }] },
        { title: "Social", items: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/project-carbon-fiber" }] },
      ]}
      bottomLeftText=""
      bottomRightText=""
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}