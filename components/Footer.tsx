'use client'

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { SkipBackIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {

    const router = useRouter();

    return (
        <div className={cn(
            "flex-col w-full h-fit min-h-[40vh] bg-border mt-16",
            "md:flex"
        )}>
            <div className="flex flex-col p-12 gap-2">
                <p className="text-2xl font-bold tracking-tight">Jeremy Stiava</p>
                <p>Software Developer from Chicago.<br /> B.S. in Computer Science & Political Science, WashU</p>
                <Button variant={'link'} className={'w-fit px-0'}>jeremystiava@gmail.com</Button>
            </div>

            <div className="flex flex-col p-12 gap-2">
                <Button className={'w-full h-12'} size={'lg'} variant={'outline'} onClick={e => {
                    router.push('/')
                }} ><SkipBackIcon     /> Return Home</Button>
            </div>
        </div>
    )
}