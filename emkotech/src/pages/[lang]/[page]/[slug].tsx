import ProductDetails, { SlideImage } from '@/pages/products/[id]';
import ProjectsId, { Translation } from '@/pages/projects/[id]';
import { getNews, getNewsById, getPopularNews } from '@/services/Request';
import { ROUTES } from '@/services/CONSTANTS';
import { getProduct, getProjectById, getProjects } from '@/services/Request';
import { getTranslations } from '@/services/Request';
import { Project } from '@/types';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import NewsId, { NewsIdProps } from '@/pages/news/[id]';
export type Product = {
    id: number;
    slug: string;
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
}
export default function ID(props: Props) {
    const router = useRouter();

    const { lang, page } = router.query;
    const currentLang = Array.isArray(lang) ? lang[0] : lang;
    if (page === ROUTES.products[currentLang as string]) {
        return (
            <ProductDetails
                productData={props.productData}
                translationsData={props.translationsData}
            />
        );
    }
    if (page === ROUTES.project[currentLang as string]) {
        return (
            <ProjectsId
                project={props.project}
                translations={props.translations}
                relatedProjects={props.relatedProjects}

                // productData={props.productData}
                // translationsData={props.translationsData}
            />
        );
    }
    if (page === ROUTES.news[currentLang as string]) {
        return (
            <NewsId
                {...props.newsProps}

                // productData={props.productData}
                // translationsData={props.translationsData}
            />
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
            const [productData, translationsData] = await Promise.all([
                getProduct(lang, id), // Fetch product details using language and id
                getTranslations(lang), // Fetch translations using language
            ]);

            return {
                props: {
                    productData,
                    translationsData,
                },
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                props: {
                    productData: null,
                    translationsData: null,
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
            const relatedProjects = relatedProjectsResponse.data.filter(
                (p: Project) => p.id !== Number(id)
            );

            return {
                props: {
                    project: projectResponse.data || null,
                    translations: translationsResponse.data || {},
                    relatedProjects: relatedProjects || [],
                },
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                props: {
                    project: null,
                    translations: {},
                    relatedProjects: [],
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
                },
            };
        }
    }

    // If the page does not match the expected route
    return {
        notFound: true,
    };
}
