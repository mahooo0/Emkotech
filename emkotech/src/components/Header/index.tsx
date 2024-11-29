import React, { useState } from 'react';
import CategoryBAr from '../CategoryBar';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { languageState } from '@/State/mainAtom';
import { useLanguage } from '../Hoc/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { getProductCategories, getProducts } from '@/services/Request';

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
        'flex gap-[10px] justify-center items-center self-stretch p-2.5 my-auto whitespace-nowrap';
    const activeClasses = isActive ? 'text-blue-600 text-opacity-90' : '';
    const [isoN, setIsON] = useState(false);
    return (
        <div
            className={`${baseClasses} ${activeClasses}`}
            onMouseEnter={() => setIsON(true)}
            onMouseLeave={() => setIsON(false)}
        >
            <div className="self-stretch my-auto">{label}</div>
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
    return (
        <div className="flex flex-wrap gap-10 items-end self-stretch my-auto text-base text-black  max-md:max-w-full">
            <Link href={'/'}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/abb16285b3506646182d892ed29e09d03528a73b813f583ab565493b4f934b39?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                    alt="Company logo"
                    className="object-contain shrink-0 aspect-[2.52] w-[141px]"
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
    return (
        <nav className="flex flex-wrap items-center min-w-[240px] max-md:max-w-full h-[55px]">
            <div className="h-full">
                <Link href={'/'}>
                    <NavItem label="Əsas səhifə" isActive={activeindex === 0} />
                </Link>
            </div>
            <div
                className="h-full"
                onMouseLeave={() => setIsBarOpen(false)}
                onMouseEnter={() => setIsBarOpen(true)}
            >
                <Link href={'/products'}>
                    <NavItem
                        label="Məhsullar"
                        hasDropdown
                        isActive={activeindex === 1}
                    />
                </Link>
            </div>
            <div className="h-full">
                <Link href={'/aboutus'}>
                    <NavItem label="Haqqımızda" isActive={activeindex === 2} />
                </Link>
            </div>
            <div className="h-full">
                <Link href={'/projects'}>
                    <NavItem
                        label="Layihələr"
                        hasDropdown
                        isActive={activeindex === 3}
                    />
                </Link>
            </div>
            <div className="h-full">
                <Link href={'/news'}>
                    {' '}
                    <NavItem label="Xəbərlər" isActive={activeindex === 4} />
                </Link>
            </div>
            <div className="h-full">
                <Link href={'/contact'}>
                    {' '}
                    <NavItem label="Əlaqə" isActive={activeindex === 5} />
                </Link>
            </div>
        </nav>
    );
};

const FlagDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('ru');
    const { language, setLanguage } = useLanguage();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (lang: string) => {
        console.log('lang', lang);
        setLanguage(lang);
        setIsOpen(false);
        // localStorage.setItem('Accept-Language', lang);
        // You may want to add logic here to trigger a language change in your app
    };

    const getFlagSrc = (lang: string) => `/svg/flag${lang}.svg`;

    return (
        <div className="relative flex flex-col leading-none text-black whitespace-nowrap w-[70px]">
            <button
                className="flex gap-1.5 justify-center items-center bg-[#F5F5F5] rounded-md w-[54px] h-[34px]"
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <img
                    loading="lazy"
                    src={getFlagSrc(language)}
                    alt={`${language} flag`}
                    className="self-stretch my-auto w-5 aspect-square"
                />
                <img
                    src="/svg/strelka.svg"
                    alt="strelka"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
            </button>
            {isOpen && (
                <ul
                    className="absolute top-full left-[0px] z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg  w-fit"
                    role="listbox"
                >
                    {['az', 'ru', 'en'].map((lang) => (
                        <li key={lang}>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                onClick={() => handleLanguageChange(lang)}
                                role="option"
                                aria-selected={language === lang}
                            >
                                <img
                                    src={getFlagSrc(lang)}
                                    alt={`${lang} flag`}
                                    className="w-[24px]"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
// data
const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' },
    { id: '3', name: 'Home Appliances' },
    { id: '4', name: 'Books' },
];

const products = [
    {
        id: 'p1',
        name: 'Smartphone',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p2',
        name: 'Laptop',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p3',
        name: 'Jacket',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p4',
        name: 'Blender',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p3',
        name: 'Jacket',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p4',
        name: 'Blender',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p3',
        name: 'Jacket',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p4',
        name: 'Blender',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p3',
        name: 'Jacket',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
    {
        id: 'p4',
        name: 'Blender',
        imageUrl:
            'https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__',
        categoryId: '1',
    },
];
// data;
const Header = ({ activeindex }: { activeindex: number }) => {
    const [IsBarOpen, setIsBarOpen] = useState<boolean>(false);
    console.log('IsBarOpen:', IsBarOpen);
    const { language } = useLanguage();
    const {
        data: productCategoriesData,
        isLoading: productCategoriesLoading,
        isError: productCategoriesError,
    } = useQuery({
        queryKey: ['productCategories', language],
        queryFn: () => getProductCategories(language),
    });
    const {
        data: productsData,
        isLoading: productsLoading,
        isError: productsError,
    } = useQuery({
        queryKey: ['products', language],
        queryFn: () => getProducts(language, ''),
    });
    return (
        <header className="flex flex-wrap gap-5 justify-between items-center px-[100px] pt-2.5 bg-white relative shadow-[0px_0px_11px_rgba(167,167,167,0.12)] max-md:px-5">
            <NavLogo />
            <NavContent
                setIsBarOpen={(par: boolean) => {
                    setIsBarOpen(par);
                }}
                activeindex={activeindex}
            />
            <FlagDropdown />
            <CategoryBAr
                isLoading={productCategoriesLoading}
                isopen={IsBarOpen}
                categories={productCategoriesData}
                products={productsData?.data}
                productsLoading={productsLoading}
            />
        </header>
    );
};

export default Header;
