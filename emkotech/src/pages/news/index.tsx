import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import PaginationComponent from '@/components/Pagination';
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
    const router = useRouter();
    return (
        <div>
            {' '}
            <Header activeindex={4} />
            <BreadcrumbNavigation />
            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl"
                    >
                        Məhsullar
                    </h1>
                </section>
                <section className="flex flex-row flex-wrap lg:px-[100px] md:px-[60px] px-[30px] justify-center gap-4 mt-[34px]">
                    {Array.from({ length: 12 }).map((item: any, index) => (
                        <div
                            className="flex overflow-hidden flex-col justify-center bg-white rounded-2xl max-w-[288px]"
                            onClick={() => router.push('/news/id')}
                        >
                            <div className="flex overflow-hidden flex-col w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fa2b931275649e51fe3d33e26214c043dbe8fc209e608a452f59a5fd319d3092?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain w-full aspect-[1.38]"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-6 w-full bg-white text-zinc-800">
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-xl font-medium leading-snug">
                                            Talk it out with audio
                                        </div>
                                        <div className="mt-2 text-sm tracking-wide leading-5">
                                            Use audio to have live conversations
                                            with other collaborators directly in
                                            your Figma and FigJam files.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-8 w-full text-xs tracking-normal leading-snug">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fc4fa5e45336e80ee82c9e821d94df4e3e27afda654d7ada6355603f32e5f7b5?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain w-full aspect-[250]"
                                    />
                                    <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                        <div className="gap-2 self-stretch my-auto">
                                            March 01, 2021
                                        </div>
                                        <div className="flex gap-2 justify-center items-center self-stretch my-auto whitespace-nowrap">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/773a2b2554008121fab7182cf9957a2babbd8eb738963406bc2d4d2955deddfe?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                                            />
                                            <div className="self-stretch my-auto">
                                                440
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <PaginationComponent
                    totalPages={12}
                    currentPage={1}
                    onPageChange={() => {}}
                />
            </main>
            <Footer />
        </div>
    );
}
