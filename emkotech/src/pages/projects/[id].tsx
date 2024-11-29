import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { ProjectSwiper } from '@/components/ProjectSwipper';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectById, getProjects } from '@/services/Request';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { useRouter } from 'next/router';
import ProjectCard from '@/components/ProjectCard';

export default function projectid() {
    const { language } = useLanguage();
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    if (!id) {
        return;
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ['project', language],
        queryFn: () => getProjectById(language, id),
    });
    console.log(data);
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }
    if (error) {
        return <div>Error</div>;
    }
    return (
        <div>
            <Header activeindex={3} />
            <main>
                <BreadcrumbNavigation />
                <section className="flex flex-col text-black lg:px-[100px] md:px-[60px] px-[30px] ">
                    <div className="flex flex-col rounded-2xl mt-[24px]">
                        <h2 className="self-center text-5xl text-black max-md:text-4xl">
                            {data?.data?.title}
                        </h2>

                        <div className="flex flex-col rounded-2xl">
                            <div className="mt-6 max-md:-mr-0.5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            className="object-contain w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
                                            src={data?.data?.image}
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                                        <div
                                            className="text-base leading-8 text-neutral-600 max-md:mt-6 max-md:max-w-full"
                                            dangerouslySetInnerHTML={{
                                                __html: data?.data?.description,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="self-center w-full text-center mt-[120px] text-5xl text-black max-md:text-4xl">
                    {data?.data?.title}
                </h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 w-full self-center justify-self-center gap-6 mt-[34px] max-w-[1200px] mx-auto">
                    {data?.projects?.map((item: any) => (
                        <ProjectCard data={item} />
                    ))}
                </div>

                {/* <ProjectSwiper /> */}
            </main>
            <Footer />
        </div>
    );
}
