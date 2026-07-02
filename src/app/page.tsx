import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Story } from "@/components/sections/story";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Watching } from "@/components/sections/watching";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Story />
      <Projects />
      <Experience />
      <Skills />
      <Watching />
      <Contact />
      <SiteFooter />
    </>
  );
}
