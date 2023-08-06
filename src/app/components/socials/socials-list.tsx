'use client'

import Socials from "@/app/components/socials/socials";

export default function SocialsList() {
    return (
        <div id={'social'} className={'w-full h-screen snap-center'}>
            <Socials/>
            <Socials/>
            <Socials/>
        </div>
    )
}