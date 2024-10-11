"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function CatalogSwiperSection() {

    return (
        <div className="container py-16">
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">

                    <div className="px-12 flex items-center justify-between pb-4">
                        <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">Fossil Extraction</a>
                    </div>

                    <p className="px-12 pb-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex px-12 pt-4 gap-x-4 ">
                        {/* <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" /> */}
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="#">
                            Know more
                            <TbArrowUpRight className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}