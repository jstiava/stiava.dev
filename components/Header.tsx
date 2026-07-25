'use client'

import { MenuIcon, MoonIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useContext, useState } from "react"
import { SessionContext } from "@/app/SessionContext"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { useRouter } from "next/navigation"


export default function Header() {

    const router = useRouter();
    const { toggleDarkMode } = useContext(SessionContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex w-full justify-between p-8 bg-background">
            <div className="flex">
                <Button variant={'link'} className="font-bold text-xl tracking-tight" onClick={e => {
                    router.push('/')
                }} ><h1>Jeremy Stiava</h1></Button>
            </div>

            {/* DESKTOP MENU */}
            <div className={cn(
                "gap-2 hidden",
                "md:flex"
            )}>
                <div className="flex gap-1">
                    {HEADER_MENU_ITEMS.map((item, i) => {

                        if (item.type == 'link') {
                            return (
                                <Button key={item.slug} variant={'link'} onClick={e => {
                                    router.push(item.slug)
                                }}>{item.label}</Button>
                            )
                        }
                        return null
                    })}
                </div>
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    toggleDarkMode()
                }}><MoonIcon /></Button>
            </div>

            {/* MOBILE MENU */}
            <div className={cn(
                "flex gap-4",
                "md:hidden"
            )}>
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    toggleDarkMode()
                }}><MoonIcon /></Button>
                <Dialog open={isMenuOpen} onOpenChange={(open) => {
                    setIsMenuOpen(open)
                }}>
                    <DialogTrigger>
                        <Button size={'lg'} variant={'default'}>
                            <MenuIcon />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={'max-w-none w-screen h-screen rounded-none border-0 p-0 bg-background pt-16'}>
                        <div className="flex flex-col">
                            {HEADER_MENU_ITEMS.map(item => (
                                <Button key={item.slug} variant={'link'} className={'flex justify-start w-full p-4 px-8 h-fit rounded-none text-2xl '} onClick={e => {
                                    router.push(item.slug);
                                    setIsMenuOpen(false)
                                }}>{item.label}</Button>
                            ))}
                        </div>
                        <div className="flex fixed bottom-2 left-0 w-full p-2">
                            <Button variant={'outline'} size={'lg'} className={' h-12 w-full'} onClick={e => {
                                setIsMenuOpen(false)
                            }}>Close</Button>
                        </div>
                    </DialogContent>
                </Dialog>
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
        label: "Courses",
        slug: '/courses',
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