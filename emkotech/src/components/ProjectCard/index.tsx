import { Router, useRouter } from 'next/router';
import React from 'react';

export default function ProjectCard({ data }: { data: any }) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/projects/${data?.id}`)}
            className="flex cursor-pointer overflow-hidden flex-col pb-14 text-lg bg-white rounded-2xl w-full max-w-[349px] shadow-[0px_0px_11px_rgba(143,143,143,0.12)]"
        >
            <img
                loading="lazy"
                className="object-cover w-full rounded-2xl aspect-[1.52] hover:scale-110 duration-300"
                src={data?.image}
            />
            <div className="flex flex-col px-5 mt-5 w-full">
                <div className="self-start font-medium text-black">
                    {data?.title}
                </div>
                <div className="mt-2.5 text-stone-300">
                    {data?.description?.slice(0, 60)}...
                </div>
            </div>
        </div>
    );
}
