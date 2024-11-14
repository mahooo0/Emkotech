import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

export default function contact() {
    return (
        <div>
            <Header activeindex={5} />
            <main>
                <BreadcrumbNavigation />
                <section className="flex flex-col text-black lg:px-[100px] md:px-[60px] px-[30px] mt-6 ">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl"
                    >
                        Məhsullar
                    </h1>
                    <div
                        className="rounded-xl overflow-hidden mt-6"
                        style={{
                            backgroundImage:
                                'url("https://s3-alpha-sig.figma.com/img/786b/a7d7/6fe24dfea7c5ab21dcc7e0479d14e36c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr0UNkzhRLyFK4mjGigoV2O3819zGAbZYWKI01x6aq0orqsiZ-F~tJUUXfHjPz-UgDojmRRy-LyM0Ttp1JNui96BI0DtKfid1PlDmrqHD1JIJLSXQmBchzPC6S2pQSNUocwaBcDUSvSsl9fV9LWoShV2xoC~4-U734iPmxtx~fScNtg37ZSUYRPZ23xgzHFpb~0ftkquqqKmmoUElDsZQuSs9aZFfPBat8s93NgFLkXLYk3bmxyLIhey~8KFkT03Xg8cEKzZfjPsxY0ZDe~m6tEbRFvg-Y~GnQsF~n3pmdlFrQDPU0vchiYEGir8BrkaT0Sv77DNlD3Svszg19HJZg__")',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="p-16 w-full max-md:px-5 max-md:max-w-full bg-opacity-60 bg-black ">
                            <div className="flex lg:gap-[111px] gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col mt-1 text-white max-md:mt-10 max-md:max-w-full">
                                        <div className="text-4xl font-semibold max-md:max-w-full">
                                            Bizimlə əlaqə
                                        </div>
                                        <div className="flex flex-col mt-7 w-full text-base max-md:max-w-full">
                                            <div className="flex overflow-hidden flex-col justify-center items-start p-2 w-full rounded-2xl bg-white bg-opacity-20 max-md:pr-5 max-md:max-w-full">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e303a71bb36f9114c14100c16e890fc672ad5a82b5a8ca926b92fcc7e4ced482?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                                    />
                                                    <div className="self-stretch my-auto">
                                                        +994 00 000 00 00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex overflow-hidden flex-col justify-center items-start p-2 mt-3 w-full whitespace-nowrap rounded-2xl bg-white bg-opacity-20 max-md:pr-5 max-md:max-w-full">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/934f1ace2e0d3978f34160649ef7f8877096110124f32809d7c2b4be4b0d03f5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                                    />
                                                    <div className="self-stretch my-auto">
                                                        nümunə@gmail.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex overflow-hidden flex-col justify-center items-start p-2 mt-3 w-full rounded-2xl bg-white bg-opacity-20 max-md:pr-5 max-md:max-w-full">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49505db8dcfbd6e2e4277fc092dd50f54f1026f064131af7f185a37b466add89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                                    />
                                                    <div className="self-stretch my-auto">
                                                        Bakı, Yasamal, Əsəd
                                                        Əhmədov 21 B
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex overflow-hidden flex-col justify-center items-start p-2 mt-3 w-full whitespace-nowrap rounded-2xl bg-white bg-opacity-20 max-md:pr-5 max-md:max-w-full">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a2a6369d9b5ae334f390acea87dbc413ca905cfc082873404aa21592d08b7d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                                    />
                                                    <div className="self-stretch my-auto">
                                                        09:00-22:00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col grow justify-center p-7 w-full rounded-3xl bg-white bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-xl font-semibold text-center text-white max-md:max-w-full">
                                                Formu doldur, biz əlaqə
                                                saxlayaq!
                                            </div>
                                            <form className="flex flex-col mt-7 w-full text-base max-md:max-w-full">
                                                {/* Name Input */}
                                                <div className="flex flex-col w-full text-black text-opacity-60 max-md:max-w-full">
                                                    <input
                                                        type="text"
                                                        placeholder="Ad və soyad"
                                                        className="px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] outline-none"
                                                    />
                                                </div>

                                                {/* Phone Number Input */}
                                                <div className="flex flex-col mt-3 w-full text-black text-opacity-60 max-md:max-w-full">
                                                    <div className="flex items-center px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                                        <span className="text-black">
                                                            +994
                                                        </span>
                                                        <input
                                                            type="tel"
                                                            placeholder="00 000 00 00"
                                                            className="ml-2 w-full bg-transparent outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Category Selection */}
                                                <div className="flex flex-col mt-3 w-full text-black text-opacity-80 max-md:max-w-full">
                                                    <div className="flex items-center justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                                        {/* <label htmlFor="category">
                                                            Kateqoriya seç
                                                        </label> */}
                                                        <select
                                                            id="category"
                                                            className="ml-2 bg-transparent outline-none w-full"
                                                        >
                                                            <option value="">
                                                                Kateqoriya seç{' '}
                                                            </option>
                                                            <option value="category1">
                                                                Kateqoriya 1
                                                            </option>
                                                            <option value="category2">
                                                                Kateqoriya 2
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Notes Textarea */}
                                                <div className="flex flex-col mt-3 w-full rounded-2xl min-h-[111px] max-md:max-w-full">
                                                    <textarea
                                                        placeholder="Qeyd"
                                                        className="px-5 pt-4 pb-20 w-full bg-white border border-solid border-black border-opacity-10 rounded-3xl outline-none resize-none"
                                                    />
                                                </div>

                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    className="self-stretch px-7 py-3.5 mt-7 font-medium text-white bg-blue-600 rounded-2xl max-md:px-5 max-md:max-w-full"
                                                >
                                                    Göndər
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        className="w-full h-[570px] rounded-xl mt-[20px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24314.580841875697!2d49.80945825576784!3d40.379542116600334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da799238e89%3A0x5aa7c9c37b701361!2zMjggTWF5IEtlw6dpZCBUaWNhcsmZdCBNyZlya8mZemk!5e0!3m2!1sru!2saz!4v1730973054229!5m2!1sru!2saz"
                        width="600"
                        height="450"
                        loading="lazy"
                    ></iframe>
                </section>
            </main>
            <Footer />
        </div>
    );
}
