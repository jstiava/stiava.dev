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
    const { toggleDarkMode, isDark } = useContext(SessionContext);
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
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    router.push('https://github.com/jstiava')
                }}>
                    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill={isDark ? '#fff' : "#1B1F23"} />
                    </svg>
                </Button>
            </div>

            {/* MOBILE MENU */}
            <div className={cn(
                "flex gap-2",
                "md:hidden"
            )}>
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    toggleDarkMode()
                }}><MoonIcon /></Button>
                <Button variant={'outline'} size={'lg'} onClick={e => {
                    router.push('https://github.com/jstiava')
                }}>
                    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill={isDark ? '#fff' : "#1B1F23"} />
                    </svg>
                </Button>
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
    // {
    //     label: "Projects",
    //     slug: '/projects',
    //     type: 'link'
    // },
    // {
    //     label: "Courses",
    //     slug: '/courses',
    //     type: 'link'
    // },
    // {
    //     label: "Contact",
    //     slug: '/contact',
    //     type: 'link'
    // },
    // {
    //     label: "About Me",
    //     slug: "/about-me",
    //     type: 'link'
    // }
]