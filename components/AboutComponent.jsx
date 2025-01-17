import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">

                    <div className="px-12 flex items-center justify-between pb-4">
                        <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">About Me</a>
                    </div>

                    <p className="px-12 pb-4 ">
                        Born on 11th February 1976 at District Baragarh, Odisha, got his primary education in Bargarh School. After his schooling, he went to Bhubaneswar and then New Delhi for his professional studies in Accounting and Information Technology respectively. His mother Smt. Jyotshna Mohanty, a devoted pious lady and father Late Pratap Chandra Mohanty, served as an Union Leader and Human Resource management Personnel.
                    </p>
                    <div className="flex px-12 pt-4 gap-x-4 ">
                        {/* <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" /> */}
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="/about">
                            Know more
                            <TbArrowUpRight className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}