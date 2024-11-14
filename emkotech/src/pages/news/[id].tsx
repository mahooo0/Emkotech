import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Aside } from '@/components/NewsIdAside';
import MainID from '@/components/NewsIdMain';
import { NewsSwiper } from '@/components/NewsSwipper';
import { useRouter } from 'next/router';
import React from 'react';

export default function id() {
    const router = useRouter();
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
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z"
                                stroke="#9B9B9B"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M1.5 9C2.7 5.92725 5.502 3.75 9 3.75C12.498 3.75 15.3 5.92725 16.5 9C15.3 12.0728 12.498 14.25 9 14.25C5.502 14.25 2.7 12.0728 1.5 9Z"
                                stroke="#9B9B9B"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <span className="self-stretch my-auto">25.3K </span>
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
                            <button
                                className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90"
                                onClick={() => router.push('/news')}
                            >
                                <p className="self-stretch my-auto text-nowrap ">
                                    Hamısına bax
                                </p>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b0bcb315d4534a4ad48392d7c96985a79c21ac585f3284b9a6268cac196f65a9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain shrink-0  self-stretch my-auto w-6 aspect-square"
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
