import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import PaginationComponent from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import useDebounce from '@/hooks/useDebounce';
import { getProductCategories, getProducts } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function products() {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    console.log('selectedCategory', selectedCategory);
    const [page, setPage] = useState<number>(1);
    const {
        data: productsData,
        isLoading: productsLoading,
        isError: productsError,
    } = useQuery({
        queryKey: ['products', language, debouncedSearchTerm],
        queryFn: () => getProducts(language, debouncedSearchTerm, page),
    });
    const {
        data: productCategoriesData,
        isLoading: productCategoriesLoading,
        isError: productCategoriesError,
    } = useQuery({
        queryKey: ['productCategories', language],
        queryFn: () => getProductCategories(language),
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        if (category) {
            console.log('Category from URL:', category);
            setSelectedCategory(Number(category));
        }
    }, [category]);
    if (productCategoriesLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (productCategoriesError) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>Error</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header activeindex={1} />
            <BreadcrumbNavigation />

            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl mt-[24px]"
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
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(Number(e.target.value))
                                }
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="0"
                                >
                                    All
                                </option>
                                {productCategoriesData.data.map(
                                    (item: any, index: number) => (
                                        <option
                                            key={index}
                                            data-layername="kategoriyalar"
                                            value={item.id}
                                        >
                                            {item.title}
                                        </option>
                                    )
                                )}
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
                                value={searchTerm}
                                onChange={handleChange}
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
                <section className="flex mt-[30px] flex-row flex-wrap lg:px-[100px] md:px-[60px] px-[30px] justify-center gap-4">
                    {productsLoading ? (
                        Array(8)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[280px] h-[400px] bg-gray-200 rounded-lg animate-pulse"
                                >
                                    <div className="w-full h-[200px] bg-gray-300 rounded-t-lg" />
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                                        <div className="h-4 bg-gray-300 rounded w-1/2" />
                                        <div className="h-4 bg-gray-300 rounded w-1/4" />
                                    </div>
                                </div>
                            ))
                    ) : productsData.data.length > 0 ? (
                        productsData?.data.map((item: any, index: number) => {
                            console.log(item);
                            if (selectedCategory === 0) {
                                return <ProductCard data={item} />;
                            } else if (item.category_id === selectedCategory) {
                                return <ProductCard data={item} />;
                            }
                        })
                    ) : (
                        <>
                            <p>Not found</p>
                        </>
                    )}
                </section>
                <PaginationComponent
                    totalPages={12}
                    currentPage={page}
                    onPageChange={(page) => setPage(page)}
                />
            </main>
            <Footer />
        </div>
    );
}
