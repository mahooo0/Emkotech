import Header from '@/components/Header';
import { ProductSwiper } from '@/components/ProductSwipper';
import { Footer } from '@/components/Footer';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import {
    getBottomBanner,
    getCustomers,
    getPartners,
    getProductCategories,
    getProducts,
    getStatistics,
    getTopBanner,
} from '@/services/Request';
import PartnersSlider from '@/components/PartnersSwipper';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { languageState } from '@/State/mainAtom';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import ProjectCard from '@/components/ProjectCard';
export default function Home() {
    const router = useRouter();
    const { language, setLanguage } = useLanguage();
    // Add effect to listen to localStorage changes
    useEffect(() => {
        console.log('languageaxsept:', localStorage.getItem('accept-language'));
        console.log('language', language);
    }, [language]);
    const {
        data: topBannerData,
        isLoading: topBannerLoading,
        isError: topBannerError,
    } = useQuery({
        queryKey: ['topBanner', language],
        queryFn: () => getTopBanner(language),
    });
    const {
        data: statisticsData,
        isLoading: statisticsLoading,
        isError: statisticsError,
    } = useQuery({
        queryKey: ['statistics', language],
        queryFn: () => getStatistics(language),
    });
    const {
        data: productsData,
        isLoading: productsLoading,
        isError: productsError,
    } = useQuery({
        queryKey: ['products', language],
        queryFn: () => getProducts(language, ''),
    });
    const {
        data: customersData,
        isLoading: customersLoading,
        isError: customersError,
    } = useQuery({
        queryKey: ['customers', language],
        queryFn: () => getCustomers(language),
    });
    const {
        data: bottomBannerData,
        isLoading: bottomBannerLoading,
        isError: bottomBannerError,
    } = useQuery({
        queryKey: ['bottomBanner', language],
        queryFn: () => getBottomBanner(language),
    });
    const {
        data: partnersData,
        isLoading: partnersLoading,
        isError: partnersError,
    } = useQuery({
        queryKey: ['partners', language],
        queryFn: () => getPartners(language),
    });
    const {
        data: productCategoriesData,
        isLoading: productCategoriesLoading,
        isError: productCategoriesError,
    } = useQuery({
        queryKey: ['productCategories', language],
        queryFn: () => getProductCategories(language),
    });

    if (
        topBannerLoading ||
        statisticsLoading ||
        productsLoading ||
        customersLoading ||
        bottomBannerLoading ||
        partnersLoading ||
        productCategoriesLoading
    ) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (
        topBannerError ||
        statisticsError ||
        productsError ||
        customersError ||
        bottomBannerError ||
        partnersError ||
        productCategoriesError
    ) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>Error</p>
                </div>
            </div>
        );
    }
    return (
        <>
            <Header activeindex={0} />
            <section className=" relative max-h-[553px]">
                <video
                    className="  w-full h-full z-0 object-cover max-h-[553px]"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                    src={topBannerData.data.video}
                ></video>
                <div className="flex absolute  top-0 left-0 overflow-hidden z-10 flex-col justify-center items-start px-[100px] py-44 bg-black bg-opacity-20 max-md:px-5 max-md:py-24 w-full h-full">
                    <div className="flex flex-col max-w-full w-[652px]">
                        <h1 className="self-start lg:text-5xl md:text-3xl text-2xl font-medium text-white  max-md:max-w-full ">
                            {topBannerData.data.title}
                        </h1>
                        <div
                            className="mt-3.5 lg:text-lg md:text-lg text-[12px] text-gray-200 max-md:max-w-full"
                            dangerouslySetInnerHTML={{
                                __html: topBannerData.data.description,
                            }}
                        ></div>
                        <button
                            className="w-[200px] h-[47px] relative flex justify-between items-center mt-[20px]"
                            onClick={() => router.push('/products')}
                        >
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
                            {statisticsData.data.map((item: any) => (
                                <div className="flex flex-col grow shrink justify-center self-stretch my-auto whitespace-nowrap border-b border-[#D2D641] w-[157px]">
                                    <h3 className="gap-2.5 self-stretch p-2.5 w-full font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="gap-2.5 self-stretch p-2.5 mt-2.5 w-full font-semibold">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap lg:gap-[140px] gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            <p className="grow shrink text-lg text-stone-300 w-[776px] max-md:max-w-full">
                                Discover how organizations around the world
                                leverage evolving features and unlock actionable
                                insights that increase security where it matters
                                most.
                            </p>
                            <button
                                className="gap-2.5 self-start p-2.5 mt-1.5 px-[20px] py-[10px]  text-base font-medium text-[#D2D641] border border-[#D2D641] border-solid rounded-[35px]"
                                onClick={() => router.push('/products')}
                            >
                                Layihələrə bax
                            </button>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="grid lg:grid-cols-3 grid-cols-1 w-full self-center justify-items-center justify-self-center gap-6 mt-6 max-w-[1200px] mx-auto">
                                {statisticsData.projects.map((item: any) => (
                                    <ProjectCard data={item} />
                                ))}
                                {/* one card */}

                                {/* <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" mt-[100px]">
                <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap lg:px-[100px] md:px-[60px] px-[30px]  ">
                    <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                        Populyar Məhsullar
                    </h2>
                    <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                        <button
                            className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90"
                            onClick={() => router.push('/products')}
                        >
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
                <ProductSwiper data={productsData.data} />
            </section>
            <section className=" mt-[100px]">
                <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap  lg:px-[100px] md:px-[60px] px-[30px] ">
                    <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                        Endirimli məhsullar{' '}
                    </h2>
                    <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                        <button
                            className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90"
                            onClick={() => router.push('/products')}
                        >
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
                <ProductSwiper
                    data={productsData.data.filter(
                        (item: any) => item.discount
                    )}
                />
            </section>
            <section className="w-full lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap  ">
                    <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                        Kateqoriyalar
                    </h2>
                    <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                        <button
                            className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90"
                            onClick={() => router.push('/products')}
                        >
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
                    {productCategoriesData.data.map(
                        (item: any, index: number) => (
                            <div
                                key={index}
                                onClick={() =>
                                    router.push(`/products?category=${item.id}`)
                                }
                                className="lg:w-[49%] w-full h-[336px] rounded-2xl cursor-pointer"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url("${item.image}")`,
                                }}
                            >
                                <div className="text-xl font-semibold pt-[30px] pl-[30px]">
                                    {item.title}
                                </div>
                                <div className="text-base mt-4 ml-[30px]">
                                    {item.description}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
            <section className="flex flex-col rounded-none lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
                <div className="self-center text-5xl text-black max-md:text-4xl">
                    Müştərilərimiz
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 w-full max-md:max-w-full">
                    {customersData.data.map((item: any, index: number) => (
                        <div
                            className="  flex flex-1 gap-3.5  rounded-2xl bg-white bg-opacity-70 shadow-[0px_0px_4px_rgba(0,0,0,0.05)]"
                            key={index}
                        >
                            <div className="flex flex-col justify-center items-start px-5 py-4 bg-white rounded-2xl border-r border-neutral-100 border-opacity-90">
                                <img
                                    loading="lazy"
                                    src={item.icon}
                                    className="object-contain w-12 aspect-square"
                                />
                            </div>
                            <div className="flex flex-col my-auto justify-normal gap-2">
                                <div className="self-start text-sm font-bold text-black">
                                    {item.name}
                                </div>
                                <div
                                    className=" text-sm text-purple-950 text-opacity-80"
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}{' '}
                </div>
                <div
                    className="mt-[120px] rounded-lg"
                    style={{
                        backgroundImage: `url("${bottomBannerData.data.image}")`,
                        backgroundSize: 'cover', // This ensures the image covers the area
                        backgroundPosition: 'center', // This centers the image within the div
                    }}
                >
                    <div className="flex overflow-hidden flex-col items-start px-20 py-20 font-medium rounded-2xl bg-black bg-opacity-30 max-md:px-5 ">
                        <h4 className="text-5xl text-white max-md:text-4xl">
                            {bottomBannerData.data.title}
                        </h4>
                        <div
                            className="mt-1 text-lg text-gray-200 w-[604px] max-md:max-w-full"
                            dangerouslySetInnerHTML={{
                                __html: bottomBannerData.data.description,
                            }}
                        ></div>
                        <button className="gap-2.5  self-stretch py-2.5 px-[62px] mt-5 text-base text-black w-fit whitespace-nowrap bg-white rounded-[35px]">
                            {bottomBannerData.data.button_text}
                        </button>
                    </div>
                </div>
            </section>
            <section className="ProductSwippenSection flex flex-col rounded-none  mt-[120px] w-[100%] overflow-hidden">
                <div className="self-center text-5xl text-black max-md:text-4xl">
                    Partnyorlar
                </div>
                <PartnersSlider data={partnersData.data} />
            </section>
            <Footer />
        </>
    );
}
