'use client'

import Skill from "@/app/components/skills/skill";

export default function SkillList() {
    return (
        <div id={'skill'} className={'w-full h-screen snap-center'}>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    );
}