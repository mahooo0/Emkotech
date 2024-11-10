import * as React from 'react';

export function Aside() {
    return (
        <section className="lg:w-[30%] w-full">
            <div className="flex  gap-10 justify-between items-center px-6 py-2.5 w-full text-sm font-medium leading-none rounded-2xl border border-gray-200 border-solid bg-neutral-100 text-stone-500">
                <input
                    type="text"
                    placeholder="Axtar"
                    className="bg-transparent border-none outline-none flex-1 text-stone-500"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e19dc35dd213e656474aa0288d1d6968a56aec699761271179437a1d7f07a00?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
            </div>{' '}
            <div className="flex flex-col px-7 pt-4 pb-14 mt-6  text-base tracking-normal bg-white rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.084)]  w-full h-fit">
                <div className="flex gap-5 items-start text-neutral-900">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c560f657c8a31c84f26b3d79edf3478a3d0dd2ccfa9c35d4ee6475cd460edd0d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 self-end mt-20 rounded-none aspect-[1.04] w-[83px]"
                    />
                    <div className="flex flex-col items-start self-start">
                        <div className="ml-4 text-lg tracking-normal leading-[58px]">
                            POPULAR POST
                        </div>
                        <div className="mt-6 leading-4 text-neutral-400">
                            DESIGN PROCESS
                        </div>
                        <div className="self-stretch mt-4 leading-6">
                            Our 15 favorite websites from August{' '}
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 self-start mt-12">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2a99f99ce36f10dad9bbeeaca6e35e6edf58ae43cc532f5208d8615379de90e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 rounded-none aspect-[1.04] w-[83px]"
                    />
                    <div className="flex flex-col my-auto">
                        <div className="self-start leading-4 text-neutral-400">
                            INSPIRATION
                        </div>
                        <div className="mt-4 leading-6 text-rose-400">
                            The beginners guide to user research
                        </div>
                    </div>
                </div>
                <div className="flex gap-5  mt-12">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b12fbd5a6466daeb2ffe38abdc294fb14c6d44850a9af3ec98dcd11adbd577c8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 rounded-none aspect-[1.04] w-[83px]"
                    />
                    <div className="flex flex-col my-auto">
                        <div className="self-start leading-4 text-neutral-400">
                            INSPIRATION
                        </div>
                        <div className="mt-4 leading-6 text-neutral-900">
                            Web page layout 101: website anatomy every designer
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
