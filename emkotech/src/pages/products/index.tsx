import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import PaginationComponent from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import React from 'react';

export default function products() {
    return (
        <div>
            <Header activeindex={1} />
            <BreadcrumbNavigation />

            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl"
                    >
                        Məhsullar
                    </h1>
                    <section
                        data-layername="filter"
                        className="flex flex-wrap gap-6 items-center px-28 py-8 mt-6 w-full text-base bg-white max-md:px-5 max-md:max-w-full"
                    >
                        <div className="flex grow  shrink gap-10 justify-between items-center self-stretch px-6 py-2.5  whitespace-nowrap rounded-2xl border border-solid border-neutral-200 min-w-[240px] w-[230px] max-md:px-5">
                            <select
                                data-layername="əsasSəhifə"
                                className="w-full"
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                            </select>
                        </div>

                        <div className="flex grow  shrink gap-10 justify-between items-center self-stretch px-6 py-2.5  whitespace-nowrap rounded-2xl border border-solid border-neutral-200 min-w-[240px] w-[230px] max-md:px-5">
                            <select
                                data-layername="əsasSəhifə"
                                className="w-full"
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                            </select>
                        </div>
                        <div className="flex grow  shrink gap-10 justify-between items-center self-stretch px-6 py-2.5  whitespace-nowrap rounded-2xl border border-solid border-neutral-200 min-w-[240px] w-[230px] max-md:px-5">
                            <select
                                data-layername="əsasSəhifə"
                                className="w-full"
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                                <option
                                    data-layername="kategoriyalar"
                                    value="kategoriyalar"
                                >
                                    Kategoriyalar
                                </option>
                            </select>
                        </div>
                        <div
                            data-layername="searchField"
                            className="flex grow shrink gap-10 justify-between items-center self-stretch px-6 py-2.5 my-auto text-sm font-medium leading-none rounded-2xl border border-gray-200 border-solid bg-neutral-100 min-w-[240px] text-stone-500 w-[230px] max-md:px-5"
                        >
                            <label htmlFor="searchInput" className="sr-only">
                                Search
                            </label>
                            <input
                                id="searchInput"
                                type="text"
                                placeholder="Axtar"
                                className="bg-transparent border-none outline-none"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/2e19dc35dd213e656474aa0288d1d6968a56aec699761271179437a1d7f07a00?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                        </div>
                    </section>
                </section>
                <section className="flex flex-row flex-wrap lg:px-[100px] md:px-[60px] px-[30px] justify-center gap-4">
                    {Array.from({ length: 12 }).map((item, index) => (
                        <ProductCard
                            key={index} // Adding a unique key prop
                            data={{
                                id: 'String', // Replace with actual or dynamic values as needed
                                title: 'string',
                                image: 'string',
                                price: 'string',
                            }}
                        />
                    ))}
                </section>
                <PaginationComponent
                    totalPages={12}
                    currentPage={1}
                    onPageChange={() => {}}
                />
            </main>
            <Footer />
        </div>
    );
}
