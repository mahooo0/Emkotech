import BreadcrumbNavigation from '@/components/BreadCamp';

import { getAbout, getAboutBanner, getTranslations } from '@/services/Request';
import { parse } from 'cookie';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import React from 'react';
interface CameraData {
    id: number;
    title: string;
    description: string;
    image: string;
    image2: string;
    image3: string;
}
interface AboutBunnerItem {
    id: number;
    title: string;
    description: string;
    image: string;
}
type TranslationData = Record<string, string>;

export interface Translation {
    data: TranslationData;
}
interface AboutBunner {
    data: AboutBunnerItem[];
}
interface AboutData {
    data: CameraData[];
}
interface AboutBannerItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface AboutUsProps {
    aboutData: AboutData;
    aboutBannerData: AboutBunner;
    translationsData: Translation;
}

export default function AboutUs({
    aboutData,
    aboutBannerData,
    translationsData,
}: AboutUsProps) {
    if (!aboutData || !aboutBannerData || !translationsData)
        return <p>error</p>;

    return (
        <div className="mt-[94px]">
            <main>
                <BreadcrumbNavigation
                    items={[
                        {
                            text: `${translationsData?.data?.Haqqımızda}`,
                            path: '/aboutus',
                        },
                    ]}
                />
                <section className="flex flex-row-reverse max-sm:flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] gap-6 mt-6">
                    <div className="z-10 mt-0 max-md:-mr-2 max-md:max-w-full">
                        <div className="flex lg:gap-[0] gap-5 flex-col items-center">
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
                                <h1 className="lg:text-5xl leading-[64px] max-md:leading-10 text-[2rem] text-black lg:mt-10 mt-0 max-md:max-w-full  lg:leading-[56px] ">
                                    {aboutData?.data[0].title}
                                </h1>
                            </div>
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData?.data[0].description,
                                    }}
                                    className="lg:mt-4 mt-0 text-lg text-black  max-md:max-w-full leading-6"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-5 mt-0 w-full max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col lg:mt-4 mt-0">
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                                <Image
                                    loading="lazy"
                                    src={aboutData?.data[0].image}
                                    alt="About Image 1"
                                    width={800}
                                    height={600}
                                    className="object-cover object-center w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] lg:mt-[120px] mt-[60px]">
                    <h2 className="self-center text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="text-[#EA9B12] ">
                            {translationsData?.data?.Yekunlaşdırma}{' '}
                        </span>
                        <span className="">
                            {translationsData?.data?.Şirkətimizin}
                        </span>
                    </h2>
                    <div className="lg:mt-12 mt-0 w-full  max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col mt-6">
                            {aboutBannerData?.data.map(
                                (item: AboutBannerItem) => (
                                    <div
                                        className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                                        key={item.id}
                                    >
                                        <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid lg:mt-6 mt-0">
                                            <Image
                                                loading="lazy"
                                                src={item.image}
                                                alt={item.title}
                                                width={54}
                                                height={54}
                                                className="object-contain aspect-square w-[54px]"
                                            />
                                            <div className="flex flex-col mt-5 w-full">
                                                <div className="text-lg font-semibold">
                                                    {item.title}
                                                </div>
                                                <div
                                                    className="mt-1.5 text-sm"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.description,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = parse(context.req.headers.cookie || '');
    const lang = cookies['accept-language'] || 'en';

    try {
        const [aboutData, aboutBannerData, translationsData] =
            await Promise.all([
                getAbout(lang),
                getAboutBanner(lang),
                getTranslations(lang),
            ]);

        return {
            props: {
                aboutData,
                aboutBannerData,
                translationsData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                aboutData: null,
                aboutBannerData: null,
                translationsData: null,
            },
        };
    }
}
