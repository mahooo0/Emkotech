import React, { useEffect, useRef, useState } from 'react';
import CategoryBAr from '../CategoryBar';
import Link from 'next/link';
import { useLanguage } from '../Hoc/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import {
    getProductCategories,
    getProductsByParams,
    getProductSubCategories,
    getProjects,
    getTopImages,
    getTranslations,
} from '@/services/Request';
import { updateLangAndRoute } from '@/services/helpers';
import { ROUTES } from '@/services/CONSTANTS';
import { useRouter } from 'next/router';
import { Product } from '@/pages/products/[id]';

interface NavItemProps {
    label: string;
    isActive?: boolean;
    hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
    label,
    isActive = false,
    hasDropdown = false,
}) => {
    const baseClasses =
        'flex gap-[10px] flex-nowrap justify-center items-center self-stretch p-2.5 my-auto whitespace-nowrap h-[80%]';
    const activeClasses = isActive ? 'text-blue-600 text-opacity-90' : '';
    const [isoN, setIsON] = useState(false);
    return (
        <div
            className={`${baseClasses} ${activeClasses} `}
            onMouseEnter={() => setIsON(true)}
            onMouseLeave={() => setIsON(false)}
        >
            {label ? (
                <div className="self-stretch my-auto">{label}</div>
            ) : (
                <div className="self-stretch my-auto animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
            )}
            {hasDropdown && (
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                    alt=""
                    className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square ${
                        isoN ? 'rotate-180' : ''
                    }`}
                />
            )}
        </div>
    );
};

const NavLogo: React.FC = () => {
    const router = useRouter();
    const { lang } = router.query;
    const { data: Logo } = useQuery({
        queryKey: ['Logo', lang],
        queryFn: () => getTopImages(lang),
    });
    return (
        <div className="flex pb-2 flex-wrap gap-10 items-end self-stretch my-auto text-base text-black  max-md:max-w-full">
            <Link href={`/${lang}`}>
                <img
                    loading="lazy"
                    src={Logo?.header_logo}
                    alt="Company logo"
                    className="object-contain shrink-0 aspect-[2.52] w-[130px]"
                />
            </Link>
        </div>
    );
};

const NavContent = ({
    activeindex,
    setIsBarOpen,
}: {
    activeindex: number;
    setIsBarOpen: (par: boolean) => void;
}) => {
    const [isProjectsBarOpen, setIsProjectsBarOpen] = useState(false);
    const router = useRouter();
    const { lang } = router.query;
    const language = lang ? lang?.toString() : 'az';
    // const { language } = useLanguage();
    const { data: projectsData } = useQuery({
        queryKey: ['projects', language],
        queryFn: () => getProjects(language),
    });
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });

    interface Project {
        slug: {
            az: string;
            en: string;
            ru: string;
        };
        id: string;
        title: string;
    }

    return (
        <nav className="flex flex-wrap  items-center min-w-[240px] max-md:max-w-full h-[55px]">
            <div className="h-full">
                <Link href={`/${language}`}>
                    <NavItem
                        label={translationsData?.data?.Əsas_səhifə}
                        isActive={activeindex === 0}
                    />
                </Link>
            </div>
            <div
                className="h-full"
                onMouseLeave={() =>
                    setTimeout(() => {
                        setIsBarOpen(false);
                    }, 500)
                }
                onMouseEnter={() => setIsBarOpen(true)}
            >
                <Link href={`/${language}/${ROUTES.products[language]}`}>
                    <NavItem
                        label={translationsData?.data?.Məhsullar}
                        hasDropdown
                        isActive={activeindex === 1}
                    />
                </Link>
            </div>
            <div className="h-full">
                <Link href={`/${language}/${ROUTES.about[language]}`}>
                    <NavItem
                        label={translationsData?.data?.Haqqımızda}
                        isActive={activeindex === 2}
                    />
                </Link>
            </div>
            <div className="h-full relative">
                <Link
                    href={`/${language}/${ROUTES.project[language]}`}
                    onMouseLeave={() => setIsProjectsBarOpen(false)}
                    onMouseEnter={() => setIsProjectsBarOpen(true)}
                >
                    <NavItem
                        label={translationsData?.data?.Layihələr}
                        hasDropdown
                        isActive={activeindex === 3}
                    />
                </Link>
                <div
                    onMouseEnter={() => setIsProjectsBarOpen(true)}
                    onMouseLeave={() => setIsProjectsBarOpen(false)}
                    className={`${
                        isProjectsBarOpen ? 'block' : 'hidden'
                    }  bg-white  h-[200px] absolute top-[80%] w-[200px] rounded-b-lg z-50 overflow-y-auto overflow-x-hidden flex flex-col gap-2  [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent`}
                >
                    {projectsData?.data.map((item: Project) => (
                        <Link
                            href={`/${language}/${ROUTES.project[language]}/${
                                item.slug[(language as 'az') || 'en' || 'ru']
                            }?id=${item.id}`}
                            key={item.id}
                            onClick={() => {
                                localStorage.setItem(
                                    'slug',
                                    JSON.stringify(item.slug)
                                );
                            }}
                        >
                            <p className="hover:bg-gray-100 rounded-md px-2 py-1">
                                {item?.title?.slice(0, 30)}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-full">
                <Link href={`/${language}/${ROUTES.news[language]}`}>
                    <NavItem
                        label={translationsData?.data?.Xəbərlər}
                        isActive={activeindex === 4}
                    />
                </Link>
            </div>
            <div className="h-full">
                <Link href={`/${language}/${ROUTES.contact[language]}`}>
                    <NavItem
                        label={translationsData?.data?.Əlaqə}
                        isActive={activeindex === 5}
                    />
                </Link>
            </div>
        </nav>
    );
};

const FlagDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setLanguage } = useLanguage();
    const dropdownref = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                dropdownref.current &&
                !dropdownref.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    const router = useRouter();
    const { lang, page, slug } = router.query;
    const handleLanguageChange = (Lang: 'az' | 'en' | 'ru') => {
        if (lang === undefined || page === undefined) {
            router.push(`/${Lang}${window.location.search}`);
            setLanguage(Lang);
            return;
        }

        let path = `/${lang}/${page}`;
        if (slug) {
            path += `/${slug}`;
        }

        // Preserve the query parameters
        const queryParams = window.location.search; // Get the current query string
        const RoutePath = updateLangAndRoute(path, Lang) + queryParams;

        console.log('path:', RoutePath);

        router.push(RoutePath); // Navigate to the new path
        setLanguage(Lang);

        // Optionally, persist language selection
        // document.cookie = `accept-language=${Lang}; path=/`;
    };

    const getFlagSrc = (lang: string) =>
        `/svg/flag${lang === undefined ? 'az' : lang}.svg`;

    return (
        <div className="relative flex flex-col leading-none text-black whitespace-nowrap w-[70px]">
            <div
                className="flex gap-1.5 justify-center items-center bg-[#F5F5F5] rounded-md w-[54px] h-[34px] cursor-pointer"
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                ref={buttonRef}
            >
                <img
                    loading="lazy"
                    src={getFlagSrc(lang as string)}
                    alt={`${lang} flag`}
                    className="self-stretch my-auto w-5 aspect-square"
                />
                <img
                    src="/svg/strelka.svg"
                    alt="strelka"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
            </div>
            {isOpen && (
                <div
                    ref={dropdownref}
                    className="absolute top-full left-[0px] z-50 mt-1 bg-white border list-none border-gray-200 rounded-md shadow-lg  w-fit"
                    role="listbox"
                >
                    {['az', 'ru', 'en'].map((Lang) => (
                        <li key={Lang}>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                onClick={() =>
                                    handleLanguageChange(
                                        Lang as 'az' | 'en' | 'ru'
                                    )
                                }
                                role="option"
                                aria-selected={lang === Lang}
                            >
                                <img
                                    src={getFlagSrc(Lang)}
                                    alt={`${Lang} flag`}
                                    className="w-[24px]"
                                />
                            </button>
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

const Header = ({ activeindex }: { activeindex: number }) => {
    const [IsBarOpen, setIsBarOpen] = useState<boolean>(false);
    const [sohowAside, setsohowAside] = useState<boolean>(false);

    const { language, setLanguage } = useLanguage();
    const [search, setsearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    const [issearchOpen, setissearchOpen] = useState(true);
    const router = useRouter();
    const { lang } = router.query;
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300); // Adjust the debounce delay as needed

        return () => {
            clearTimeout(handler);
        };
    }, [search]);
    useEffect(() => {
        if (lang && lang == '') {
            setLanguage(lang);
        }
    }, [lang]);
    const { data: productCategoriesData, isLoading: productCategoriesLoading } =
        useQuery({
            queryKey: ['productCategories', language],
            queryFn: () => getProductCategories(language),
        });
    const { data: productsData, isLoading: productsLoading } = useQuery({
        queryKey: ['products', language, debouncedSearch],
        queryFn: () => getProductsByParams(language, 1, debouncedSearch),
    });
    console.log('productsData:', productsData);

    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });

    const { data: productSubCategoriesData } = useQuery({
        queryKey: ['productSubCategories', language],
        queryFn: () => getProductSubCategories(language),
    });
    const { data: Logo } = useQuery({
        queryKey: ['Logo', language],
        queryFn: () => getTopImages(language),
    });
    const dropdownref = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                dropdownref.current &&
                !dropdownref.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setsohowAside(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    const serchRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                serchRef.current &&
                !serchRef.current.contains(e.target as Node)
            ) {
                console.log('Outside click');
                setissearchOpen(true);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    return (
        <div className=" fixed top-0 z-[1000] w-[100vw]">
            <header className=" lg:flex hidden flex-wrap gap-5 justify-between items-center px-[100px] pt-2.5 bg-white relative shadow-[0px_0px_11px_rgba(167,167,167,0.12)] max-md:px-5 ">
                <NavLogo />
                <NavContent
                    setIsBarOpen={(par: boolean) => {
                        setIsBarOpen(par);
                    }}
                    activeindex={activeindex}
                />
                <div className="flex flec-row gap-2 items-center">
                    <div className=" relative" ref={serchRef}>
                        <div
                            className={`flex justify-between items-center  py-2.5 w-fit text-sm font-medium leading-none rounded-2xl border  border-solid  text-stone-500 duration-300 ${
                                issearchOpen
                                    ? 'gap-0 px-0 bg-transparent border-transparent'
                                    : 'gap-10 px-6 bg-neutral-100 border-gray-200'
                            }`}
                        >
                            <input
                                type="text"
                                placeholder={`${translationsData?.data?.Axtar}`}
                                className={`duration-300 ${
                                    issearchOpen ? 'w-0' : 'w-[150px]'
                                } border-none outline-none flex-1 bg-transparent text-stone-500`}
                                value={search}
                                onChange={(e) => setsearch(e.target.value)}
                            />

                            <img
                                onClick={() => {
                                    setissearchOpen((prew) => !prew);
                                }}
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e19dc35dd213e656474aa0288d1d6968a56aec699761271179437a1d7f07a00?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                        </div>{' '}
                        {search === '' || issearchOpen || (
                            <div className="w-full h-fit scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 max-h-[300px] overflow-y-scroll bg-white border border-opacity-40 border-[#575757] z-[999999999] absolute top-[110%] rounded-lg">
                                {productsData?.data.length > 0 ? (
                                    <>
                                        {productsData.data.map(
                                            (product: Product) => (
                                                <Link
                                                    key={product.id}
                                                    href={`/${language}/${
                                                        ROUTES.products[
                                                            language as keyof typeof ROUTES.products
                                                        ]
                                                    }/${
                                                        product.slug[
                                                            lang as
                                                                | 'az'
                                                                | 'en'
                                                                | 'ru'
                                                        ]
                                                    }?id=${product?.id}`}
                                                >
                                                    {' '}
                                                    <div
                                                        onClick={() => {
                                                            localStorage.setItem(
                                                                'slug',
                                                                JSON.stringify(
                                                                    product.slug
                                                                )
                                                            );
                                                        }}
                                                        className="flex flex-row gap-4 items-center bg-white hover:bg-[#a6a6a6] hover:bg-opacity-50 duration-150 px-3 py-1"
                                                    >
                                                        <img
                                                            src={product.image}
                                                            className="object-cover shrink-0 rounded-md aspect-[1.04] w-[60px] max-h-[60px]"
                                                            alt=""
                                                        />
                                                        <p className="text-[#000000] text-[16px] line-clamp-1">
                                                            {product.title}{' '}
                                                        </p>
                                                    </div>
                                                </Link>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <div className="flex justify-center flex-row items-center bg-white hover:bg-[#a6a6a6] duration-150 px-3 py-2">
                                        <p className="text-[#000000] text-center text-[16px] line-clamp-1">
                                            {translationsData?.data?.Tapılmadı}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <FlagDropdown />
                </div>

                <CategoryBAr
                    isLoading={productCategoriesLoading}
                    isopen={IsBarOpen}
                    categories={productCategoriesData}
                    products={productSubCategoriesData?.data}
                    productsLoading={productsLoading}
                />
            </header>
            <header className="lg:hidden bg-white  flex flex-row px-5 py-2 justify-between items-center">
                <div className="relative ml-3 w-fit lg:hidden block">
                    <div
                        ref={buttonRef}
                        onClick={() => setsohowAside((prew) => !prew)}
                    >
                        <div className="w-[33px] h-[33px]   aspect-square rounded-full bg-black bg-opacity-40 bg-blur-[4px] flex justify-center items-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                                    fill={'white'}
                                />
                            </svg>
                        </div>
                    </div>

                    <div
                        ref={dropdownref}
                        className={`absolute  ${
                            sohowAside ? '' : 'hidden'
                        }  right-[-160px] z-[9999999999] mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                    >
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link href={`/${language}`} className="w-full">
                                {translationsData?.data?.Əsas_səhifə}
                            </Link>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link
                                href={`/${language}/${ROUTES.about[language]}`}
                            >
                                {translationsData?.data?.Haqqımızda}
                            </Link>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link
                                href={`/${language}/${ROUTES.project[language]}`}
                            >
                                {translationsData?.data?.Layihələr}
                            </Link>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link
                                href={`/${language}/${ROUTES.products[language]}`}
                            >
                                {translationsData?.data?.Məhsullar}
                            </Link>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link
                                href={`/${language}/${ROUTES.news[language]}`}
                            >
                                {translationsData?.data?.Xəbərlər}
                            </Link>
                        </div>
                        <div
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => setsohowAside(false)}
                        >
                            <Link
                                href={`/${language}/${ROUTES.contact[language]}`}
                            >
                                {translationsData?.data?.Əlaqə}
                            </Link>
                        </div>
                    </div>
                </div>
                <NavLogo />
                <FlagDropdown />
            </header>
        </div>
    );
};

export default Header;
