"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "highlight" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="PawPup Coin Logo"
        buttonText="Buy PawPup"
        onButtonClick={() => console.log('Buy clicked')}
        className="bg-white"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-[#FFD1D1] to-[#E6FFEE]">
        <BillboardHero
          title="Welcome to PawPup Coin"
          subtitle="Join the playful community of dog lovers and memecoin enthusiasts!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="PawPup Coin is where the dog community meets memecoin fun!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy PawPup Coin"
          steps={[
            { title: "Step 1", description: "Create a wallet", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase tokens", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="PawPup Tokenomics"
          description="A fair and transparent distribution to ensure stability and growth."
          tokenData={[
            { value: "1 Billion", description: "Total Supply" },
            { value: "50%", description: "Community Fund" },
            { value: "25%", description: "Development" },
            { value: "15%", description: "Marketing" },
            { value: "10%", description: "Reserve Fund" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <ImageFAQ
          items={[
            { title: "What is PawPup Coin?", content: "A new dog-themed memecoin created for fun and community spirit." },
            { title: "How do I buy?", content: "You can buy PawPup through various cryptocurrency exchanges and wallets." },
            { title: "Is it secure?", content: "Yes, PawPup uses advanced blockchain technology to ensure security." },
            { title: "What is the community like?", content: "Our community is friendly, supportive, and focused on pet lovers!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="PawPup Coin Logo"
          logoText="PawPup Coin"
          items={[
            { label: "Privacy Policy", onClick: () => console.log("Privacy clicked") },
            { label: "Terms of Service", onClick: () => console.log("Terms clicked") },
            { label: "Contact Us", onClick: () => console.log("Contact clicked") }
          ]}
          className="text-white"
        />
      </div>
    </SiteThemeProvider>
  );
}