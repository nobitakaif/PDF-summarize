import { File } from "lucide-react"
import { ImgHTMLAttributes } from "react"

export function HowItsWork(){
    return <div>
            <div className=" flex flex-col  shadow-2xl h-32 rounded-lg m-2 mt-6 light:shadow-[#232b2b]">
            <div className="w-full text-center mt-5 dark:text-gray-400 text-gray-900/50 font-extrabold lg:text-2xl">
                -- HOW IT WORKS -- 
            </div>
            <div className="lg:text-4xl text-xl text-center font-bold ">
                Transform any PDF into an easy-to-digest summary in three simple steps
            </div>
            
        </div>
        <div>
            <Card img={<File/>} title={"AI Analysis"} subHeading={"This is sub heading"}/>
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
    return <div className="h-52  lg:w-52 bg-gray-300 mr-6 ml-6 rounded-xl hover:border  hover:border-rose-500/410">
        {img}
        <div className="font-bold">{title}</div> 
        <div className="dark:text-gray-400 text-gray-900/50">{subHeading}</div>
    </div>
}