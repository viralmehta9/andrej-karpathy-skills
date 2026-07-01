'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Map, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  MessageSquareText, 
  CalendarCheck,
  Search,
  Target,
  ArrowRight
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GeoGridWidget from './GeoGridWidget';
import SuspensionRiskWidget from './SuspensionRiskWidget';
import AuditShowcaseWidget from './AuditShowcaseWidget';
import './FeaturesGrid.css';

const features = [
  {
    title: "High-Precision Geo-Grid Tracking",
    desc: "Monitor your exact street-level positions across your entire service area with hyper-local map grids.",
    icon: <BarChart3 size={24} />,
    color: "#2563EB"
  },
  {
    title: "AI Search Visibility Index",
    desc: "Track total market share, AI overview inclusion, and local pack dominance with our proprietary 0–100 score.",
    icon: <Map size={24} />,
    color: "#10B981"
  },
  {
    title: "Automated Presence Audits",
    desc: "Instant 100+ point profile inspection delivering a prioritized, step-by-step roadmap to outrank rivals.",
    icon: <ShieldCheck size={24} />,
    color: "#FF5733"
  },
  {
    title: "Competitor Benchmarking",
    desc: "Uncover rivals' primary categories, review velocities, and keyword strategies to leapfrog local market leaders.",
    icon: <Target size={24} />,
    color: "#EF4444"
  },
  {
    title: "Local Technical SEO Audit",
    desc: "Audit website NAP consistency, schema markups, and local landing page signals that fuel Google Maps rank.",
    icon: <Globe size={24} />,
    color: "#2563EB"
  },
  {
    title: "AI Review Assistant & Auto-Reply",
    desc: "Automatically craft personalized, SEO-rich review responses to boost customer trust and review signals.",
    icon: <MessageSquareText size={24} />,
    color: "#2563EB"
  },
  {
    title: "Category & Keyword Intelligence",
    desc: "Identify high-converting secondary categories and localized search queries missing from your profile.",
    icon: <Search size={24} />,
    color: "#EC4899"
  },
  {
    title: "Google Posts & Content Publisher",
    desc: "Schedule engaging updates, offers, and photos directly to Google to keep your profile active 24/7.",
    icon: <CalendarCheck size={24} />,
    color: "#14B8A6"
  }
];

const FeaturesGrid = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-subtitle">Core Platform Services</span>
          <h2 className="section-title">Enterprise-Grade Local SEO &amp; Profile Services</h2>
          <p className="section-desc">
            Everything your business or agency needs to outrank local competitors, capture high-intent search traffic, 
            and automate Google Business Profile management.
          </p>
        </div>

        <div className="features-grid reveal" ref={gridRef}>
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box" style={{ '--icon-bg': `${feature.color}15`, '--icon-stroke': feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.desc}</p>
              <Link href="/get-started" className="feature-learn-more">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Visual Showcase - Ranking */}
        <div className="feature-showcase mt-16">
          <div className="showcase-content">
            <h3 className="showcase-title">Hyper-Local Street-Level Geo-Grid Tracking</h3>
            <p className="showcase-text">
              Rankings vary block by block. See exactly where your business ranks across your entire city 
              with interactive, high-precision geo-grid visibility heatmaps.
            </p>
            <ul className="showcase-list">
              <li><ShieldCheck size={18} className="check-icon" /> Precise neighborhood &amp; street-level grid tracking</li>
              <li><ShieldCheck size={18} className="check-icon" /> Automated keyword position distribution matrix</li>
              <li><ShieldCheck size={18} className="check-icon" /> AI-driven proximity and ranking factor insights</li>
            </ul>
          </div>
          <div className="showcase-visualWide">
            <GeoGridWidget />
          </div>
        </div>

        {/* Visual Showcase - Audit - IMPROVED SECTION */}
        <div className="feature-showcase showcase--reverse mt-16">
          <div className="showcase-content">
            <h3 className="showcase-title">Actionable Presence Score Audits</h3>
            <p className="showcase-text">
              Turn complex local search metrics into a clear, prioritized action list. Our Presence Audits evaluate 
              over 100 local signals so you know exactly what tasks move the needle.
            </p>
            <ul className="showcase-list">
              <li><ShieldCheck size={18} className="check-icon" /> Comprehensive 100+ point profile integrity diagnostic</li>
              <li><ShieldCheck size={18} className="check-icon" /> Step-by-step priority action roadmap</li>
              <li><ShieldCheck size={18} className="check-icon" /> Automated weekly visibility health monitoring</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <AuditShowcaseWidget />
          </div>
        </div>

        {/* Visual Showcase - Suspension Risk - NEW SECTION */}
        <div className="feature-showcase mt-16">
          <div className="showcase-content">
            <h3 className="showcase-title">Proactive Profile Integrity &amp; Suspension Risk Safeguards</h3>
            <p className="showcase-text">
              Protect your business from costly Google Business Profile suspensions and shadowbans. We continuously 
              monitor 11 critical risk factors to keep your listing active and compliant.
            </p>
            <ul className="showcase-list">
              <li><ShieldCheck size={18} className="check-icon" /> Continuous profile integrity and compliance auditing</li>
              <li><ShieldCheck size={18} className="check-icon" /> Instant alerts for high-risk edits and spam triggers</li>
              <li><ShieldCheck size={18} className="check-icon" /> Google Business Profile policy alignment checks</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <SuspensionRiskWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
