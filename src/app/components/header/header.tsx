'use client'

import Links from "@/app/components/header/links/links";

export default function Header() {
    return (
        <div className="flex top-0 w-screen h-4 box-border items-baseline">
            <Links/>
            <Links/>
            <Links/>
        </div>
    )
}