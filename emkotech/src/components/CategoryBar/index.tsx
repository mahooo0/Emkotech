import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface subcategories {
    id: string;
    name: string;
    category_id: string;
    image: string;
}
interface Category {
    id: string;
    title: string;
    subcategories: subcategories[];
}

interface Product {
    id: string;
    title: string;
    image: string;
    category_id: string;
}

interface CategoryBarProps {
    categories: {
        data: Category[];
    };
    products: Product[];
    isopen: boolean;
    isLoading: boolean;
    productsLoading: boolean;
}

const CategoryBAr = ({
    categories,
    products,
    isopen,
    isLoading,
    productsLoading,
}: CategoryBarProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(
        categories?.data[0].id
    );
    console.log(productsLoading);
    console.log(products);

    const router = useRouter();

    return (
        <section
            // style={isopen ? { display: 'flex' } : { display: 'none' }}
            data-layername="modalProducts"
            className={`flex ${
                isopen ? ' flex' : 'hidden'
            } overflow-hidden duration-300 z-[999] hover:flex flex-col items-center px-16 pt-8 pb-12 bg-white shadow-sm max-md:px-5 absolute top-[100%] w-full left-0`}
        >
            <div className="flex flex-wrap gap-10 items-start w-full max-w-[1224px] max-md:max-w-full">
                <div className="flex-auto mt-2 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col lg:h-[300px] md:h-[300px]">
                        <aside
                            data-layername="column"
                            className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full h-[300px]"
                        >
                            <div
                                data-layername="kate"
                                className="flex flex-col grow px-5 py-5 font-medium border-r w-[300px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 border-gray-200 border-opacity-90 min-h-[292px] overflow-y-auto max-md:mt-6"
                            >
                                <h2
                                    data-layername="kateqoriyalar"
                                    className="text-sm text-neutral-400"
                                >
                                    KATEQORİYALAR
                                </h2>
                                <nav
                                    data-layername="kateqoriyalarModalContentText"
                                    className="flex flex-col mt-4 w-full text-lg text-black"
                                >
                                    {/* {productsLoading ? (
                                        <>
                                            <div className="animate-pulse flex flex-col gap-2">
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                            </div>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                setSelectedCategory('')
                                            }
                                            className={`flex-1 shrink gap-2.5 self-stretch py-2.5 w-full text-[16px] font-medium text-left ${
                                                selectedCategory === ''
                                                    ? 'text-[#186FE0F0] '
                                                    : ''
                                            }`}
                                        >
                                            Bütün məhsullar
                                        </button>
                                    )} */}
                                    {isLoading ? (
                                        <>
                                            <div className="animate-pulse flex flex-col gap-2">
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                            </div>
                                        </>
                                    ) : (
                                        categories.data.map(
                                            (category: Category) => (
                                                <button
                                                    key={category.id}
                                                    onMouseEnter={() =>
                                                        setSelectedCategory(
                                                            category.id
                                                        )
                                                    }
                                                    onClick={() =>
                                                        router.push(
                                                            `/products?category=${category.id}`
                                                        )
                                                    }
                                                    data-layername={category.title
                                                        .toLowerCase()
                                                        .replace(/\s+/g, '-')}
                                                    className={`flex-1 shrink gap-2.5 self-stretch py-2.5 w-full text-[16px] font-medium text-left ${
                                                        category.id ===
                                                        selectedCategory
                                                            ? 'text-[#186FE0F0] '
                                                            : ''
                                                    } ${
                                                        categories.data.indexOf(
                                                            category
                                                        ) > 0
                                                            ? ''
                                                            : ''
                                                    }`}
                                                >
                                                    {category.title}
                                                </button>
                                            )
                                        )
                                    )}
                                </nav>
                            </div>
                        </aside>
                        <div
                            data-layername="column"
                            className="flex flex-col ml-5 w-[90%] max-md:ml-0 max-md:w-full h-full"
                        >
                            <div className="flex flex-col self-stretch h-full  w-full text-base text-black max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-row flex-wrap gap-6 w-full max-md:max-w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 lg:!pr-[60px] md:pr-[60px] px-[20px] max-h-[300px]">
                                    {isLoading ? (
                                        <>
                                            <article className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full max-w-1/2 max-h-1/3">
                                                <div className="animate-pulse w-[60px] h-[60px] rounded-xl bg-gray-200"></div>
                                                <div className="animate-pulse h-4 bg-gray-200 rounded w-[120px]"></div>
                                            </article>
                                            <article className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full max-w-1/2 max-h-1/3">
                                                <div className="animate-pulse w-[60px] h-[60px] rounded-xl bg-gray-200"></div>
                                                <div className="animate-pulse h-4 bg-gray-200 rounded w-[120px]"></div>
                                            </article>
                                            <article className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full max-w-1/2 max-h-1/3">
                                                <div className="animate-pulse w-[60px] h-[60px] rounded-xl bg-gray-200"></div>
                                                <div className="animate-pulse h-4 bg-gray-200 rounded w-[120px]"></div>
                                            </article>
                                            <article className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full max-w-1/2 max-h-1/3">
                                                <div className="animate-pulse w-[60px] h-[60px] rounded-xl bg-gray-200"></div>
                                                <div className="animate-pulse h-4 bg-gray-200 rounded w-[120px]"></div>
                                            </article>
                                        </>
                                    ) : (
                                        categories?.data
                                            ?.find(
                                                (item) =>
                                                    item.id === selectedCategory
                                            )
                                            ?.subcategories?.map(
                                                (product: subcategories) => (
                                                    <article
                                                        key={product.id}
                                                        data-layername="modalContent"
                                                        className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full max-w-[390px] max-h-[83px] cursor-pointer hover:bg-slate-100 transition-colors"
                                                        onClick={() =>
                                                            router.push(
                                                                `/products?category=${product.category_id}&sub_category=${product.id}`
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-square w-[60px] max-w-[60px] max-h-[60px]"
                                                        />
                                                        <h3
                                                            data-layername="təhlukəsizlikKameralari"
                                                            className="self-stretch my-auto"
                                                        >
                                                            {product.name}
                                                        </h3>
                                                    </article>
                                                )
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryBAr;
