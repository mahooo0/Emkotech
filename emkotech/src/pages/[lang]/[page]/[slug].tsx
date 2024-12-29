import ProductDetails, { SlideImage } from '@/pages/products/[id]';
import ProjectsId, { Translation } from '@/pages/projects/[id]';
import {
    getNews,
    getNewsById,
    getPopularNews,
    getTopImages,
} from '@/services/Request';
import { ROUTES } from '@/services/CONSTANTS';
import { getProduct, getProjectById, getProjects } from '@/services/Request';
import { getTranslations } from '@/services/Request';
import { Project, SiteAssets } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import NewsId, { NewsIdProps } from '@/pages/news/[id]';
import Head from 'next/head';
export type Product = {
    id: number;
    slug: { az: string; en: string; ru: string };
    subcategory_id: number;
    subcategory_name: string;
    category_id: number;
    category_name: string;
    title: string;
    description: string; // Contains HTML content
    image: string; // URL
    video: string; // URL
    price: number;
    discount: number;
    discounted_price: number;
    item_number: string;
    slide_images: SlideImage[];
};

type SimilarProduct = Product;

type ApiResponse = {
    product: Product;
    similars: SimilarProduct[];
};
interface TranslationsData {
    data: {
        Məhsullar: string;
        PopulyarMəhsullar: string;
        HamısınaBax: string;
    };
}
interface Props {
    productData: ApiResponse | null;
    translationsData: TranslationsData | null;
    project: Project;
    translations: Translation;
    relatedProjects: Project[];
    newsProps: NewsIdProps;
    Logo: SiteAssets;
}
export default function ID(props: Props) {
    const router = useRouter();

    const { lang, page } = router.query;
    const currentLang = Array.isArray(lang) ? lang[0] : lang;
    if (page === ROUTES.products[currentLang as string]) {
        return (
            <>
                <Head>
                    <link
                        rel="icon"
                        href={props.Logo.favicon}
                        type="image/webp"
                    />
                    <link rel="apple-touch-icon" href={props.Logo.favicon} />
                </Head>
                <ProductDetails
                    productData={props.productData}
                    translationsData={props.translationsData}
                />
            </>
        );
    }
    if (page === ROUTES.project[currentLang as string]) {
        return (
            <>
                <Head>
                    <link
                        rel="icon"
                        href={props.Logo.favicon}
                        type="image/webp"
                    />
                    <link rel="apple-touch-icon" href={props.Logo.favicon} />
                </Head>
                <ProjectsId
                    project={props.project}
                    translations={props.translations}
                    relatedProjects={props.relatedProjects}
                />
            </>
        );
    }
    if (page === ROUTES.news[currentLang as string]) {
        return (
            <>
                <Head>
                    <link
                        rel="icon"
                        href={props.Logo?.favicon}
                        type="image/webp"
                    />
                    <link rel="apple-touch-icon" href={props.Logo?.favicon} />
                </Head>
                <NewsId {...props.newsProps} />
            </>
        );
    }
    return <div>ID</div>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page, lang } = context.params as { page: string; lang: string };
    // const id = context?.query?.id; // Get product ID from URL
    const { id } = context.query; // Get the query parameter ?id=10

    if (page === ROUTES.products[lang]) {
        try {
            const [productData, translationsData, Logo] = await Promise.all([
                getProduct(lang, id), // Fetch product details using language and id
                getTranslations(lang), // Fetch translations using language
                getTopImages(lang),
            ]);

            return {
                props: {
                    productData,
                    translationsData,
                    Logo,
                },
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                props: {
                    productData: null,
                    translationsData: null,
                    Logo: {},
                },
            };
        }
    }
    if (page === ROUTES.project[lang]) {
        try {
            const [projectResponse, translationsResponse] = await Promise.all([
                getProjectById(lang, id),
                getTranslations(lang),
            ]);

            // Fetch related projects if needed
            const relatedProjectsResponse = await getProjects(lang); // Assuming `getProjects` fetches all projects
            const Logo = await getTopImages(lang);

            const relatedProjects = relatedProjectsResponse.data.filter(
                (p: Project) => p.id !== Number(id)
            );

            return {
                props: {
                    project: projectResponse.data || null,
                    translations: translationsResponse.data || {},
                    relatedProjects: relatedProjects || [],
                    Logo,
                },
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                props: {
                    project: null,
                    translations: {},
                    relatedProjects: [],
                    Logo: {},
                },
            };
        }
    }
    if (page === ROUTES.news[lang]) {
        try {
            const [newsData, newsList, popularData, translationsData] =
                await Promise.all([
                    getNewsById(lang, id),
                    getNews(lang, 1),
                    getPopularNews(lang),
                    getTranslations(lang),
                ]);
            const Logo = await getTopImages(lang);

            return {
                props: {
                    newsProps: {
                        newsData: newsData.data || null,
                        newsList: newsList.data || [],
                        popularData: popularData.data || [],
                        translationsData: translationsData.data || {},
                        id,
                        nodata: false,
                        error: '',
                        Logo,
                    },
                },
            };
        } catch (error) {
            console.error(error);

            // Default values for error scenarios
            return {
                props: {
                    newsData: null,
                    newsList: [],
                    popularData: [],
                    translationsData: {},
                    id,
                    nodata: true,
                    error: `${error}`,
                    Logo: {},
                },
            };
        }
    }

    // If the page does not match the expected route
    return {
        notFound: true,
    };
}
