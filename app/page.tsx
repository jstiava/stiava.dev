import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { CircleParking, CircleUserRound, Code, SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">

      {/* HERO */}
      <div className={cn(
        "flex flex-col-reverse md:flow-row w-full justify-start px-10  py-12 gap-8",
        "md:flex-row md:justify-between md:gap-0 md:px-16"
      )}>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">Jeremy Stiava<br />Full-Stack Software Developer</h2>
          <p>Interest in GIS mapping, election data, and personal planning.<br /> B.S. in Computer Science & Political Science, WashU</p>
          <div className="flex pt-4">
            <Button  className={'w-fit max-w-full px-8 h-12'} size={'lg'}>
              <a href="/JeremyStiava_Resume_2060713.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
        <div className={cn(
          "flex flex-col gap-6 items-center",
          "md:items-end"
        )}>
          <div className="w-70 h-70 rounded-full bg-[lightgrey] bg-cover bg-center" style={{
            backgroundImage: `url("/headshot_chatgpt_greyscale.png")`,
          }} >
            <div className="flex w-full h-full rounded-full bg-cover opacity-0 hover:opacity-100 transition transition-opacity transition-200 ease-in-out" style={{
              backgroundImage: `url("/headshot_chatgpt_watercolor.png")`,
              backgroundPosition: 'center 25%'
            }}>

            </div>
          </div>
          <span className="text-xs opacity-50">Photo enhanced with ChatGPT.</span>
        </div>
      </div>

      {/* SEARCH */}
      {/* <div className={cn(
        "flex px-8",
        "md:px-16"
      )}>
        <div className={cn(
          "flex flex-col w-full px-0 gap-4",
          " md:px-8 "
        )}>
          <InputGroup className="h-12 px-2 gap-1">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex flex-col gap-1 px-4">
            <Button variant={'ghost'} size={'lg'} className={'flex justify-start opacity-50 hover:opacity-75 transition-opacity'}>
              <CircleUserRound /> Read bio
            </Button>
            <Button variant={'ghost'} size={'lg'} className={'flex justify-start opacity-50 hover:opacity-75 transition-opacity'}>
              <Code /> Learn to code
            </Button>
            <Button variant={'ghost'} size={'lg'} className={'flex justify-start opacity-50 hover:opacity-75 transition-opacity'}>
              <CircleParking /> Go to free parking
            </Button>
          </div>
        </div>
      </div> */}


      {/* BLOG */}
      {/* <div className={cn(
        "flex px-6 py-16",
        "md:px-16"
      )}>
        <div className="flex flex-col w-full items-center gap-6 border border-1 border-border rounded-md py-24">
          <span className="text-3xl font-lighter tracking-tight font-serif text-center">Park for free.</span>
          <p className="text-center">Look at paid parking, permits, and enforcement predictions.</p>
        </div>
      </div> */}


      {/* PROJECTS */}
      <div className={cn(
        "flex px-8 py-16",
        "md:px-16"
      )}>
        <div className="flex flex-col w-full items-center gap-12">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <div className="flex flex-wrap justify-center gap-[2rem] w-full">
            {PROJECTS.map(project => {
              return (
                <div className={cn(
                  "flex w-full",
                  "md:w-[calc(50%-1rem)] md:max-w-[20rem]"
                )} key={project.key} >
                  <ProjectCard {...project} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-8">
        <span className="text-center">More projects will be posted soon...</span>

      </div>

     

    </div>
  );
}

const PROJECTS = [
  // {
  //   title: "Calendar App",
  //   description: "The last calendar you'll ever use. An app for all time.",
  //   technologies: ['React', 'AWS'],
  //   key: 'overplanner',
  //   coverImage: 'projects/overplanner-1.png'
  // },
  // {
  //   title: "CTA API Wrapper",
  //   description: "A better way to view buses and trains",
  //   technologies: ['React', 'AWS'],
  //   key: 'cta_transit',
  //   coverImage: '/projects/cta-1.png'
  // },
  {
    title: "Terandina LLC",
    description: "Indigeouous-owned small business in Chicago, IL, selling cultural inspired hoodies, ponchos, and accessories.",
    technologies: ['NextJS', 'React', 'Custom CMS', 'Stripe Payments API'],
    key: 'terandina',
    coverImage: '/projects/Terandina-screenshot-1.png',
    slug: "/projects/terandina"
  },
  // {
  //   title: "ORD Gate Finder Game",
  //   description: "Test your skills in ATC ground metering",
  //   technologies: ['React', 'AWS'],
  //   key: 'ord_gate_finder',
  //   coverImage: '/projects/ord-gates-1.png'
  // },
]