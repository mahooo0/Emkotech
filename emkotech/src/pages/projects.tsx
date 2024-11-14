import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { ProjectSwiper } from '@/components/ProjectSwipper';
import React from 'react';

export default function projects() {
    return (
        <div>
            <Header activeindex={3} />
            <main>
                <BreadcrumbNavigation />
                <section className="flex flex-col text-black lg:px-[100px] md:px-[60px] px-[30px] ">
                    <div className="flex flex-col rounded-2xl mt-[24px]">
                        <h2 className="self-center text-5xl text-black max-md:text-4xl">
                            Layihənin adı
                        </h2>
                        <div className="flex flex-col rounded-2xl">
                            <div className="mt-6 max-md:-mr-0.5 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/674b970a14c00ac1ef261c266008d9afdcce871c22f33693d7db8cc6fc110f57?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain w-full rounded-2xl aspect-square max-md:mt-6 max-md:max-w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                                        <div className="text-base leading-8 text-neutral-600 max-md:mt-6 max-md:max-w-full">
                                            Wondering what makes WP Page Builder
                                            so special? I would say, what
                                            doesn’t? It’s developed by the team
                                            over at Themeum, who has been
                                            creating since 2013. As mentioned
                                            above, the plugin is a full pack of
                                            essential site building elements
                                            with all modern the modern
                                            functionality you’ve come to expect
                                            from a page builder plugin. Let’s
                                            have a look below at all of the
                                            juicy features WP Page Builder
                                            includes.Wondering what makes WP
                                            Page Builder so special? I would
                                            say, what doesn’t? It’s developed by
                                            the team over at Themeum, who has
                                            been creating since 2013. As
                                            mentioned above, the plugin is a
                                            full pack of essential site building
                                            elements with all modern the modern
                                            functionality you’ve come to expect
                                            from a page builder plugin. Let’s
                                            have a look below at all of the
                                            juicy features WP Page Builder
                                            includes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="self-center text-5xl text-black max-md:text-4xl mt-[120px]">
                        Layihənin adı
                    </h2>
                </section>

                <ProjectSwiper />
            </main>
            <Footer />
        </div>
    );
}
