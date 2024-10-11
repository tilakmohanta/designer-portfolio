import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {
    return (
        <div className="bg-zinc-50">
            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    <p className="tracking-widest">Artist (Sculptor), Museologist</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">Dr. Satya Ketan Mohanty</h1>
                    <p className="pb-6 text-gray-500 xl:pb-10">
                        Founder President – Prakruti Prem (NGO)
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
                        Contact Me
                        <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                <div className="w-1/2">
                    <Image src="/image/profile_image_1.jpg" width={800} height={500} alt="" className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block" />
                </div>
            </div>
        </div>
    );
}
