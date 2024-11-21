import type { PropsWithChildren } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className=" text-slate-400 flex flex-col items-center gap-4 border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      
      <p className="text-center text-sm md:text-base">Contact</p>
      <div className="flex gap-6">
        <a
          href="https://github.com/CSotoDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
<FaGithub size={24} />
</a>
        <a
          href="https://www.linkedin.com/in/carlos-soto-gamez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
<FaLinkedin size={24} />
</a>
        <a
          href="https://csotoportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >

<FaGlobe size={24} />

        </a>
      </div>
      <p className="text-xs text-slate-500 text-center">
        CSotoDeveloper - 2024
      </p>
    </footer>
      {/* <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made with 💗 by RoadsideCoder</p>
        </div>
      </footer> */}
    </div>
  );
}