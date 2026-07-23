'use client'

import { MoonIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useContext } from "react"
import { SessionContext } from "@/app/SessionContext"


export default function Header() {

    const { toggleDarkMode } = useContext(SessionContext)

    return (
        <div className="flex w-full justify-between p-8 bg-background">
            <div className="flex">
                <h1 className="font-bold text-xl tracking-tight" >Jeremy Stiava</h1>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-1">
                    {HEADER_MENU_ITEMS.map((item, i) => {

                    if (item.type == 'link') {
                        return (
                              <Button key={item.slug} variant={'link'}>{item.label}</Button>
                        )
                    }
                    return null
                })}
                </div>
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    toggleDarkMode()
                }}><MoonIcon /></Button>
            </div>
        </div>
    )
}


const HEADER_MENU_ITEMS = [
    {
        label: "Home",
        slug: '/',
        type: 'link'
    },
    {
        label: "Projects",
        slug: '/projects',
        type: 'link'
    },
    {
        label: "Contact",
        slug: '/contact',
        type: 'link'
    },
    {
        label: "About Me",
        slug: "/about-me",
        type: 'link'
    }
]