import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectById, getTranslations } from '@/services/Request';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { useRouter } from 'next/router';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '.';

export default function ProjectsId() {
    const { language } = useLanguage();
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    const { data, isLoading, error } = useQuery({
        queryKey: ['project', language, id],
        queryFn: () => {
            if (!id) return null;
            return getProjectById(language, id);
        },
        enabled: !!id,
    });

    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
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
                {data?.data?.title && (
                    <BreadcrumbNavigation
                        items={[
                            {
                                text: `${translationsData?.data?.Məhsullar}`,
                                path: '/projects',
                            },
                            {
                                text: data?.data?.title,
                                path: `/projects/${id}`,
                            },
                        ]}
                    />
                )}
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
                                            className="object-cover w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
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
                    {translationsData?.data?.Digər_Layihələr}
                </h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 w-full self-center justify-self-center place-items-center gap-6 mt-[34px] max-w-[1200px] mx-auto">
                    {data?.projects?.map((item: Project) => (
                        <ProjectCard key={item.id} data={item} />
                    ))}
                </div>

                {/* <ProjectSwiper /> */}
            </main>
            <Footer />
        </div>
    );
}
