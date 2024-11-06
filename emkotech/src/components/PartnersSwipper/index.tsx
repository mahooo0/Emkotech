import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';

const ProductSlider: React.FC = () => {
    return (
        <Swiper
            className="!py-[10px] !mt-[32px]"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={'auto'}
            freeMode={true}
            autoplay={{
                delay: 0, // Continuous scrolling
            }}
            speed={2500} // Set a longer speed for smoother transitions
            loop={true}
            // onSlideChange={() => {
            //     if (Swiper.autoplay) {
            //         Swiper.autoplay.start();
            //     }
            // }}
        >
            {/* Duplicate slides for a seamless loop effect */}
            {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index} className="!w-fit">
                    <div className="flex flex-col rounded-none max-w-[184px]">
                        <div className="flex flex-col pb-2.5 w-full rounded-2xl bg-white bg-opacity-60 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
                            <div className="flex flex-col justify-center px-9 py-6 w-full rounded-2xl border-b bg-white bg-opacity-80 border-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b9f4ff47ebb40b71efa14cf2b5c866a50d244d0275f433b457fe8aa18b65c243?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain aspect-[1.86] w-[102px]"
                                />
                            </div>
                            <span className="self-center mt-2.5 text-sm text-center text-black text-opacity-80">
                                www.accenture.com
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSlider;
