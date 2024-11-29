import React, { useState } from 'react';
import { useLanguage } from '../Hoc/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { getTranslations } from '@/services/Request';

interface SlideImage {
    id: string;
    image: string;
}

export interface ProductData {
    title: string;
    category: string;
    price: number;
    discounted_price: number;
    discount: boolean;
    description: string;
    slide_images: SlideImage[];
}

const EssentialCamera: React.FC<{ data: any }> = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const { language } = useLanguage();
    useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });
    console.log(data);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    const handleReserve = () => {
        console.log('Reserve button clicked');
    };

    return (
        <div className="rounded-none mt-6">
            <div className="flex gap-5 max-md:flex-col">
                <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div
                        className="flex overflow-hidden flex-col grow items-start px-12 pt-48 pb-28 rounded-none pointer-events-auto max-md:px-5 max-md:py-24 max-md:mt-6 max-md:max-w-full "
                        style={{
                            backgroundImage: `url('${data?.slide_images[selectedImage].image}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {data?.slide_images.map(
                            (item: SlideImage, index: number) => (
                                <img
                                    key={index}
                                    src={item.image}
                                    alt={item.id}
                                    className={`object-cover rounded-2xl aspect-square w-[84px] cursor-pointer ${
                                        index > 0 ? 'mt-5' : ''
                                    } ${
                                        selectedImage === index
                                            ? 'border-2 border-blue-600'
                                            : ''
                                    }`}
                                    onClick={() => handleImageClick(index)}
                                />
                            )
                        )}
                    </div>
                </section>
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full lg:pr-[100px] pr-0">
                    <div className="flex flex-col items-start mt-10 w-full max-md:max-w-full">
                        <h1 className="text-4xl text-black">{data?.title}</h1>
                        <h2 className="mt-2.5 text-xl text-black">
                            {data?.category}
                        </h2>
                        <p className="mt-2 text-base text-neutral-400">
                            altcategory{' '}
                        </p>
                        {data?.discount ? (
                            <span className="gap-2.5 self-stretch py-1 pr-2 pl-2 mt-5 text-xs text-white bg-[#D2D641] min-h-[22px] rounded-[41px] w-fit">
                                sale{' '}
                                {Math.floor(
                                    ((data.price - data.discounted_price) /
                                        data.price) *
                                        100
                                )}
                                %
                            </span>
                        ) : (
                            <></>
                        )}
                        <div className="flex gap-1.5 mt-1.5 whitespace-nowrap items-end justify-end">
                            <span className="grow text-3xl text-blue-600">
                                {data?.price}
                            </span>
                            <span className="  text-base text-neutral-400 line-through">
                                {data?.discounted_price}
                            </span>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data?.description || '',
                            }}
                            className="self-stretch mt-9 text-base text-neutral-800 max-md:mr-1 max-md:max-w-full"
                        ></div>
                    </div>
                    <button
                        onClick={handleReserve}
                        className="gap-2.5 self-stretch px-2.5 py-4 mt-16 text-lg font-medium text-white whitespace-nowrap rounded-2xl bg-blue-600 bg-opacity-90 min-h-[54px] max-md:mt-10 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                    >
                        Reserve
                    </button>
                </section>
            </div>
        </div>
    );
};

export default EssentialCamera;
