import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export function MainPoint(){
    return <div className="mt-8 flex flex-col items-center mb-5">
        <div className="text-2xl lg:text-4xl font-bold text-center">
            Ready to save Hours of Reading Time?
        </div>
        <div className="text-gray-400 text-center mx-auto max-w-[500px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Transform lengthy documents into clear, actionable insights with our <span className=""> AI-powered summarizer.</span>
        </div>
        <div  className="">
            <Button size={"lg"} className="rounded-full hover:scale-105  duration-300 w-44  text-lg cursor-pointer lg:h-10 lg:w-44 mt-3 lg:text-xl bg-linear-to-r from-slate-900 to-white hover:from-white hover:to-slate-900 transition duration-900 shadow-xlg border text-[#E8F9FF]">Get Strated <ArrowRightIcon/>
            </Button>
        </div>
    </div>
}