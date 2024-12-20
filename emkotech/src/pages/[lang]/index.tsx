import { getStatistics, getTranslations } from '@/services/Request';
import { getProductCategoriesHOME } from '@/services/Request';
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

interface ProductCategory {
    id: number;
    title: string;
    description: string;
    image: string;
}
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
    productCategoriesData: { data: ProductCategory[] };
    translationsData: TranslationsData;
}
export default function HomebyLang(props: HomePageProps) {
    // const router = useRouter();
    // const { lang } = router.query;
    // console.log(topBannerData);
    return <Home {...props} />;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const lang = context?.params?.lang;

    try {
        const [
            topBannerData,
            statisticsData,
            productsData,
            customersData,
            bottomBannerData,
            partnersData,
            productCategoriesData,
            translationsData,
        ] = await Promise.all([
            getTopBanner(lang),
            getStatistics(lang),
            getProducts(lang),
            getCustomers(lang),
            getBottomBanner(lang),
            getPartners(lang),
            getProductCategoriesHOME(lang),
            getTranslations(lang),
        ]);

        return {
            props: {
                topBannerData,
                statisticsData,
                productsData,
                customersData,
                bottomBannerData,
                partnersData,
                productCategoriesData,
                translationsData,
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
            },
        };
    }
}
