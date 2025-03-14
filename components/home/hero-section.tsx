import { ArrowRight, ArrowRightIcon, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";


export default function HeroSection(){
    return <section className="relative ms-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in ">
        <div className="">
            <div className="flex">
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r dark:from-white-200 light:from-black-200 dark:via-white-500 light:via-black-500 to-black dark:to-white  bg-black-300  ">
                    <Badge 
                        variant={'secondary'}
                        className="relative px-6 py-2 text-base font-medium  rounded-full group-hover:bg-gray-50 transition-colors duration-200"
                    > 
                        <Sparkle className="h-8 w-8 mr-2 text-black-600 animate-pulse"/>
                        <span className="text-base text-black-600">Powered by AI</span>
                    </Badge>
                
                </div>
                
                
            </div>
           
        </div> 
         <div>
                <h1 className="font-bold  py-6 text-center lg:text-7xl text-2xl md:text-4xl  "> Transform PDFs into 
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2 transition-none">
                            concise
                        </span>
                        <span className="absolute inset-0 dark:bg-[#232b2b] -rotate-2 rounded-lg transform bg-gray-300/50 -skew-y-1 "></span>
                    </span>
                    <div>
                        Summaries
                     </div>                
                </h1>
              
                
            </div>   
            <div className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
                Get a beautiful summary reel of the document in seconds.
            </div>

            <Button size={"lg"} className="rounded-full cursor-pointer lg:h-10  hover:scale-110 hover:transition-all duration-200 lg:w-44 mt-3 lg:text-xl bg-linear-to-r from-slate-900 to-white hover:from-white hover:to-slate-900 transition duration-900 shadow-xlg border text-[#E8F9FF]">Try Sommaire <ArrowRightIcon/></Button>
    </section>
}

