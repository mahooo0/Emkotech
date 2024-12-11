import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import PaginationComponent from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import useDebounce from '@/hooks/useDebounce';
import {
    getProductCategories,
    getProductsByParams,
    getProductSubCategories,
    getTranslations,
} from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Product } from './[id]';

// interface Product {
//     id: number;
//     title: string;
//     category_id: number;
//     discounted_price: number;
// }

// interface ProductCategory {
//     id: number;
//     title: string;
// }
// export interface ProductData {
//     id: string;
//     image: string;
//     title: string;
//     discounted_price: number;
//     price: number;
//     discount: boolean;
// }
export default function Products() {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [selectedSort, setSelectedSort] = useState<string>('no');
    // console.log('selectedSort', selectedSort);
    const [selectedSubCategory, setSelectedSubCategory] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [sub, setsub] = useState<Subcategory[] | undefined>([]);
    const { data: productsData, isLoading: productsLoading } = useQuery({
        queryKey: [
            'products',
            language,
            debouncedSearchTerm,
            page,
            selectedCategory,
            selectedSort,
            selectedSubCategory,
        ],
        queryFn: () =>
            getProductsByParams(
                language,
                page,
                debouncedSearchTerm,
                selectedCategory === 0 ? undefined : selectedCategory,
                selectedSort === 'no' ? undefined : selectedSort,
                selectedSubCategory === 0 ? undefined : selectedSubCategory
            ),
    });
    // console.log('selectedSubCategory', selectedSubCategory);
    type DataItem = {
        id: number;
        title: string;
        description: string;
        image: string; // URL
        subcategories: Subcategory[];
    };
    interface Subcategory {
        id: number;
        name: string;
        category_id: number;
    }
    type ApiResponse<T> = {
        data: T[];
    };

    const {
        data: productCategoriesData,
        isLoading: productCategoriesLoading,
        isError: productCategoriesError,
    } = useQuery<ApiResponse<DataItem>>({
        queryKey: ['productCategories', language],
        queryFn: () => getProductCategories(language),
    });
    const {
        data: productSubCategoriesData,
        isLoading: productSubCategoriesLoading,
        isError: productSubCategoriesError,
    } = useQuery<ApiResponse<Subcategory>>({
        queryKey: ['productSubCategories', language],
        queryFn: () => getProductSubCategories(language),
    });
    // console.log('productSubCategoriesData', productSubCategoriesData);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    const router = useRouter();
    const { category, sub_category } = router.query;

    useEffect(() => {
        if (category) {
            // console.log('Category from URL:', category);
            setSelectedCategory(Number(category));
        }
        if (sub_category) {
            setSelectedSubCategory(Number(sub_category));
        }
    }, [category, sub_category]);
    useEffect(() => {
        if (selectedCategory) {
            console.log(
                'data',
                productCategoriesData?.data.find(
                    (item) => item.id === selectedCategory
                )?.subcategories
            );
            setsub(
                productCategoriesData?.data.find(
                    (item) => item.id === selectedCategory
                )?.subcategories
            );
        }
    }, [productCategoriesData, selectedCategory]);
    // useEffect(() => {
    //     // console.log('selectedCategory::::::::::::::::', selectedCategory);
    //     // let newData: Product[];
    //     // if (selectedCategory === 0) {
    //     //     newData = productsData?.data;
    //     // } else {
    //     //     newData = productsData?.data?.filter(
    //     //         (item: Product) => item.category_id === selectedCategory
    //     //     );
    //     // }

    //     // if (selectedSort > 0) {
    //     //     newData = [...(newData || [])].sort((a: Product, b: Product) =>
    //     //         selectedSort === 1
    //     //             ? a.discounted_price - b.discounted_price
    //     //             : b.discounted_price - a.discounted_price
    //     //     );
    //     // }

    //     // setMappingData(newData);
    // }, [productsData, selectedCategory, selectedSort]);
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });
    if (productCategoriesLoading || productSubCategoriesLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (productCategoriesError || productSubCategoriesError) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>Error</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-[94px]">
            {/* <Header activeindex={1} /> */}
            <BreadcrumbNavigation
                items={[
                    {
                        text: `${translationsData?.data?.Məhsullar}`,
                        path: '/products',
                    },
                ]}
            />

            <main>
                <section className="flex flex-col text-black">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl mt-[24px]"
                    >
                        {translationsData?.data?.Məhsullar}
                    </h1>
                    <section
                        data-layername="filter"
                        className="flex flex-wrap lg:gap-6 md:gap-6 gap-3 items-center px-28 py-8 mt-6 w-full text-base bg-white max-md:px-5 max-md:max-w-full"
                    >
                        <div className="flex grow  shrink gap-10 justify-between items-center self-stretch px-6 py-2.5  whitespace-nowrap rounded-2xl border border-solid border-neutral-200 min-w-[240px] w-[230px] max-md:px-5">
                            <select
                                data-layername="əsasSəhifə"
                                className="w-full bg-white select-none outline-none border-none"
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(Number(e.target.value))
                                }
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="0"
                                >
                                    {translationsData?.data?.category}
                                </option>
                                {productCategoriesData?.data?.map(
                                    (item: DataItem, index: number) => (
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
                                className="w-full bg-white select-none outline-none border-none"
                                value={selectedSubCategory}
                                onChange={(e) =>
                                    setSelectedSubCategory(
                                        Number(e.target.value)
                                    )
                                }
                            >
                                <option
                                    data-layername="kategoriyalar"
                                    value="0"
                                >
                                    {translationsData?.data?.subcategory}
                                </option>
                                {
                                    selectedCategory === 0
                                        ? productSubCategoriesData?.data?.map(
                                              (
                                                  item: Subcategory,
                                                  index: number
                                              ) => (
                                                  <option
                                                      key={index}
                                                      data-layername="kategoriyalar"
                                                      value={item.id}
                                                  >
                                                      {item.name}
                                                  </option>
                                              )
                                          )
                                        : sub?.map(
                                              (
                                                  item: Subcategory,
                                                  index: number
                                              ) => (
                                                  <option
                                                      key={index}
                                                      data-layername="kategoriyalar"
                                                      value={item.id}
                                                  >
                                                      {item.name}
                                                  </option>
                                              )
                                          )
                                    // ?.subcategories?.map( (item: Subcategory, index: number) => (
                                    //     <option
                                    //         key={index}
                                    //         data-layername="kategoriyalar"
                                    //         value={item.id}
                                    //     >
                                    //         {item.name}
                                    //     </option>
                                    // ))
                                }
                            </select>
                        </div>
                        <div className="flex grow  shrink gap-10 justify-between items-center self-stretch px-6 py-2.5  whitespace-nowrap rounded-2xl border border-solid border-neutral-200 min-w-[240px] w-[230px] max-md:px-5">
                            <select
                                data-layername="əsasSəhifə"
                                className="w-full bg-white select-none outline-none border-none"
                                value={selectedSort}
                                onChange={(e) =>
                                    setSelectedSort(e.target.value)
                                }
                            >
                                <option
                                    key={0}
                                    data-layername="kategoriyalar"
                                    value={'no'}
                                >
                                    Sort
                                </option>
                                <option key={1} value={'price_asc'}>
                                    ucuzdan bahaya
                                </option>
                                <option key={2} value={'price_desc'}>
                                    bahadan ucuza
                                </option>
                                <option key={3} value={'title_asc'}>
                                    a-z{' '}
                                </option>{' '}
                                <option key={4} value={'title_desc'}>
                                    z-a{' '}
                                </option>
                            </select>
                        </div>
                        <div
                            data-layername="searchField"
                            className="flex grow shrink gap-10 justify-between items-center self-stretch px-6 py-2.5 my-auto text-sm font-medium leading-none rounded-2xl border border-gray-200 border-solid bg-neutral-100 min-w-[240px] text-stone-500 w-[230px] max-md:px-5"
                        >
                            <label htmlFor="searchInput" className="sr-only">
                                {translationsData?.data?.Axtar}
                            </label>
                            <input
                                id="searchInput"
                                type="text"
                                placeholder={translationsData?.data?.Axtar}
                                className="bg-transparent border-none outline-none w-full"
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
                <div className="flex justify-center">
                    <section className="grid w-fit   mt-[30px] flex-row lg:grid-cols-4 md:grid-cols-3 items-center justify-self-center sm:grid-cols-2 grid-cols-1 lg:px-[100px] md:px-[60px] px-[30px] justify-center gap-x-4 lg:gap-y-[52px] gap-y-4">
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
                        ) : productsData?.data?.length > 0 ? (
                            productsData.data.map((item: Product) => (
                                <ProductCard key={item.id} data={item} />
                            ))
                        ) : (
                            <>
                                <div></div> <div></div>
                                <p className="ml-[-11%]">
                                    {translationsData?.data?.Tapılmadı}
                                </p>
                            </>
                        )}
                    </section>
                </div>
                <PaginationComponent
                    totalPages={productsData?.total_page}
                    currentPage={page}
                    onPageChange={(page) => setPage(page)}
                />
            </main>
            {/* <Footer /> */}
        </div>
    );
}
