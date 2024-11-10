import React, { useState } from 'react';
import CategoryBAr from '../CategoryBar';
import Link from 'next/link';

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
    return (
        <div className={`${baseClasses} ${activeClasses}`}>
            <div className="self-stretch my-auto">{label}</div>
            {hasDropdown && (
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
            )}
        </div>
    );
};

const NavLogo: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-10 items-end self-stretch my-auto text-base text-black min-w-[240px] max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/abb16285b3506646182d892ed29e09d03528a73b813f583ab565493b4f934b39?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                alt="Company logo"
                className="object-contain shrink-0 aspect-[2.52] w-[141px]"
            />
        </div>
    );
};

const navItems = [
    { label: 'Əsas səhifə' },
    { label: 'Məhsullar', hasDropdown: true },
    { label: 'Haqqımızda' },
    { label: 'Layihələr', hasDropdown: true },
    { label: 'Xəbərlər' },
    { label: 'Əlaqə' },
];

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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-between items-center self-stretch my-auto w-[53px]">
            <button
                onClick={toggleDropdown}
                className="flex gap-1 items-center self-stretch px-1 my-auto rounded bg-neutral-100"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/be57c0592c36034e6b0a4410ca2ff8876c2b4d3331c39a63f066ca66f4f0018a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                    alt="Selected flag"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/2117283efc5c9016f46fe19dfe9046f21fc0b2e6d9a8940802f4612fbc234498?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                    alt="Dropdown arrow"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {/* Dropdown content would go here */}
                </div>
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

    return (
        <header className="flex flex-wrap gap-10 justify-between items-center px-28 pt-2.5 bg-white relative shadow-[0px_0px_11px_rgba(167,167,167,0.12)] max-md:px-5">
            <NavLogo />
            <NavContent
                setIsBarOpen={(par: boolean) => {
                    setIsBarOpen(par);
                }}
                activeindex={activeindex}
            />
            <FlagDropdown />
            <CategoryBAr
                isopen={IsBarOpen}
                categories={categories}
                products={products}
            />
        </header>
    );
};

export default Header;
