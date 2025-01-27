import {
    GetDiscountedProduct,
    GetPopulyarProduct,
    getProductCategories,
    getStatistics,
    getTopImages,
    getTopMeta,
    getTranslations,
} from '@/services/Request';
import { getPartners } from '@/services/Request';
import { getBottomBanner } from '@/services/Request';
import { getCustomers } from '@/services/Request';
import { getProducts } from '@/services/Request';
import { getTopBanner } from '@/services/Request';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { Product } from '../products/[id]';
import { TranslationsData } from '../contact';

import Home from '..';
import { MetaItem, SiteAssets } from '@/types';
import { Category } from '@/components/HomeCategory';
interface Statistic {
    statistic: string;
    value: string;
}

interface Customer {
    id: number;
    name: string;
    description: string;
    icon: string;
}
interface TopBannerData {
    data: {
        title: string;
        description: string;
        button_text: string;
        video: string;
    };
}

// interface ProductCategory {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
// }
interface ButtonBannerData {
    data: {
        title: string;
        description: string;
        button_text: string;
        image: string;
    };
}
interface Partner {
    name: string;
    url: string;
    icon: string;
}

interface PartnerData {
    data: Partner[];
}

interface HomePageProps {
    topBannerData: TopBannerData;
    statisticsData: { data: Statistic[]; projects: [] };
    productsData: { data: Product[] };
    customersData: { data: Customer[] };
    bottomBannerData: ButtonBannerData;
    partnersData: PartnerData;
    productCategoriesData: { data: Category[] };
    translationsData: TranslationsData;
    Meta: MetaItem[];
    Logo: SiteAssets;
    DiscountedProducts: Product[];
    PopulyarProduct: Product[];
}
export default function HomebyLang(props: HomePageProps) {
    // const router = useRouter();
    // const { lang } = router.query;
    // console.log(topBannerData);
    return <Home {...props} />;
}
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const lang = context?.params?.lang || 'az';

//     try {
//         const [
//             topBannerData,
//             statisticsData,
//             productsData,
//             customersData,
//             bottomBannerData,
//             partnersData,
//             productCategoriesData,
//             translationsData,
//             Meta,
//             Logo,
//             DiscountedProducts,
//             PopulyarProduct,
//         ] = await Promise.all([
//             getTopBanner(lang),
//             getStatistics(lang),
//             getProducts(lang),
//             getCustomers(lang),
//             getBottomBanner(lang),
//             getPartners(lang),
//             getProductCategories(lang),
//             getTranslations(lang),
//             getTopMeta(lang),
//             getTopImages(lang),
//             GetDiscountedProduct(lang),
//             GetPopulyarProduct(lang),
//         ]);

//         return {
//             props: {
//                 topBannerData,
//                 statisticsData,
//                 productsData,
//                 customersData,
//                 bottomBannerData,
//                 partnersData,
//                 productCategoriesData,
//                 translationsData,
//                 Meta,
//                 Logo,
//                 DiscountedProducts,
//                 PopulyarProduct,
//             },
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             props: {
//                 topBannerData: null,
//                 statisticsData: [],
//                 productsData: [],
//                 customersData: [],
//                 bottomBannerData: null,
//                 partnersData: null,
//                 productCategoriesData: [],
//                 translationsData: null,
//                 Meta: [],
//                 Logo: {},
//             },
//         };
//     }
// }

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const lang = context?.params?.lang || 'az';

    try {
        console.log(`Fetching data for language: ${lang}`);

        // Step 1: Fetch top banner data
        const topBannerData = await getTopBanner(lang);
        console.log('Fetched topBannerData');

        // Step 2: Fetch statistics data
        const statisticsData = await getStatistics(lang);
        console.log('Fetched statisticsData');

        // Step 3: Fetch products data
        const productsData = await getProducts(lang);
        console.log('Fetched productsData');

        // Step 4: Fetch customers data
        const customersData = await getCustomers(lang);
        console.log('Fetched customersData');

        // Step 5: Fetch bottom banner data
        const bottomBannerData = await getBottomBanner(lang);
        console.log('Fetched bottomBannerData');

        // Step 6: Fetch partners data
        const partnersData = await getPartners(lang);
        console.log('Fetched partnersData');

        // Step 7: Fetch product categories data
        const productCategoriesData = await getProductCategories(lang);
        console.log('Fetched productCategoriesData');

        // Step 8: Fetch translations data
        const translationsData = await getTranslations(lang);
        console.log('Fetched translationsData');

        // Step 9: Fetch meta data
        const Meta = await getTopMeta(lang);
        console.log('Fetched Meta');

        // Step 10: Fetch logo images
        const Logo = await getTopImages(lang);
        console.log('Fetched Logo');

        // Step 11: Fetch discounted products
        const DiscountedProducts = await GetDiscountedProduct(lang);
        console.log('Fetched DiscountedProducts');

        // Step 12: Fetch popular products
        const PopulyarProduct = await GetPopulyarProduct(lang);
        console.log('Fetched PopulyarProduct');

        console.log('All data fetched successfully.');

        return {
            props: {
                topBannerData: topBannerData || null,
                statisticsData: statisticsData || [],
                productsData: productsData || [],
                customersData: customersData || [],
                bottomBannerData: bottomBannerData || null,
                partnersData: partnersData || null,
                productCategoriesData: productCategoriesData || [],
                translationsData: translationsData || null,
                Meta: Meta || [],
                Logo: Logo || {},
                DiscountedProducts: DiscountedProducts || [],
                PopulyarProduct: PopulyarProduct || [],
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                topBannerData: null,
                statisticsData: [],
                productsData: [],
                customersData: [],
                bottomBannerData: null,
                partnersData: null,
                productCategoriesData: [],
                translationsData: null,
                Meta: [],
                Logo: {},
                DiscountedProducts: [],
                PopulyarProduct: [],
            },
        };
    }
}
