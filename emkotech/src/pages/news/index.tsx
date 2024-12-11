import BreadcrumbNavigation from '@/components/BreadCamp';
import PaginationComponent from '@/components/Pagination';
import { getNews, getTranslations } from '@/services/Request';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface NewsItem {
    id: number;
    image: string;
    title: string;
    short_description: string;
    date: string;
    views: number;
}

interface NevsProps {
    news: {
        data: NewsItem[];
        total_pages: number;
    };
    translations: {
        Xəbərlər: string;
    };
    currentPage: number;
}

export default function Nevs({ news, translations, currentPage }: NevsProps) {
    const router = useRouter();

    const handlePageChange = (page: number) => {
        router.push(`/news?page=${page}`);
    };

    return (
        <div className="mt-[94px]">
            <BreadcrumbNavigation
                items={[
                    {
                        text: `${translations?.Xəbərlər}`,
                        path: '/news',
                    },
                ]}
            />
            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl mt-[24px]"
                    >
                        {translations?.Xəbərlər}
                    </h1>
                </section>
                <div className="flex justify-center">
                    <section className="w-fit grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-self-center items-center sm:grid-cols-2 gap-x-4 lg:gap-y-[52px] gap-y-8 lg:px-[100px] md:px-[60px] px-[30px] mt-[34px]">
                        {news?.data.map((item: NewsItem, i: number) => (
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
                                    <div className="flex flex-col mt-8 w-full text-xs tracking-normal leading-snug">
                                        <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                            <div>{item.date}</div>
                                            <div className="flex gap-2 justify-center items-center">
                                                <span>{item.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                <PaginationComponent
                    totalPages={news?.total_pages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </main>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query, req } = context;
    const currentPage = parseInt(
        Array.isArray(query.page) ? query.page[0] : query.page || '1',
        10
    );
    const language = req.cookies['accept-language'] || 'en';

    try {
        const [news, translations] = await Promise.all([
            getNews(language, currentPage),
            getTranslations(language),
        ]);

        return {
            props: {
                news,
                translations: translations?.data || {},
                currentPage,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                news: { data: [], total_pages: 1 },
                translations: { Xəbərlər: 'Xəbərlər' },
                currentPage,
            },
        };
    }
}
