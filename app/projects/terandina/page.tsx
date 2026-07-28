'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function ProjectsPage() {

    const router = useRouter();

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className={cn(
                "flex flex-col p-0"
            )}>

                {/* Courses header */}
                <div className="relative flex flex-col gap-6 items-center justify-center w-full h-[48.5vh] bg-[#2e4c47] text-white">
                    <div
                        className=" z-1 absolute inset-0  bg-cover bg-[length:64px_64px] opacity-20"
                        style={{
                            backgroundImage: "url(/projects/terandina_product-1.png)"
                        }}
                    />
                    <div className="flex flex-col z-2 items-center gap-4 px-16">
                        <img src={"/projects/Terandina_clear.webp"} width={"200px"} height={"auto"} />
                        <h2 className="text-3xl font-bold tracking-tight">Terandina LLC</h2>
                        <span className="text-center max-w-[400px]">Indigeouous-owned small business in Chicago, IL, selling cultural inspired hoodies, ponchos, and accessories.</span>
                        <Button variant={'secondary'} onClick={e => {
                            router.push('https://terandina.com/')
                        }} className={'w-full h-12'} size={'lg'}>Visit the Project Site</Button>
                    </div>
                </div>


                <div className={cn(
                    "flex flex-wrap justify-center gap-12 p-12",
                    "md:p-16"
                )}>
                    <p className="text-3xl font-light w-full max-w-[600px]">Terandina LLC needed a highly customizable website that was easy to manage and affordable to host.</p>

                    {/* <div className="flex w-full">
                        <img src={"/projects/Terandina-screenshot-1.png"} width={"300px"} height={"auto"} />
                    </div> */}
                </div>

            </div>
        </div>
    )
}