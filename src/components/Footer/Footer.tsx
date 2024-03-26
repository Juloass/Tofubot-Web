'use client'

import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import "./Footer.css";

export default function Footer() {

  return (
    <footer className="footer">
      <Link href="/" passHref>
          <Image src={logo} alt="Logo Tofuxia" className="header-logo" />
      </Link>
      <p>© 2024 Tofuxia. Tous droits réservés.</p>
      <a href="https://discord.gg/sVBCbnzkp3" className="discord-link">Rejoins-nous sur Discord</a>
    </footer>
  );
}
