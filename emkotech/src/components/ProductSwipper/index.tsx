import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ProductCard from '../ProductCard';
import { Swiper as SwiperType } from 'swiper';
import { Product } from '@/pages/products/[id]';

export const ProductSwiper = ({ data }: { data: Product[] }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div>
            <Swiper
                className="lg:!mt-[60px] !mt-[30px] lg:!mx-[90px] md:!mx-[60px] !mx-[30px] !px-[10px] !flex !justify-center"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={24}
                breakpoints={{
                    268: {
                        slidesPerView: 1,
                    },
                    568: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1250: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data?.map((item: Product, i: number) => (
                    <SwiperSlide
                        key={i}
                        className="!py-[10px] !flex !justify-center "
                    >
                        <ProductCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex gap-4 mt-4 justify-start lg:!px-[100px] md:!px-[60px] !px-[30px] ">
                <button
                    style={{ boxShadow: '0px 0px 11px 0px #D2D6411F' }}
                    className="hover:bg-white  w-[42px] h-[42px] rounded-full flex justify-center items-center stroke-[#BDBDC1] hover:stroke-[#D2D641]"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.25 12H3.75"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.5 5.25L3.75 12L10.5 18.75"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <button
                    style={{ boxShadow: '0px 0px 11px 0px #D2D6411F' }}
                    className="hover:bg-white text-white w-[42px] h-[42px] rounded-full flex justify-center items-center stroke-[#BDBDC1] hover:stroke-[#D2D641]"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.75 12H20.25"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M13.5 5.25L20.25 12L13.5 18.75"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
