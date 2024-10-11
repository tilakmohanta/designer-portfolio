import Image from "next/image";



export default function Projects() {
    return (
        <div className="container ">
            <div className="py-4 lg:py-14">
                <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">A Sculptor’s journey.</h2>
                <p className="text-2xl font-medium">The creativity of Indian artist Dr. Satya Ketan Mohany has given life to dead cells.</p>
            </div>
            <div className="items-center lg:flex gap-x-8">
                <div className="">
                    <p className="pb-8 tracking-wide">
                        The visionary man loves to roam around the sea shore and spend time with nature. That love for nature enabled him to see life in every object and that has given him the space to create his signature in the unique art form as a Sculptor. The creativity of the Indian Artist has explored the potentiality of Drift wood, waste wood and scrap wood etc.
                    </p>
                    <br />
                    <p>
                        The creativity of Indian artist Dr. Satya Ketan Mohany has given life to dead cells. His love for wildlife and nature can be seen in his art.
                    </p>
                    <br />
                    <p>
                        It’s more than two decades while roaming in forests and sea shore, his love for nature and wildlife intrigued in photography. A life after photography, he has seen there is life in every object and that has given him the space to create signature in this unique art form as a sculptor.
                    </p>
                    <br />
                    <p>
                        The sculptor sees himself as ‘an observer of nature’. He says ‘I can see the potentiality of driftwood, waste wood, scrap wood etc. and feel like every objective has a life’. In creating sculpture arts, he has applied his immense craftsmanship and ideas to present things differently and his incredible skill as a sculptor.
                    </p>
                    <br />
                    <p>
                        A small step in the right direction led him to the biggest step of his life and so his effort of more than two decades has given different illustrations and identity.
                    </p>
                    <br />
                    <p>
                        He has been felicitated by various institutions, universities for his incredible collections and drift wood arts in various cultural programs, Universities and institutions.
                    </p>
                    <br />
                </div>
            </div>

            <div class="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="flex flex-col gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/badroom.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery2.jpg" alt="" />
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/swiper1.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery11.jpg" alt="" />
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery14.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery15.jpg" alt="" />
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery7.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/image/gallery11.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
