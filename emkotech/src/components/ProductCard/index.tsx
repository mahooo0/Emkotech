import * as React from 'react';
import { ProductCardType } from '../ProductSwipper';
import { useRouter } from 'next/router';

type Props = {
    data: ProductCardType;
};

const ProductCard: React.FC<Props> = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col grow pb-7 w-full bg-white rounded-2xl shadow-[0px_0px_11px_rgba(167,167,167,0.12)] max-md:mt-6 relative max-w-[296px]">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/9363b586b8c27378b2d829afeffa5223affc8ab2c872fd300b810b192e09d538?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                className="object-contain w-full rounded-2xl aspect-[1.05]"
            />
            <div className="flex flex-col px-3.5 mt-8 w-full">
                <p className="text-lg font-medium text-black">
                    C182/C225/C296 4K 16CH(32CH Expandable) PoE Security System
                    + 4TB Hard Drive
                    <br />
                </p>
                <div className="flex gap-1.5 items-center self-start mt-8 whitespace-nowrap">
                    <p className="self-stretch my-auto text-2xl font-semibold text-black">
                        650.00$
                    </p>
                    <p className="self-stretch my-auto text-lg font-medium text-stone-300">
                        819.99
                    </p>
                </div>
                <button className="gap-2.5 self-center w-full flex p-2.5 mt-8 text-base text-white rounded-[18px] border border-solid bg-blue-600 bg-opacity-90 hover:bg-[#105ABA] duration-300 border-blue-600 border-opacity-90 max-md:mr-1 justify-center">
                    İndi Al
                </button>
                <button
                    className="gap-2.5 flex justify-center self-stretch p-2.5 mt-3.5 text-base text-blue-600 rounded-[18px] hover:bg-[#186FE0F0] hover:text-white duration-300 border border-indigo-500 border-solid max-md:mr-1"
                    onClick={() => router.push('products/is')}
                >
                    Ətraflı bax
                </button>
            </div>
            <div className=" absolute  w-[113px] h-fit top-[16px] left-[-8px] z-[998] ">
                <img src="/images/salebg.png" alt="" className="w-full" />
                <div className="w-full h-full px-[30px] py-[8px] absolute top-0 left-0 flex flex-row gap-1 justify-center">
                    <img src="/svg/fire.svg" className="h-4" alt="" />

                    <p className="text-white text-[12px] font-bold"> -60%</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
