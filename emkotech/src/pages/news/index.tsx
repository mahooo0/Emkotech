import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import PaginationComponent from '@/components/Pagination';
import { getNews, getTranslations } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface NewsItem {
    id: number;
    image: string;
    title: string;
    short_description: string;
    date: string;
    views: number;
}

export default function NevsId() {
    const { language } = useLanguage();
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ['news', language, page],
        queryFn: () => getNews(language, page),
    });
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });
    console.log(data);
    const router = useRouter();
    return (
        <div>
            {' '}
            <Header activeindex={4} />
            <BreadcrumbNavigation
                items={[
                    {
                        text: `${translationsData?.data?.Xəbərlər}`,
                        path: '/news',
                    },
                ]}
            />
            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl"
                    >
                        {translationsData?.data?.Xəbərlər}
                    </h1>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-self-center sm:grid-cols-2 gap-4 lg:px-[100px] md:px-[60px] px-[30px] mt-[34px]">
                    {isLoading ? (
                        <>
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="flex overflow-hidden flex-col justify-center bg-white rounded-2xl w-full lg:max-w-1/4 max-w-[288px]"
                                >
                                    <div className="flex overflow-hidden flex-col w-full">
                                        <div className="w-full aspect-[1.38] bg-gray-200 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col justify-center p-6 w-full bg-white">
                                        <div className="flex flex-col w-full">
                                            <div className="flex flex-col w-full">
                                                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                                <div className="mt-2 h-20 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-8 w-full">
                                            <div className="h-px bg-gray-200"></div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        data?.data?.map((item: NewsItem, i: number) => (
                            <div
                                key={i}
                                className="flex cursor-pointer overflow-hidden flex-col justify-center bg-white rounded-2xl max-w-[288px]"
                                onClick={() => router.push(`/news/${item.id}`)}
                            >
                                <div className="flex overflow-hidden flex-col w-full">
                                    <img
                                        loading="lazy"
                                        className="object-cover w-full aspect-[1.38]"
                                        src={item.image}
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-6 w-full bg-white text-zinc-800">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <div className="text-xl font-medium leading-snug h-[2.5em] overflow-hidden">
                                                {item.title}
                                            </div>
                                            <div
                                                className="mt-2 text-sm tracking-wide leading-5"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.short_description,
                                                }}
                                            ></div>
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
                                                {item.date}
                                            </div>
                                            <div className="flex gap-2 justify-center items-center self-stretch my-auto whitespace-nowrap">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/773a2b2554008121fab7182cf9957a2babbd8eb738963406bc2d4d2955deddfe?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    {item.views}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
                <PaginationComponent
                    totalPages={data?.total_pages}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </main>
            <Footer />
        </div>
    );
}
