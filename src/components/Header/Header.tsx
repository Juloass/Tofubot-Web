'use client'

import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {

  return (
    <header className="header">
      <Link href="/" passHref>
          <Image src={logo} alt="Logo Tofuxia" className="header-logo" />
      </Link>
      <h1 className="header-title">TOFUXIA</h1>
      <a href="https://discord.gg/sVBCbnzkp3" className="discord-link">Rejoins-nous sur Discord</a>
    </header>
  );
}
