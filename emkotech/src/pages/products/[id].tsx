import BreadcrumbNavigation from '@/components/BreadCamp';
import EssentialCamera from '@/components/EssentialCamera';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { ProductSwiper } from '@/components/ProductSwipper';
import { getProduct, getTranslations } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

export type SlideImage = {
    id: number;
    image: string;
};

export type Product = {
    id: number;
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

// .

export default function ProductDetails() {
    const params = useParams();
    const id = params?.id;
    console.log('id:::', id);
    const { language } = useLanguage();

    const { data: productData, isLoading: productLoading } =
        useQuery<ApiResponse>({
            queryKey: ['product', language, id],
            queryFn: () => getProduct(language, id),
        });

    const { data: translationsData } = useQuery<TranslationsData>({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });

    if (!id) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Header activeindex={1} />
            {productData?.product?.title && (
                <BreadcrumbNavigation
                    items={[
                        {
                            text: `${translationsData?.data?.Məhsullar}`,
                            path: '/products',
                        },
                        { text: productData?.product?.title, path: '' },
                    ]}
                />
            )}
            <main>
                <EssentialCamera data={productData?.product} />
                {productLoading ? (
                    <div className="mt-[120px] w-full h-[553px] lg:px-[100px] md:px-[60px] px-[30px] bg-gray-200 animate-pulse rounded-lg"></div>
                ) : (
                    <video
                        className="mt-[120px] w-full h-full object-cover lg:px-[100px] md:px-[60px] px-[30px] max-h-[553px]"
                        src={productData?.product?.video}
                        autoPlay
                        loop
                        muted
                    ></video>
                )}
                <section className=" mt-[100px]">
                    <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap  ">
                        <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                            {translationsData?.data?.PopulyarMəhsullar}
                        </h2>
                        <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                            <button className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90">
                                <p className="self-stretch my-auto text-nowrap ">
                                    {translationsData?.data?.HamısınaBax}
                                </p>
                                <img
                                    src="/svg/strelkablue.svg"
                                    alt="View all arrow"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </button>
                        </div>
                    </div>
                    <ProductSwiper data={productData?.similars || []} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
