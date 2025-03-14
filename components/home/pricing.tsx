import { ArrowRightIcon, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


export function Pricing(){
    return <div className="lg:flex md:flex justify-center items-center">
        <Card name={"Basic"} description="Perfect for occasional use" price={9} />
        <Card name="Pro" description="For professionals and teams"  price={19} />
    </div>
}


type PriceType={
    name : string,
    price : number
    description : string
    // items : string
    // id : string
    paymentLink? : string
    // priceId : string
}
const plan = [
    {
        name : "Basic",
        price :9,
        description:"Perfect for occasionla use",
        items:`5 PDF summaries per month',
        'Standard processing speed',
        'Email support`,
        id:"basic",
        paymentLink:"",
        pricedId :''
    },
    {
        name :"Pro",
        price :"19",
        description : "Fro professional and teams",
        items:[
            "Unlimited  PDF summaries",
            "Priority processing",
            "24/7 priority support",
            "Mardown Export"
        ],
        id: "Pro",
        paymenLink : "",
        priceId : ""
    }
]
function Card({
    name,
    price,
    description,
    
    paymentLink,
    

}:PriceType){
    return <div className="h-96 lg:w-96 md:w-96  m-3 bg-gray-300/50 text-black dark:text-white dark:bg-[#232b2b] rounded-xl">
        <div className="p-5">
            <div className="text-2xl">
                <p>{name} </p>
                <p>{description}</p>
            </div>
            <div className="text-5xl mt-4 ">
                ${price}
            </div>
            <div className="pt-4 flex flex-col gap-2">
                {name == "Basic" ? ( <>
                <div className="flex gap-1 items-center">
                    <Check className="h-5 "/>
                    <div> 5 PDF summaries per month</div> 
                </div>
                <div className="flex gap-1 items-center"> 
                    <Check className="h-5"/>
                    <div>Standard processing speed</div> 
                </div>
                <div className="flex gap-1 items-center"> 
                    <Check className="h-5"/>
                    <div>Email support</div> 
                </div>
            </>
            ) : (<>
                <div className="flex gap-1 items-center">
                    <Check className="h-5 "/>
                    <div> Unlimited  PDF summaries</div> 
                </div>
                <div className="flex gap-1 items-center"> 
                    <Check className="h-5"/>
                    <div>Priority processing</div> 
                </div>
                <div className="flex gap-1 items-center"> 
                    <Check className="h-5"/>
                    <div>24/7 priority support</div> 
                </div>
                <div className="flex gap-1 items-center"> 
                    <Check className="h-5"/>
                    <div> Markdown Export </div> 
                </div>
            </>)}                
            </div>
           {name == "Basic" ? ( <div className="w-full pt-10 text-center">
                <Button size={"lg"} className="rounded-full w-44  text-lg cursor-pointer lg:h-10 lg:w-44 mt-3 lg:text-xl bg-linear-to-r from-slate-900 to-white hover:from-white hover:to-slate-900 transition duration-900 shadow-xlg border text-[#E8F9FF]">Buy Now <ArrowRightIcon/>
                </Button>
                </div>  ):
                (<div className="w-full text-center">
                <Button size={"lg"} className="rounded-full w-44  text-lg cursor-pointer lg:h-10 lg:w-44 mt-3 lg:text-xl bg-linear-to-r from-slate-900 to-white hover:from-white hover:to-slate-900 transition duration-900 shadow-xlg border text-[#E8F9FF]">Buy Now <ArrowRightIcon/></Button>
                </div>
                )}
            
            
                
        </div>
        </div>
    
}