import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Aside } from '@/components/NewsIdAside';
import MainID from '@/components/NewsIdMain';
import { NewsSwiper } from '@/components/NewsSwipper';
import React from 'react';

export default function id() {
    return (
        <div>
            {' '}
            <Header activeindex={4} />
            <BreadcrumbNavigation />
            <main>
                <div className="flex flex-col text-black justify-center w-full mt-[24px]">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-4xl max-md:text-4xl text-center  max-w-[595px]"
                    >
                        5 Things More Important for Your Content Than
                        Content-Length in 2018
                    </h1>
                </div>
                <section className="flex gap-5 items-center self-start ml-[11%] text-base tracking-normal whitespace-nowrap text-neutral-400 ">
                    <div className="flex gap-2 items-center self-stretch my-auto">
                        <img
                            loading="lazy"
                            src={
                                'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/cf817ca617e1878a4b6ce857d280b52ff3dee263e9c43ed5302ad800e47a0a6d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                            }
                            alt={'alt'}
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <span className="self-stretch my-auto">{'25.3k'}</span>
                    </div>
                    <div className="flex gap-2 items-center self-stretch my-auto">
                        <img
                            loading="lazy"
                            src={
                                'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/cf817ca617e1878a4b6ce857d280b52ff3dee263e9c43ed5302ad800e47a0a6d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&'
                            }
                            alt={'alt'}
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <span className="self-stretch my-auto">
                            {'Views icon'}
                        </span>
                    </div>
                </section>
                <section className="flex mt-3 flex-row justify-between flex-wrap-reverse lg:px-[100px] md:px-[60px] px-[30px] gap-[76px] ">
                    <MainID />
                    <Aside />
                </section>
                <section className=" mt-[100px]">
                    <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap  ">
                        <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                            Populyar Məhsullar
                        </h2>
                        <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                            <button className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90">
                                <p className="self-stretch my-auto text-nowrap ">
                                    Hamısına bax
                                </p>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b0bcb315d4534a4ad48392d7c96985a79c21ac585f3284b9a6268cac196f65a9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </button>
                        </div>
                    </div>
                    <NewsSwiper />
                </section>
            </main>
            <Footer />
        </div>
    );
}
