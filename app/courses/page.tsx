'use client'

import { cn } from "@/lib/utils"

export default function CoursesPage() {

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className={cn(
                "flex flex-col p-0"
            )}>

                {/* Section header */}
                <div className="relative flex flex-col gap-6 items-center justify-center w-full h-[45vh] bg-[#520f2c] text-white">
                    <div
                        className="absolute inset-0  bg-repeat bg-[length:256px_256px] opacity-20"
                        style={{
                            backgroundImage: "url('/pattern-2.png')",
                        }}
                    />
                    <p className="w-fit text-5xl font-serif tracking-tight">Those that can't do teach</p>
                    <p className="w-fit text-sm">(But gatekeeping is worse.)</p> 
                </div>

                
            </div>
        </div>
    )
}