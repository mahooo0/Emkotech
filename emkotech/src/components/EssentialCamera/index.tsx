import React, { useState } from 'react';

interface Image {
    src: string;
    alt: string;
}

interface Feature {
    title: string;
    items: string[];
}

const EssentialCamera: React.FC<{ data: any | undefined }> = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    console.log(data);
    // const images: Image[] = [
    //     {
    //         src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/82c6f641143cba90a2d96c4d4cab7640221471915820c782e1738861371e9be0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //         alt: 'Essential 2nd Gen Camera - Front View',
    //     },
    //     {
    //         src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/96466a773e83422c9c20901ae8c8d633fc6e8c1cfa4b846f679efa87ce3c0136?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //         alt: 'Essential 2nd Gen Camera - Side View',
    //     },
    //     {
    //         src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5120d00feec7fa7d06a59cab9d117c9fe8ce6c190fa23d677b5accdfd00b6575?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //         alt: 'Essential 2nd Gen Camera - Back View',
    //     },
    //     {
    //         src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/c1273deeb34d85c98e381d0c7178a29ecd9f790ceb71cc2204fa1af6a53adfd5?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    //         alt: 'Essential 2nd Gen Camera - Mounted View',
    //     },
    // ];

    const features: Feature[] = [
        {
            title: 'Camera Features',
            items: [
                'Available in 2K or HD',
                '130° Field of View',
                'Integrated Spotlight',
                '2-Way Audio',
            ],
        },
        {
            title: 'Additional Features',
            items: [
                'Indoor & Outdoor use',
                'Battery Powered',
                'Color Night Vision',
                'Arlo Secure Plan Trial included',
            ],
        },
    ];

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
                        {data?.slide_images.map((item: any, index: number) => (
                            <img
                                key={index}
                                src={item.image}
                                alt={item.id}
                                className={`object-contain rounded-2xl aspect-square w-[84px] cursor-pointer ${
                                    index > 0 ? 'mt-5' : ''
                                } ${
                                    selectedImage === index
                                        ? 'border-2 border-blue-600'
                                        : ''
                                }`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                </section>
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full lg:pr-[100px] pr-0">
                    <div className="flex flex-col items-start mt-10 w-full max-md:max-w-full">
                        <h1 className="text-4xl text-black">{data?.title}</h1>
                        <h2 className="mt-2.5 text-xl text-black">
                            {data?.category}
                        </h2>
                        <p className="mt-2 text-base text-neutral-400">
                            Item No. VMC3050-100NAS
                        </p>
                        {data?.discount ? (
                            <span className="gap-2.5 self-stretch py-1 pr-2 pl-2 mt-5 text-xs text-white bg-[#D2D641] min-h-[22px] rounded-[41px] w-fit">
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
                        {/* <span className="gap-2.5 self-stretch py-1 pr-2 pl-2 mt-5 text-xs text-white bg-[#D2D641] min-h-[22px] rounded-[41px] w-fit">
                            {Math.round(
                                (data?.price / data?.discount_price) * 100
                            )}
                            %
                        </span> */}
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
                                __html: data?.description,
                            }}
                            className="self-stretch mt-9 text-base text-neutral-800 max-md:mr-1 max-md:max-w-full"
                        ></div>
                    </div>
                    <div className="mt-11 max-w-full w-[521px] max-md:mt-10 ml-5">
                        <div className="flex gap-5 max-md:flex-col">
                            {features.map((feature, columnIndex) => (
                                <div
                                    key={columnIndex}
                                    className={`flex flex-col ${
                                        columnIndex === 1
                                            ? 'ml-5 w-[58%]'
                                            : 'w-[42%]'
                                    } max-md:ml-0 max-md:w-full`}
                                >
                                    <ul className="text-base list-disc font-medium leading-8 text-neutral-800 max-md:mt-10">
                                        {feature.items.map((item, index) => (
                                            <li
                                                className="decoration-dotted"
                                                key={index}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
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
