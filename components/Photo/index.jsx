"use client";
import React, { useEffect } from 'react';
import { gsap, Power2, Power3, Circ, Expo, TimelineMax } from 'gsap';
import './style.css';
import { Input } from "@/components/ui/input";
import Autocomplete from "@/components/ui/autocomplete";

const PhotographerPortfolio = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      const tl = new TimelineMax({ paused: true });

      // Set initial properties for animations
      gsap.set('.nav, .text h1, .text p, .info, .name, .right, .contact-form, .bottomnav', { opacity: 0 });
      gsap.set('.contact-form', { scale: 0.5, y: 50 }); // Initial scale and position for the form

      tl.to('.photo-wrapper .left', 2, {
        delay: 0.8,
        width: '50%',
        ease: Power2.easeInOut,
      })
        .to('.photo-wrapper .right', 2, {
          delay: 0.6,
          width: '50%',
          ease: Power3.easeInOut,
          opacity: 1,
        }, '-=2')
        .to('.nav', 2, {
          opacity: 1,
          ease: Expo.easeInOut,
        }, '-=1.5')
        .to('.photo-wrapper .text h1', 2, {
          opacity: 1,
          ease: Circ.easeInOut,
        }, '-=1.5')
        .to('.photo-wrapper .text p', 2, {
          opacity: 1,
          ease: Circ.easeInOut,
        }, '-=1.2')
        .staggerTo(
          '.photo-wrapper .bottomnav ul li',
          2,
          {
            opacity: 1,
            ease: Circ.easeInOut,
          },
          0.08,
          '-=2' // Matching delay to `.text p`
        )
        .to('.photo-wrapper .bottomnav', 2, {
          opacity: 1,
          ease: Circ.easeInOut,
        }, '-=2') // Matching delay to `.text p`
        .to('.photo-wrapper .info', 2, {
          opacity: 1,
          ease: Circ.easeInOut,
        }, '-=2') // Matching delay to `.text p`
        .to('.photo-wrapper .name', 2, {
          opacity: 1,
          ease: Circ.easeInOut,
        }, '-=2') // Matching delay to `.text p`
        // Animation for the contact-form
        .to('.contact-form', 2, {
          scale: 1, // Scale up to full size
          opacity: 1, // Fade in
          y: 0, // Slide up into place
          ease: Expo.easeOut, // Smooth, natural ease
        }, '-=2'); // Start slightly earlier than previous animations

      tl.play();
    }
  }, []);

  return (
    <div className="photo-wrapper">
      <div className="left">
        <form className="contact-form">
          <h2>Contact Us</h2>
          <div className="input-group">
            <div className="input-row">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <div className="input-row">
              <Input type="text" placeholder="Phone" />
              <Input type="text" placeholder="City" />
            </div>
            <div className="input-full">
              <Input type="text" placeholder="Message" />
            </div>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="right"></div>

      <nav className="nav">
        <ul>
          <li className="logo">VJCOverseas</li>
          <li className="menu">
            <i className="fa fa-bars"></i>
          </li>
          <li className="collection">consultancy</li>
          <li className="explore">explore</li>
          <li className="search">visa</li>
          <li className="work">work-abroad</li>
          <li className="immi">Immigration</li>
        </ul>
      </nav>

      <div className="content">
        <div className="info">
          <ul>
            <li>vjcbangalore@gmail.com</li>
            <li>info@vjcoverseas.com</li>
            <li>
              <i className="fa fa-share-alt"></i>
            </li>
          </ul>
        </div>

        <div className="text">
          <h1>VJC Overseas</h1>
          <p>Visa & Immigration consultancy</p>
        </div>

        <div className="name">Overseas</div>

        <div className="bottomnav">
          <ul>
            <li>about us</li>
            <li>consult</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotographerPortfolio;
