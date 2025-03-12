import Link from "next/link"
import {FileText} from "lucide-react"
import { ModeToggle } from "../ui/mode.toggle"
import { Island_Moments } from "next/font/google"

// export const Header=()=>{
//     const isLoggedIn = true
//     return <div className="flex items-center justify-between lg:pl-10 pl-3 pr-3 mt-3"> 
//         <div className="flex items-center">
//         <Link href="/" className="flex gap-1 lg:gap-3 shrink-0 items-center">
//             <FileText className="w-5 h-5  lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 cursor-pointer transition duration-200 ease-in-out dark:text-white"></FileText>
//             <span className="font-extrabold lg:text-xl lg:text-gray-900 dark:text-white">Sommaire</span>
//             </Link>
//         </div>
//         <div className=" flex lg:gap-12 gap-4 lg:justify-center lg:items-center">
//            {isLoggedIn ? <Link href={"/pricing"}>Pricing</Link> :<Link href={"/dashboard"}>your Summarise</Link>}
//         </div>
//         <div className="lg:pr-10 flex items-center lg:gap-3 gap-1">
//             <ModeToggle/>
            
//             <Link href={"/signin"}>singin</Link>
//         </div>
//     </div>
// }

export function Header2(){
    const isLoggedIn = true
    return <div className="lg:m-3 m-2 mt-3 flex justify-between items-center lg:py-px lg:mr-5 lg:ml-20">
        {/* main Logo */}
        <div className="flex items-center lg:py-px">
             <Link href={"/"} className="flex items-center lg:py-px">
                <FileText className="hover:rotate-12 transition duration-300 ease-in-out cursor-pointer mr-2"/>
                <span className="lg:text-xl font-extrabold">Sommaire</span>
            </Link>
        </div>

            {/* pricing or dashboard */}
        <div>
            {isLoggedIn ?  (<Link href={"/dashboard"}>dashboard</Link>) : 
            ( <Link href={"/pricing"}>pricing</Link>)}
            
        </div>

        {/* authorizatoin */}
        <div className="pr-3 sm:pr-8 cursor-pointer">
            {isLoggedIn ? (<ModeToggle />) : (<span>user</span>)}
            
        </div>
    </div>
}