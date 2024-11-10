import React from 'react';

export default function ProjectCard() {
    return (
        <div className="flex overflow-hidden flex-col pb-14 text-lg bg-white rounded-2xl max-w-[349px] shadow-[0px_0px_11px_rgba(143,143,143,0.12)]">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5b87de37c718b5d306005738305c3ebce5008ba191ca691b1f71a23d431d948?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                className="object-contain w-full rounded-2xl aspect-[1.52]"
            />
            <div className="flex flex-col px-5 mt-5 w-full">
                <div className="self-start font-medium text-black">
                    Lorem Ipsum Dolor Sit Ament
                </div>
                <div className="mt-2.5 text-stone-300">
                    Discover how organizations around the world leverage
                    evolving features and unlock actionable insights that
                    increase security where it matters most.
                </div>
            </div>
        </div>
    );
}
