'use client'

import { Button } from "./ui/button"

export default function Footer() {

    return (
        <div className="flex w-full h-fit min-h-[40vh] bg-border mt-16">
            <div className="flex flex-col p-12 gap-2">
                <p className="text-2xl font-bold tracking-tight">Jeremy Stiava</p>
                <p>Software Developer from Chicago.<br /> B.S. in Computer Science & Political Science, WashU</p>
                <Button variant={'link'} className={'w-fit px-0'}>jeremystiava@gmail.com</Button>
            </div>
        </div>
    )
}