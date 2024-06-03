'use client'

import Navbar from "@/app/components/Navbar";


export function PageRenderer(section: any, index: number) {
    debugger
    switch (section.__component) {
        case "layout.navbar":
            return <Navbar key={index} data={section} />
        default:
            return null;
    }
}