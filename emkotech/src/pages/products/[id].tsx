import BreadcrumbNavigation from '@/components/BreadCamp';
import EssentialCamera from '@/components/EssentialCamera';

import { ProductSwiper } from '@/components/ProductSwipper';
import { getProduct, getTranslations } from '@/services/Request';
import { parse } from 'cookie';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ROUTES } from '@/services/CONSTANTS';

export type SlideImage = {
    id: number;
    image: string;
};

export type Product = {
    slug: string;
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

// Server-side data fetching using getServerSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = parse(context.req.headers.cookie || '');
    const lang = cookies['accept-language'] || 'en'; // Get language from cookies or default to 'en'
    const id = context?.params?.id; // Get product ID from URL

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

interface ProductDetailsProps {
    productData: ApiResponse | null;
    translationsData: TranslationsData | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    productData,
    translationsData,
}) => {
    const router = useRouter();
    const { lang } = router.query;
    const language = lang ? lang?.toString() : 'az';
    if (!productData?.product?.title || !translationsData) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mt-[94px]">
            {productData?.product?.title && (
                <BreadcrumbNavigation
                    items={[
                        {
                            text: `${translationsData?.data?.Məhsullar}`,
                            path: `/${language}/${ROUTES.products[language]}`,
                        },
                        { text: productData?.product?.title, path: '' },
                    ]}
                />
            )}
            <main>
                <EssentialCamera data={productData?.product} />
                {productData.product.video ? (
                    <video
                        className="mt-[120px] w-full h-full object-cover lg:px-[100px] md:px-[60px] px-[30px] max-h-[553px]"
                        src={productData?.product?.video}
                        autoPlay
                        loop
                        muted
                    ></video>
                ) : (
                    <div className="mt-[120px] w-full h-[553px] lg:px-[100px] md:px-[60px] px-[30px] bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <section className="mt-[100px]">
                    <div className="w-full flex lg:justify-center md:justify-center justify-start flex-wrap px-[20px]">
                        <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                            {translationsData?.data?.PopulyarMəhsullar}
                        </h2>
                        <div className="lg:absolute md:absolute static lg:right-[100px] md:right-[60px] right-[30px] flex h-[48px] items-end">
                            <Link href="/products">
                                <button className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90">
                                    <p className="self-stretch my-auto text-nowrap ">
                                        {translationsData?.data?.HamısınaBax}
                                    </p>
                                    <Image
                                        src="/svg/strelkablue.svg"
                                        alt="View all arrow"
                                        width={24}
                                        height={24}
                                        className="object-contain shrink-0 self-stretch my-auto"
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <ProductSwiper data={productData?.similars || []} />
                </section>
            </main>
        </div>
    );
};

export default ProductDetails;
