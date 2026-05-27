import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Projects from '@/components/projects';
import AboutMini from '@/components/aboutmini';
import Contact from "@/components/contact";
import LoaderWrapper from "@/components/loader-wrapper";


export default function Home() {
  return (
    <LoaderWrapper>
      <Hero />
      <Stats />
      <Projects />
      <AboutMini />
      <Contact />
    </LoaderWrapper>
  );
}
