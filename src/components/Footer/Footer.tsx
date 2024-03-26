import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#140C22] text-white text-center p-5 flex flex-col items-center justify-center">
      <Link href="/" passHref>
          <Image src="/assets/logo.png" alt="Logo Tofuxia" width={50} height={50} className="rounded-full cursor-pointer" />
      </Link>
      <p className="text-lg my-2">© 2024 Tofuxia. Tous droits réservés.</p>
      <a href="https://discord.gg/sVBCbnzkp3" className="mt-2">Rejoins-nous sur Discord</a>
    </footer>
  );
}
