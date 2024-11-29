import React from 'react';
import { useRouter } from 'next/router';

export default function NewsCard({ data }: { data: any }) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/projects/${data?.id}`)}
            className="cursor-pointer"
        >
            <div className="flex overflow-hidden flex-col justify-center bg-white rounded-2xl max-w-[288px] max-h-[380px]">
                <div className="flex overflow-hidden flex-col w-full">
                    <img
                        loading="lazy"
                        src={data?.image}
                        className="object-cover w-full aspect-[1.38] hover:scale-110 duration-300"
                    />
                </div>
                <div className="flex flex-col justify-center p-6 w-full bg-white text-zinc-800">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full">
                            <div className="text-xl font-medium leading-snug">
                                {data?.title}
                            </div>
                            <div className="mt-2 text-sm tracking-wide leading-5 text-[#333333]">
                                {data?.description?.slice(0, 40)}...
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-full text-xs tracking-normal leading-snug">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fc4fa5e45336e80ee82c9e821d94df4e3e27afda654d7ada6355603f32e5f7b5?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            className="object-contain w-full aspect-[250]"
                        />
                        <div className="flex gap-10 justify-between items-center mt-4 w-full">
                            <div className="gap-2 self-stretch my-auto text-[#333333]">
                                March 01, 2021
                            </div>
                            <div className="flex gap-2 justify-center items-center self-stretch my-auto whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/773a2b2554008121fab7182cf9957a2babbd8eb738963406bc2d4d2955deddfe?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                                />
                                <div className="self-stretch my-auto text-[#333333]">
                                    440
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
