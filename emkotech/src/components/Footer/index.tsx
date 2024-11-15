import * as React from 'react';

export function Footer() {
    return (
        <footer className="flex flex-col text-sm text-white mt-[120px]">
            <div className="flex flex-col items-start pt-12 pb-4 w-full bg-slate-900 max-md:max-w-full">
                <div className="flex flex-col items-start px-[100px] max-w-full w-full">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/a0959a5d1b98e64f7c559061339d04b60a1877a5316d4d951fa8456c1226ffa7?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        className="object-contain max-w-full aspect-[2.52] w-[141px]"
                    />
                    <div className="flex flex-wrap gap-10 justify-between self-stretch mt-9 leading-none max-md:max-w-full w-full lg:pr-[360px] pr-0">
                        <div className="grow shrink self-start text-base font-medium leading-7 max-w-[483px] text-white opacity-50 w-[471px] max-md:max-w-full">
                            The idea of making a positive impact with every
                            project is what drives us. Thats why we specialise
                            in working with brands promoting environmental and
                            socially responsible products, practices/
                        </div>
                        <div className="flex flex-col items-start text-white opacity-50">
                            <div>About us</div>
                            <div className="mt-4">Contact us</div>
                            <div className="mt-4">Privacy Policies</div>
                            <div className="self-stretch mt-4">
                                Terms and Condition
                            </div>
                            <div className="mt-4">News</div>
                        </div>
                        <div className="flex flex-col items-start text-white opacity-50">
                            <div className="self-stretch">About us</div>
                            <div className="mt-4">Home</div>
                            <div className="self-stretch mt-4">Products</div>
                            <div className="mt-4">News</div>
                            <div className="mt-4">Contact</div>
                        </div>
                    </div>
                    <div className="mt-6">Follow us on social media:</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e1a8a8d05501b4fbe08402b4f48dfd8e58fe0419287cbb2e38b8f4bb399e30bc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        className="object-contain mt-6 w-24 aspect-[5.99]"
                    />
                </div>
                <div className="self-stretch mt-10 w-full bg-white border border-white border-solid opacity-10 min-h-[1px] max-md:max-w-full" />
                <div className="mt-4 ml-28 leading-none max-md:ml-2.5">
                    Bütün hüquqlar qorunur @ 166tech
                </div>
            </div>
        </footer>
    );
}
