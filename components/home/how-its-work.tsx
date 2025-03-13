
import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react"

export function HowItsWork(){

    return <div>
            <div className=" flex flex-col  shadow-2xl h-32 rounded-lg m-2 mt-6 light:shadow-[#232b2b]">
            <div className="w-full text-center mt-5 dark:text-gray-400 text-gray-900/50 font-extrabold lg:text-2xl">
                -- HOW IT WORKS -- 
            </div>
            <div className="lg:text-4xl text-xl text-center font-bold md:text-2xl ">
                Transform any PDF into an easy-to-digest summary in three simple steps
            </div>
            
        </div>
        <div className="lg:flex md:flex md:justify-center lg:justify-center pt-9 m-1">
            <Card img={<FileText className="h-[64] w-[64] "/>} title={"AI Analysis"} subHeading={"This is sub heading for AI Analysis"}/>
            <div className="hidden md:block lg:block"><MoveRight className="mt-20 "/></div>
            <Card img={<BrainCircuit className="h-[64] w-[64] "/>} title={"Brain Circuit"} subHeading={"This is sub heading for Brain Circuit"}/>
            <div className="hidden md:block lg:block"><MoveRight className="mt-20 "/></div>
            <Card img={<FileOutput className="h-[64] w-[64] "/>} title={"File Output"} subHeading={"This is sub heading for File Output"}/>
        </div>
    </div>
    
}

function Card(
    {
        img,
        title,
        subHeading
    }:{
        img:React.ReactNode,
        title:string,
        subHeading:string
    }){
    return <div className="h-52  lg:w-52 relative mr-6 ml-6 rounded-xl hover:border   hover:border-rose-500/410 m-3 ">
        <div className="w-full flex items-center justify-center pt-10 ">
            <div className="dark:bg-[#232b2b] w-18 h-18 p-1 bg-gray-300/50 rounded-lg">{img}</div>
        </div>
            <div className="font-bold text-center text-2xl">{title}
        </div> 
        <div className="dark:text-gray-400 text-center text-gray-900/50">{subHeading}</div>
    </div>
}