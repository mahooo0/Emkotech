import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects, getTranslations } from '@/services/Request';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import ProjectCard from '@/components/ProjectCard';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Projects() {
    const { language } = useLanguage();
    const [showAll, setShowAll] = useState(false);
    const { data, isLoading } = useQuery({
        queryKey: ['projects', language],
        queryFn: () => getProjects(language),
    });
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });
    console.log(data);
    return (
        <div>
            <Header activeindex={3} />
            <main>
                <BreadcrumbNavigation
                    items={[
                        {
                            text: `${translationsData?.data?.Layihələr}`,
                            path: '/projects',
                        },
                    ]}
                />
                <section className="flex flex-col text-black lg:px-[100px] md:px-[60px] px-[30px] ">
                    <div className="flex flex-col rounded-2xl mt-[24px]">
                        <h2 className="self-center text-5xl text-black max-md:text-4xl">
                            {translationsData?.data?.Layihələr}
                        </h2>
                        <div className=" grid lg:grid-cols-3 md:grid-cols-2 max-w-[1100px] grid-cols-1  self-center justify-self-center gap-6 mt-6">
                            {isLoading &&
                                Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="animate-pulse">
                                        <div className="flex overflow-hidden flex-col justify-center bg-gray-200 rounded-2xl w-[333px]">
                                            <div className="flex overflow-hidden flex-col w-full">
                                                <div className="w-full h-[208px] bg-gray-300" />
                                            </div>
                                            <div className="flex flex-col justify-center p-6 w-full">
                                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
                                                <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                                                <div className="h-4 bg-gray-300 rounded w-full mb-8" />
                                                <div className="h-[1px] bg-gray-300 w-full mb-4" />
                                                <div className="flex justify-between">
                                                    <div className="h-3 bg-gray-300 rounded w-1/4" />
                                                    <div className="h-3 bg-gray-300 rounded w-1/6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            {data?.data
                                ?.slice(0, showAll ? data.data.length : 9)
                                .map((item: Project) => (
                                    <ProjectCard data={item} key={item.id} />
                                ))}
                        </div>
                        {data?.data?.length > 9 && !showAll && (
                            <div className="w-full flex justify-center items-center mt-[50px] ">
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="bg-[#186FE0] hover:bg-[#1829e0] duration-300 text-white px-[28px] py-[14px] rounded-[18px]"
                                >
                                    {translationsData?.data?.Daha_çox}
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
