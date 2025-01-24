import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { ROUTES } from '@/services/CONSTANTS';
import { useRouter } from 'next/router';
type Subcategory = {
    id: number;
    name: string;
    image: string;
    category_id: number;
};

export type Category = {
    id: number;
    title: string;
    description: string;
    image: string;
    subcategories: Subcategory[];
};
export default function HomeCategory({ data }: { data: Category[] }) {
    const [currentCAtegory, setCurrentCategory] = useState(0);
    const router = useRouter();

    const { lang } = router.query;
    useEffect(() => {
        if (data.length) {
            setCurrentCategory(data[0].id);
        }
    }, []);
    const language = lang?.toString() || 'az';
    return (
        <div className="w-full mt-[34px]">
            <Swiper
                slidesPerView={'auto'}
                grabCursor
                className="bg-[#2677E2] !w-full rounded-[58px] !p-1 !drop-shadow-lg"
            >
                {data.map((item) => (
                    <SwiperSlide className="!w-fit" key={item.id}>
                        <button
                            style={{
                                backgroundColor:
                                    currentCAtegory === item.id
                                        ? '#fff'
                                        : 'transparent',
                                color:
                                    currentCAtegory === item.id
                                        ? '#000000'
                                        : '#FFFFFF',
                                fill:
                                    currentCAtegory === item.id
                                        ? '#000000'
                                        : '#FFFFFF',
                            }}
                            className=" flex flex-row gap-3 py-[11px] px-[28px] rounded-[57px]  duration-300  "
                            onClick={() => setCurrentCategory(item.id)}
                        >
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.188 6.77148C19.6581 6.94466 19.9117 7.27246 19.9488 7.75488C19.9859 8.2373 19.8065 8.60221 19.4107 8.84961L12.3599 13.2656C12.162 13.3893 11.9517 13.4512 11.7291 13.4512C11.6054 13.4512 11.4693 13.4264 11.3209 13.377L8.79742 12.3008L7.05328 16.9395C6.85537 17.459 6.48427 17.7188 5.94 17.7188H2.3775V18.9062C2.3775 19.0794 2.32184 19.2217 2.21051 19.333C2.09918 19.4443 1.95693 19.5 1.78375 19.5H0.596252C0.423075 19.5 0.280823 19.4443 0.169495 19.333C0.0581665 19.2217 0.00250244 19.0794 0.00250244 18.9062V14.1562C0.00250244 13.9831 0.0581665 13.8408 0.169495 13.7295C0.280823 13.6182 0.423075 13.5625 0.596252 13.5625H1.78375C1.95693 13.5625 2.09918 13.6182 2.21051 13.7295C2.32184 13.8408 2.3775 13.9831 2.3775 14.1562V15.3438H5.1236L6.60797 11.4102L0.781799 8.99805C0.262268 8.80013 0.00250244 8.42904 0.00250244 7.88477C0.00250244 7.66211 0.0519816 7.46419 0.15094 7.29102L3.71344 1.09375C3.9361 0.697916 4.27008 0.5 4.71539 0.5C4.88857 0.5 5.03701 0.52474 5.16071 0.574219L19.188 6.77148ZM21.0064 10.668C21.2538 10.7669 21.3775 10.9525 21.3775 11.2246C21.3775 11.3236 21.3651 11.4102 21.3404 11.4844L19.8189 14.9355C19.6952 15.1829 19.4973 15.3066 19.2252 15.3066C19.1509 15.3066 19.0767 15.2819 19.0025 15.2324L14.5494 13.3027L19.6705 10.0742L21.0064 10.668Z"
                                    fill="#232D40"
                                />
                            </svg>
                            {item.title}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  flex-row gap-[24px] flex-wrap mt-[42px] ">
                {data
                    .find((item) => item.id === currentCAtegory)
                    ?.subcategories.map((item: Subcategory) => (
                        <Link
                            key={item.id}
                            href={`/${language}/${ROUTES.products[language]}?category=${currentCAtegory}&sub_category=${item.id}`}
                        >
                            <div
                                className="w-full flex flex-col items-center gap-4 justify-center h-[130px] bg-[#EEEEEE] rounded-[18px]"
                                key={item.id}
                            >
                                <img
                                    className="w-[75px] aspect-square"
                                    src={item.image}
                                    alt=""
                                />
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                {/* {Array.from({ length: 10 }).map((_, index) => (
                    <div className="w-full flex flex-col items-center gap-4 justify-center h-[130px] bg-[#EEEEEE] rounded-[18px]">
                        <img
                            className="w-[75px] aspect-square"
                            src="https://s3-alpha-sig.figma.com/img/ce5c/a16b/625d749eb78e3d2194c0264eecf156cb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gchaUTuFCDpU2TQ8yQ~Qps1HrlBpNIDRGeT5WnaJpdLZs4Nwyx4z4bhEhEHLLC3m9TX4zconXrjnVpnk6Wre8zRi0uxM3mIfGmRBmF1Oo8pbrqZPORqzO9hpI17EaxoouvnoZs9uBLhF-E8RGue-pvSrSjKDkLposbODO-hh7thJq8d48wp64UO8IeX7cXr~fYk9Odd6JU7by5s-YnqKBiPsrI-Z-DND~AtxSBzCbyXbDW~A3KtogLf9i2Guuvv~yiww~jqbPBzjlD0UmR29CQSpxKwkO0wKzNuLc5mWnbIUbZ2KGSkaqu--8-tNguu8KOBGRnGT1kz47WtZEQedCw__"
                            alt=""
                        />
                        <p>Turbo-HD Kameralar</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
