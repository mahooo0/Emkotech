import BreadcrumbNavigation from '@/components/BreadCamp';
import EssentialCamera from '@/components/EssentialCamera';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { ProductSwiper } from '@/components/ProductSwipper';
import { getProduct } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

export default function id() {
    const router = useRouter();
    const { id } = router.query;
    const { language } = useLanguage();

    const {
        data: productData,
        isLoading: productLoading,
        isError: productError,
    } = useQuery({
        queryKey: ['product', id, language],
        queryFn: () => getProduct(language, id),
    });
    console.log(productData);
    return (
        <div>
            <Header activeindex={1} />
            <BreadcrumbNavigation />
            <main>
                <EssentialCamera data={productData?.data} />
                {productLoading ? (
                    <div className="mt-[120px] w-full h-[553px] lg:px-[100px] md:px-[60px] px-[30px] bg-gray-200 animate-pulse rounded-lg"></div>
                ) : (
                    <video
                        className="mt-[120px] w-full h-full object-cover lg:px-[100px] md:px-[60px] px-[30px] max-h-[553px]"
                        src={productData.data.video}
                        autoPlay
                        loop
                        muted
                    ></video>
                )}
                <section className=" mt-[100px]">
                    <div className="w-full flex  lg:justify-center md:justify-center justify-start flex-wrap  ">
                        <h2 className="text-5xl text-black max-md:text-4xl text-nowrap">
                            Populyar Məhsullar
                        </h2>
                        <div className=" lg:absolute md:absolute  static lg:right-[100px] md:right-[60px] right-[30px] flex  h-[48px] items-end">
                            <button className="flex gap-2.5 justify-center items-center self-end text-base font-medium rounded-[35px] text-blue-600 text-opacity-90">
                                <p className="self-stretch my-auto text-nowrap ">
                                    Hamısına bax
                                </p>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b0bcb315d4534a4ad48392d7c96985a79c21ac585f3284b9a6268cac196f65a9?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </button>
                        </div>
                    </div>
                    {/* <ProductSwiper /> */}
                </section>
            </main>
            <Footer />
        </div>
    );
}
