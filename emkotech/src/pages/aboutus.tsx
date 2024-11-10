import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function aboutus() {
    return (
        <div>
            <Header activeindex={2} />
            <main>
                <BreadcrumbNavigation />
                <section className="flex flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] mt-6">
                    <div className="z-10 mt-0 max-md:-mr-2 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <h1 className="text-5xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                                    Meet the next generation of Emkotech cameras
                                </h1>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <p className="mt-4 text-lg text-black max-md:mt-10 max-md:max-w-full">
                                    Discover how organizations around the world
                                    leverage evolving features and unlock
                                    actionable insights that increase security
                                    where it matters most.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 w-full max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4d4bfadc263c392873452cf925456d8e02f3ee7361a651cc9e67070c577808c6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain w-full rounded-2xl aspect-[2.08] max-md:max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/078304ab77ee4b8b40165a396a46b0319238d6f9a37ced28cce3ae66735fe360?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain mt-6 w-full rounded-2xl aspect-[2.08] max-md:max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
                    <h2 className="self-center text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="text-amber-300 ">Highlights</span>
                        <span className=""> our company’s</span>
                    </h2>
                    <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4fa1bb1a7b1edb0e609bb9695236df338ecb803653224807ec30f4723081443e?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain aspect-square w-[54px]"
                                    />
                                    <div className="flex flex-col mt-5 w-full">
                                        <div className="text-lg font-semibold">
                                            Innovative
                                        </div>
                                        <div className="mt-1.5 text-sm">
                                            Constantly pushing tg the bounaries
                                            of what’s possible to stay ahead the
                                            technological curve
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/57323eb9349c3b653b0c9d69778341374b4a6b2713ae186523db48867d946f9d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain aspect-square w-[54px]"
                                    />
                                    <div className="flex flex-col mt-5 w-full">
                                        <div className="text-lg font-semibold">
                                            Innovative
                                        </div>
                                        <div className="mt-1.5 text-sm">
                                            Constantly pushing tg the bounaries
                                            of what’s possible to stay ahead the
                                            technological curve
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/125ca4489231c52a5b11953d383cf4dd3d23435cb66bc93c0ce4c639c5ea5751?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain aspect-square w-[54px]"
                                    />
                                    <div className="flex flex-col mt-5 w-full">
                                        <div className="text-lg font-semibold">
                                            Innovative
                                        </div>
                                        <div className="mt-1.5 text-sm">
                                            Constantly pushing tg the bounaries
                                            of what’s possible to stay ahead the
                                            technological curve
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/125ca4489231c52a5b11953d383cf4dd3d23435cb66bc93c0ce4c639c5ea5751?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain aspect-square w-[54px]"
                                    />
                                    <div className="flex flex-col mt-5 w-full">
                                        <div className="text-lg font-semibold">
                                            Innovative
                                        </div>
                                        <div className="mt-1.5 text-sm">
                                            Constantly pushing tg the bounaries
                                            of what’s possible to stay ahead the
                                            technological curve
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
