'use client'

import { cn } from "@/lib/utils"

export default function ProjectsPage() {

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className={cn(
                "flex flex-col p-0"
            )}>

                {/* Courses header */}
                <div className="relative flex flex-col gap-6 items-center justify-center w-full h-[45vh] bg-[#2b4c80] text-white">
                    <div
                        className="absolute inset-0  bg-repeat bg-[length:64px_64px] opacity-20"
                        style={{
                            backgroundImage: "url('/pattern-1.png')",
                        }}
                    />
                    <p className="w-fit text-5xl font-serif tracking-tight">Make no small plans</p>
                    <span className="text-sm font-serif">Daniel Burnham</span>
                </div>

                <div className={cn(
                    "flex flex-wrap gap-8 p-8",
                    "md:p-16"
                )}>
                    <p>Courses</p>
                </div>

            </div>
        </div>
    )
}