import React, { useState } from 'react';

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    categoryId: string;
}

interface ProductModalProps {
    categories: Category[];
    products: Product[];
    isopen: boolean;
}

const CategoryBAr: React.FC<ProductModalProps> = ({
    categories,
    products,
    isopen,
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(
        categories[0]?.id || ''
    );

    const filteredProducts = products.filter(
        (product) => product.categoryId === selectedCategory
    );

    return (
        <section
            // style={isopen ? { display: 'flex' } : { display: 'none' }}
            data-layername="modalProducts"
            className={`flex ${
                isopen ? ' flex' : 'hidden'
            } overflow-hidden z-[999] hover:flex flex-col items-center px-16 pt-8 pb-12 bg-white shadow-sm max-md:px-5 absolute top-[100%] w-full left-0`}
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
                                className="flex flex-col grow px-5 py-5 font-medium border-r border-gray-200 border-opacity-90 min-h-[292px] max-md:mt-6"
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
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() =>
                                                setSelectedCategory(category.id)
                                            }
                                            data-layername={category.name
                                                .toLowerCase()
                                                .replace(/\s+/g, '-')}
                                            className={`flex-1 shrink gap-2.5 self-stretch py-2.5 w-full text-[16px] font-medium text-left ${
                                                category.id === selectedCategory
                                                    ? 'text-[#186FE0F0] '
                                                    : ''
                                            } ${
                                                categories.indexOf(category) > 0
                                                    ? ''
                                                    : ''
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>
                        <div
                            data-layername="column"
                            className="flex flex-col ml-5 w-[90%] max-md:ml-0 max-md:w-full h-full"
                        >
                            <div className="flex flex-col self-stretch h-full  w-full text-base text-black max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-row flex-wrap gap-6 w-full max-md:max-w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 l:!pr-[60px] md:pr-[60px] px-[20px] max-h-[300px]">
                                    {filteredProducts.map((product) => (
                                        <article
                                            key={product.id}
                                            data-layername="modalContent"
                                            className="flex flex-auto gap-6 items-center p-3 rounded-2xl bg-slate-50 lg:w-[45%] md:w-[45%] w-full"
                                        >
                                            <img
                                                loading="lazy"
                                                src={product.imageUrl}
                                                alt={product.name}
                                                className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-square w-[60px]"
                                            />
                                            <h3
                                                data-layername="təhlukəsizlikKameralari"
                                                className="self-stretch my-auto"
                                            >
                                                {product.name}
                                            </h3>
                                        </article>
                                    ))}
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
