import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { CircleParking, CircleUserRound, Code, SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">

      {/* HERO */}
      <div className="flex w-full justify-between p-16 py-12">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-5xl font-bold">Welcome<br />I'm Jeremy.</h2>
          <p>Software Developer from Chicago.<br /> B.S. in Computer Science & Political Science, WashU</p>
          <Button variant={'outline'} className={'w-fit'}>Download Resume</Button>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="w-70 h-70 rounded-full bg-[lightgrey] bg-cover bg-center" style={{
            backgroundImage: `url("/headshot_chatgpt_greyscale.png")`,
          }} >
            <div className="flex w-full h-full rounded-full bg-cover opacity-0 hover:opacity-100 transition transition-opacity transition-200 ease-in-out" style={{
              backgroundImage: `url("/headshot_chatgpt_watercolor.png")`,
              backgroundPosition: 'center 25%'
            }}>

            </div>
          </div>
          <caption className="text-xs">Enhanced with ChatGPT.</caption>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex px-16">
        <div className="flex flex-col w-full px-8 gap-4">
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
      </div>


      {/* BLOG */}
      <div className="flex px-16 py-16">
        <div className="flex flex-col w-full items-center gap-6 border border-1 border-border rounded-md py-24">
          <span className="text-3xl font-lighter tracking-tight font-serif">Park for free.</span>
          <p>Look at paid parking, permits, and enforcement predictions.</p>
        </div>
      </div>


      {/* PROJECTS */}
      <div className="flex px-16 py-16">
        <div className="flex flex-col w-full items-center gap-12">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <div className="flex flex-wrap justify-center gap-[2rem] w-full">

            {PROJECTS.map(project => {

              return (
                <div className="flex w-[calc(50%-1rem)] max-w-[25rem]" key={project.key} >
                  <ProjectCard {...project} />
                </div>
              )
            })}

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex w-full h-fit min-h-[40vh] bg-border mt-16">
        <div className="flex flex-col p-12 gap-2">
          <p className="text-2xl font-bold tracking-tight">Jeremy Stiava</p>
          <p>Software Developer from Chicago.<br /> B.S. in Computer Science & Political Science, WashU</p>
          <Button variant={'link'} className={'w-fit px-0'}>jeremystiava@gmail.com</Button>
        </div>
      </div>

    </div>
  );
}

const PROJECTS = [
  {
    title: "Overplanner",
    description: "The last calendar you'll ever use",
    technologies: ['React', 'AWS'],
    key: 'overplanner',
    coverImage: 'projects/overplanner-1.png'
  },
  {
    title: "CTA API Wrapper",
    description: "A better way to view buses and trains",
    technologies: ['React', 'AWS'],
    key: 'cta_transit',
    coverImage: '/projects/cta-1.png'
  },
  {
    title: "Terandina LLC",
    description: "Native clothing & jewelry",
    technologies: ['React', 'AWS'],
    key: 'terandina',
    coverImage: '/projects/terandina-1.png'
  },
]