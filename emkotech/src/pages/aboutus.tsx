import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { getAbout, getAboutBanner } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function aboutus() {
    const { language } = useLanguage();
    const {
        data: aboutData,
        isLoading: aboutLoading,
        isError: aboutError,
    } = useQuery({
        queryKey: ['about', language],
        queryFn: () => getAbout(language),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
    const {
        data: aboutBannerData,
        isLoading: aboutBannerLoading,
        isError: aboutBannerError,
    } = useQuery({
        queryKey: ['about-banner', language],
        queryFn: () => getAboutBanner(language),
    });
    console.log(aboutData);
    if (aboutError || aboutBannerError) return <p>error</p>;
    return (
        <div>
            <Header activeindex={2} />
            <main>
                <BreadcrumbNavigation />
                <section className="flex flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] mt-6">
                    {aboutLoading ? (
                        <div className="animate-pulse">
                            <div className="flex gap-5 max-md:flex-col items-center">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="h-16 bg-gray-200 rounded w-3/4"></div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="mt-4 h-24 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            <div className="mt-5 w-full max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="bg-gray-200 rounded-2xl aspect-square w-full"></div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                            <div className="bg-gray-200 rounded-2xl aspect-[2.08] w-full"></div>
                                            <div className="bg-gray-200 rounded-2xl aspect-[2.08] w-full mt-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="z-10 mt-0 max-md:-mr-2 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col items-center">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
                                        <h1 className="text-5xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl leading-[72px]">
                                            {aboutData?.data[0].title}
                                        </h1>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: aboutData?.data[0]
                                                    .description,
                                            }}
                                            className="mt-4 text-lg text-black max-md:mt-10 max-md:max-w-full leading-6"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 w-full max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={aboutData?.data[0].image}
                                            className="object-contain w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                            <img
                                                loading="lazy"
                                                src={aboutData?.data[0].image2}
                                                className="object-contain w-full rounded-2xl aspect-[2.08] max-md:max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src={aboutData?.data[0].image3}
                                                className="object-contain mt-6 w-full rounded-2xl aspect-[2.08] max-md:max-w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
                <section className="flex flex-col rounded-2xl lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
                    <h2 className="self-center text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="text-[#D2D641] ">Highlights</span>
                        <span className=""> our company’s</span>
                    </h2>
                    <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            {aboutBannerLoading
                                ? Array(4)
                                      .fill(0)
                                      .map((_, index) => (
                                          <div
                                              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                                              key={index}
                                          >
                                              <div className="flex flex-col grow p-5 w-full bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                                  <div className="w-[54px] h-[54px] bg-gray-300 rounded-lg animate-pulse" />
                                                  <div className="flex flex-col mt-5 w-full">
                                                      <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse" />
                                                      <div className="mt-1.5 h-16 bg-gray-300 rounded w-full animate-pulse" />
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                : aboutBannerData?.data.map((item: any) => (
                                      <div
                                          className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                                          key={item.id}
                                      >
                                          <div className="flex flex-col grow p-5 w-full text-black bg-indigo-50 rounded-2xl border border-blue-200 border-solid max-md:mt-6">
                                              <img
                                                  loading="lazy"
                                                  src={item.image}
                                                  className="object-contain aspect-square w-[54px]"
                                              />
                                              <div className="flex flex-col mt-5 w-full">
                                                  <div className="text-lg font-semibold">
                                                      {item.title}
                                                  </div>
                                                  <div
                                                      className="mt-1.5 text-sm"
                                                      dangerouslySetInnerHTML={{
                                                          __html: item.description,
                                                      }}
                                                  ></div>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                            {/* <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
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
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
