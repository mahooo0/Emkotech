import BreadcrumbNavigation from '@/components/BreadCamp';
import EssentialCamera from '@/components/EssentialCamera';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { ProductSwiper } from '@/components/ProductSwipper';
import { useRouter } from 'next/router';
import React from 'react';

export default function id() {
    const router = useRouter();
    return (
        <div>
            <Header activeindex={1} />
            <BreadcrumbNavigation />
            <main>
                <EssentialCamera />
                <video
                    className="mt-[120px] w-full h-full object-cover lg:px-[100px] md:px-[60px] px-[30px] max-h-[553px]"
                    src="https://s3-figma-videos-production-sig.figma.com/video/1213020028553192391/TEAM/24fe/37d5/-68ca-4f7c-b9c4-18adc1ca0a2f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mgjar1dyiryTLvUUhnKmqBo0eFfoWqx7nggVa4iO8x5qe03aM2T3bqJVK~-cQoaOA2WQBvllTjsh---jAMr6l7dlOg2WQzs8XyEviC-bEgKQwP-cKw80ADG5cCNBi0dl9ED1Pv8jwjYIp6xGdxE5BQh~rxZ6HatCqdrjIsQvq538KMG9VLC1EruP-QfS90ARwwzRmViuPnxeqpWMSKqfKqnFkS~VcYwrhjxewBQjZ-SpwaQiynLDBqZgRNAS9wrxwZEfsK8X8xqfI1AJpDwUBkeN5Hlos-BTn3ZaY-OIFjQ3Uc7R0Bopj7wxOpOSUB9W4gXlOkelYmG9cSXBprvLYA__"
                    autoPlay
                    loop
                    muted
                ></video>
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
                    <ProductSwiper />
                </section>
            </main>
            <Footer />
        </div>
    );
}
