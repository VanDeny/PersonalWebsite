'use client'


import HomePage from "@/app/components/homePage";
import ListExperience from "@/app/components/experience/list-experience";
import Footer from "@/app/components/footer";
import SocialsList from "@/app/components/socials/socials-list";
import SkillList from "@/app/components/skills/skill-list";

export default function Home() {
  return (
    <main>
        <div className="snap-y w-screen h-screen snap-mandatory overflow-scroll">
            <HomePage/>
            <ListExperience/>
            <SkillList/>
            <SocialsList/>
            <Footer/>
        </div>
    </main>
  )
}
