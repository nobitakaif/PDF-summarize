import { Pizza } from "lucide-react";

export function DemoSection(){
    return <div className="flex items-center text-center py-12 lg:py-24 max-w-5xl mx-auto w-full lg:pl-45 px-4 sm:px-3  lg:px-8">
        <div className="flex flex-col items-center space-y-4 ">
            <Pizza className="lg:h-8 lg:w-8"/>
        <h2 className="text-3xl font-bold max-w-2xl mx-auto w-full  m-2 max-auto px-4 sm:px-3">
        Watch how Sommaire transforms 
        <span className="rounded-full pr-2 pl-2 dark:text-gray-400 text-gray-900/50 bg-clip-text ">this Next.js course PDF</span> into an easy-to-read summary!
        </h2>
        </div>
    </div>
}