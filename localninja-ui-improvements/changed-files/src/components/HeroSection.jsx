'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Star, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProductMockup from './ProductMockup';

const HeroSection = () => {
  const visualRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tag">Google Business Profile &amp; AI Visibility Platform</div>
          <h1>Dominate Local Search. <span className="text-gradient">Outrank Competitors</span> on Google Maps.</h1>
          <p>
            Automate your local search marketing with LocalNinja’s enterprise-grade platform. Harness 
            high-precision street-level tracking, AI-assisted profile optimization, instant presence audits, 
            and proactive suspension safeguards to outshine local competitors.
          </p>
          <div className="hero-buttons">
            <Link href="/get-started" className="btn btn-primary btn-large" style={{ color: 'white' }}>
              Get Started <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
            </Link>
            <a href="#services" className="btn btn-secondary btn-large">
              Explore Core Services
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust__rating">
              <span className="hero-trust__stars" aria-hidden="true">
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
              </span>
              <span className="hero-trust__rating-text">
                <strong>4.9/5</strong> from local business owners
              </span>
            </div>
            <ul className="hero-trust__points">
              <li><Check size={15} strokeWidth={3} /> Free 60-second audit</li>
              <li><Check size={15} strokeWidth={3} /> No credit card required</li>
            </ul>
          </div>
        </div>

        <div className="hero-visual reveal" ref={visualRef}>
          <div className="hero-mockup-frame">
            {/* Decorative floating badges — anchored to the mockup corners */}
            <div className="floating-badge badge-1 floating-element">
              <div className="badge-dot green"></div>
              <span>Profile: 90 A</span>
            </div>
            <div className="floating-badge badge-2 floating-element" style={{ animationDelay: '1.3s' }}>
              <TrendingUp size={14} style={{ color: '#FF5733' }} />
              <span style={{ color: '#FF5733' }}>+12% Visibility</span>
            </div>
            <div className="floating-badge badge-3 floating-element" style={{ animationDelay: '2.4s' }}>
              <Star size={14} style={{ color: '#2563EB' }} />
              <span style={{ color: '#2563EB' }}>4.9 Avg Rating</span>
            </div>

            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
