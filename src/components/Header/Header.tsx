import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#140C22] flex items-center justify-between p-5">
      <Link href="/" passHref>
          <Image src="/assets/logo.png" alt="Logo Tofuxia" width={60} height={60} className="rounded-full cursor-pointer" />
      </Link>
      <h1 className="text-white text-2xl">TOFUXIA</h1>
      <a href="https://discord.gg/sVBCbnzkp3" className="bg-[#5865F2] text-white py-2 px-4 rounded-lg no-underline">Rejoins-nous sur Discord</a>
    </header>
  );
}
