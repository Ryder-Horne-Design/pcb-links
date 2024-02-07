import Logo from "@/logo.png";
import Image from "next/image";
import LinkButton from "~/components/link-button";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col flex-wrap justify-center items-center">
      <header className="flex flex-col flex-wrap justify-center items-center text-center space-y-4 mb-8">
        <Image src={Logo} width={384} height={384} quality={100} priority loading="eager" placeholder="blur" alt="Petite Curio Boutique logo" sizes="144px" className="rounded-full border-2 border-white w-36" />
        <h1 className="text-5xl">Petite Curio Boutique</h1>
      </header>
      <nav className="flex flex-col flex-wrap justify-center items-center text-center space-y-2 w-full">
        <LinkButton className="w-4/5" href="https://www.petitecurioboutique.com">Website</LinkButton>
        <LinkButton className="w-4/5" href="https://www.instagram.com/petitecurioboutique">Instagram</LinkButton>
        <LinkButton className="w-4/5" href="https://www.facebook.com/PetiteCurioBoutique">Facebook</LinkButton>
        <LinkButton className="w-4/5" href="https://www.twitter.com/CurioPetite">Twitter</LinkButton>
        <LinkButton className="w-4/5" href="https://www.pinterest.com/PetiteCurioBoutique">Pinterest</LinkButton>
      </nav>
    </main>
  );
};