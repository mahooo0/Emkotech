import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import { ProductSwiper } from '@/components/ProductSwipper';
import ProductSlider from '@/components/PartnersSwipper';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header activeindex={1} />
            <section className=" relative max-h-[553px]">
                <video
                    className="  w-full h-full z-0 object-cover max-h-[553px]"
                    src="https://s3-figma-videos-production-sig.figma.com/video/1213020028553192391/TEAM/24fe/37d5/-68ca-4f7c-b9c4-18adc1ca0a2f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mgjar1dyiryTLvUUhnKmqBo0eFfoWqx7nggVa4iO8x5qe03aM2T3bqJVK~-cQoaOA2WQBvllTjsh---jAMr6l7dlOg2WQzs8XyEviC-bEgKQwP-cKw80ADG5cCNBi0dl9ED1Pv8jwjYIp6xGdxE5BQh~rxZ6HatCqdrjIsQvq538KMG9VLC1EruP-QfS90ARwwzRmViuPnxeqpWMSKqfKqnFkS~VcYwrhjxewBQjZ-SpwaQiynLDBqZgRNAS9wrxwZEfsK8X8xqfI1AJpDwUBkeN5Hlos-BTn3ZaY-OIFjQ3Uc7R0Bopj7wxOpOSUB9W4gXlOkelYmG9cSXBprvLYA__"
                ></video>
                <div className="flex absolute  top-0 left-0 overflow-hidden z-10 flex-col justify-center items-start px-20 py-44 bg-black bg-opacity-20 max-md:px-5 max-md:py-24 w-full h-full">
                    <div className="flex flex-col max-w-full w-[652px]">
                        <h1 className="self-start text-5xl font-medium text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                            Meet the next generation of Emkotech cameras{' '}
                        </h1>
                        <p className="mt-3.5 text-lg text-gray-200 max-md:max-w-full">
                            Discover how organizations around the world leverage
                            evolving features and unlock actionable insights
                            that increase security where it matters most.{' '}
                        </p>
                        <button className="w-[200px] h-[47px] relative flex justify-between items-center mt-[20px]">
                            <img
                                src="/images/homebtn.png"
                                alt=""
                                className="w-full h-full absolute"
                            />
                            <span className="z-20 w-[75%]  h-full flex justify-center items-center text-white">
                                Daha çox
                            </span>
                            <svg
                                className="w-[20%]  z-20"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08002"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="mt-[100px] lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="flex flex-col rounded-2xl">
                    <h2 className="self-center text-5xl text-black max-md:text-4xl">
                        Lorem Ipsum
                    </h2>
                    <div className="flex overflow-hidden flex-col px-16 py-14 mt-12 w-full rounded-2xl bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-wrap gap-10 justify-center items-center text-2xl text-center text-[#D2D641] border-b border-[#D2D641] max-md:max-w-full">
                            <div className="flex flex-col grow shrink justify-center self-stretch my-auto whitespace-nowrap border-b border-[#D2D641] w-[157px]">
                                <h3 className="gap-2.5 self-stretch p-2.5 w-full font-medium">
                                    Customers
                                </h3>
                                <p className="gap-2.5 self-stretch p-2.5 mt-2.5 w-full font-semibold">
                                    26.000+
                                </p>
                            </div>
                            <div className="flex flex-col grow shrink justify-center self-stretch my-auto w-[157px]">
                                <h3 className="gap-2.5 self-stretch p-2.5 w-full">
                                    Ease of Use
                                </h3>
                                <p className="gap-2.5 self-stretch p-2.5 mt-2.5 w-full font-semibold whitespace-nowrap">
                                    9.5/10
                                </p>
                            </div>
                            <div className="flex flex-col grow shrink justify-center self-stretch my-auto whitespace-nowrap w-[157px]">
                                <h3 className="gap-2.5 self-stretch p-2.5 w-full">
                                    Reseller
                                </h3>
                                <p className="gap-2.5 self-stretch p-2.5 mt-2.5 w-full font-semibold">
                                    9.5/10
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            <p className="grow shrink text-lg text-stone-300 w-[776px] max-md:max-w-full">
                                Discover how organizations around the world
                                leverage evolving features and unlock actionable
                                insights that increase security where it matters
                                most.
                            </p>
                            <button className="gap-2.5 self-start p-2.5 mt-1.5 text-base font-medium text-[#D2D641] border border-[#D2D641] border-solid rounded-[35px]">
                                Layihələrə bax
                            </button>
                        </div>
                        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                {/* one card */}
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    {' '}
                                    <div className="flex overflow-hidden flex-col grow pb-14 w-full text-lg bg-white rounded-2xl max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                            className="object-contain w-full rounded-2xl aspect-[1.52]"
                                        />
                                        <div className="flex flex-col px-5 mt-5 max-md:pr-5">
                                            <h4 className="self-start font-medium text-black">
                                                Lorem Ipsum Dolor Sit Ament
                                            </h4>
                                            <p className="mt-2.5 text-stone-300">
                                                Discover how organizations
                                                around the world leverage
                                                evolving features and unlock
                                                actionable insights that
                                                increase security where it
                                                matters most.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* one card */}

                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col grow pb-14 w-full text-lg bg-white rounded-2xl max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/64036c687ab66ed225bd17d0a778d8b91fc967760e9753e90b5951fc929253e9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                            className="object-contain w-full rounded-2xl aspect-[1.52]"
                                        />
                                        <div className="flex flex-col px-5 mt-5 max-md:pr-5">
                                            <div className="self-start font-medium text-black">
                                                Lorem Ipsum Dolor Sit Ament
                                            </div>
                                            <div className="mt-2.5 text-stone-300">
                                                Discover how organizations
                                                around the world leverage
                                                evolving features and unlock
                                                actionable insights that
                                                increase security where it
                                                matters most.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col grow pb-14 w-full text-lg bg-white rounded-2xl max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fed08dacd4e0de651938c4c406696947cdb13544cf6f7926306483af376ceb5a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                            className="object-contain w-full rounded-2xl aspect-[1.52]"
                                        />
                                        <div className="flex flex-col px-5 mt-5 max-md:pr-5">
                                            <div className="self-start font-medium text-black">
                                                Lorem Ipsum Dolor Sit Ament
                                            </div>
                                            <div className="mt-2.5 text-stone-300">
                                                Discover how organizations
                                                around the world leverage
                                                evolving features and unlock
                                                actionable insights that
                                                increase security where it
                                                matters most.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <ProductSwiper />
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
                <ProductSwiper />
            </section>
            <section className="w-full lg:px-[100px] md:px-[60px] px-[30px]">
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
                <div className="flex flex-row gap-6 w-full flex-wrap justify-center mt-[60px] ">
                    {Array(8)
                        .fill(2, 0, 4)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="lg:w-[49%] w-full h-[336px] rounded-2xl"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage:
                                        'url("https://s3-alpha-sig.figma.com/img/bd4c/ffd4/4f71098ec4ff862c1986422bd537c816?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTa8aFoqpOtwLReFoOwSX1Evi7NQeAAPwymuvfP10R5cdUed8P-XHiXZ80ql3mbdp00VEgIFpuTRAiTyvDtTuBM2aPBuLabkAnRiOjVEKir8M1huGpJTYV0jKuRkWzs2gBSVh7Iq5Q894dm-TDf8q2L~wbjl40SMhYvBAS-aihyMr9ZFFFJPO1yKj05Z2r9M8mNH2kuAsjqVnkjU2FYmwFmEdAFKw6kfEzjWx8b1hGpm4lOfsHHExCvbGGx5boPpn0PLUC2A8jVEPe3rbQa3YF0vk48Rhv7SMpt5L9Zo2zmorZkPuL7r~15bM9XpjSn3iEMm-XfhKGizjB9YdHiylA__")',
                                }}
                            >
                                <div className="text-xl font-semibold pt-[30px] pl-[30px]">
                                    4K Spotlight Battery Wi-
                                    <br />
                                    Fi Security Camera
                                </div>
                                <div className="text-base mt-4 ml-[30px]">
                                    Cut the cord, not the quality
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <section className="flex flex-col rounded-none lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
                <div className="self-center text-5xl text-black max-md:text-4xl">
                    Müştərilərimiz
                </div>
                <div className="flex flex-wrap gap-6 mt-8 w-full max-md:max-w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <div className=" min-w-[290px] flex flex-1 gap-3.5 pr-14 rounded-2xl bg-white bg-opacity-70 shadow-[0px_0px_4px_rgba(0,0,0,0.05)]">
                            <div className="flex flex-col justify-center items-start px-5 py-4 bg-white rounded-2xl border-r border-neutral-100 border-opacity-90">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/09f9713ed7a221e55cb2be2ad3cb1d3f52370281919f7d9c48d05586e33040f0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain w-12 aspect-square"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="self-start text-sm font-bold text-black">
                                    Scale AI
                                </div>
                                <div className="mt-8 text-sm text-purple-950 text-opacity-80">
                                    scale.com
                                </div>
                            </div>
                        </div>
                    ))}{' '}
                </div>
                <div
                    className="mt-[120px] rounded-lg"
                    style={{
                        backgroundImage:
                            'url("https://s3-alpha-sig.figma.com/img/ef9d/c5b4/e587be5e9d4d390a5959fdbd7e64aa4d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FSDcphp80C63pBWJqN0gJNfNkN52SwvcOfygy6tRdZ0RYOhYTU6OSM6L5z3OQwW0yw-ACsRNofzXeXkijhUa3Ulmyoj-6HIVPVY6DPPCQVeSAKMktQmPAvgbT9hofHkSaVscXpOTuGwa9qWjgNqYLx1aeULPA-fBhkME~9tVjCB16ZxJrvlTaOISKTl086YrBn324qY8jkqJ59YjmglbKISF2y05pF4dBFTAxzd0aWjp9gic2M7dqwV9niPfg7-nyyHCahwfEGeogYYwy7Kd59tv10-CsFfmjsiw39Xo40Anh17m0djTG0pRap13pZ9qjL1D5jjohYOAxVIxrlLp0Q__")',
                        backgroundSize: 'cover', // This ensures the image covers the area
                        backgroundPosition: 'center', // This centers the image within the div
                    }}
                >
                    <div className="flex overflow-hidden flex-col items-start px-20 py-20 font-medium rounded-2xl bg-black bg-opacity-30 max-md:px-5 ">
                        <h4 className="text-5xl text-white max-md:text-4xl">
                            New! Wired Floodlight
                        </h4>
                        <p className="mt-1 text-lg text-gray-200 w-[604px] max-md:max-w-full">
                            Protect your home 24/7 with continuous power: Light
                            key areas, deter intrusions, and capture clear,
                            wide-angle video.
                        </p>
                        <button className="gap-2.5 max-w-[152px] self-stretch p-2.5 mt-5 text-base text-black whitespace-nowrap bg-white rounded-[35px]">
                            Bax
                        </button>
                    </div>
                </div>
            </section>
            <section className="ProductSwippenSection flex flex-col rounded-none  mt-[120px] w-[100%] overflow-hidden">
                <div className="self-center text-5xl text-black max-md:text-4xl">
                    Müştərilərimiz
                </div>
                <ProductSlider />
            </section>
            <Footer />
        </>
    );
}
