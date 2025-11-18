import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaFacebookF, FaSpotify, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://www.instagram.com/balloonandben/"><FaInstagram /></a>
        <a href="https://www.youtube.com/@BalloonAndBen"><FaYoutube /></a>
        <a href="https://www.facebook.com/BalloonAndBen"><FaFacebookF /></a>
        <a href="https://open.spotify.com/intl-es/artist/70LxuyrSqLkYRVuvT8fhyn"><FaSpotify /></a>
        <a href="https://www.tiktok.com/@balloonandben"><FaTiktok /></a>
      </div>

      <div className="footer-links">
        <a href="/contacto">Contacto</a>
        <a href="/politica-de-privacidad">Política de privacidad</a>
        <a href="/cookies">Cookies</a>
        <a href="/condiciones-de-uso">Condiciones de uso</a>
      </div>

      <p className="footer-copy">Balloon & Ben Copyright 2025</p>
    </footer>
  );
};

export default Footer;

