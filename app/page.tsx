import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Products />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
