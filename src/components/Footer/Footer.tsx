'use client'

import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";

export default function Footer() {

  return (
    <footer className="bg-slate-950 text-white text-center p-5 flex flex-col items-center justify-center">
      <Link href="/" passHref>
        <Image src={logo} alt="Logo Tofuxia" className="cursor-pointer w-16 rounded-full" />
      </Link>
      <p className="text-base my-2">© 2024 Tofuxia. Tous droits réservés.</p>
      <a href="https://discord.gg/sVBCbnzkp3" className="mt-2">Rejoins-nous sur Discord</a>
    </footer>
  );
}
