import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LanguageProvider } from '@/components/Hoc/LanguageContext';
import Header from '@/components/Header';
import NextNProgress from 'nextjs-progressbar'; // Import NextNProgress
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer } from '@/components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const router = useRouter();

    // Map routes to active index
    const { lang, page } = router.query;

    useEffect(() => {
        // console.log(router.pathname);

        const path = `/${lang}${page === undefined ? '' : `/${page}`}`;

        const routeToIndex: { [key: string]: number } = {
            '/': 0,
            '/az': 0,
            '/en': 0,
            '/ru': 0,
            '/en/products': 1,
            '/az/məhsullar': 1,
            '/ru/продукты': 1,
            '/en/products/[id]': 1,
            '/az/məhsullar/[id]': 1,
            '/ru/products/[id]': 1,
            '/az/haqimizda': 2,
            '/en/about': 2,
            '/ru/пронас': 2,
            '/az/layihələr': 3,
            '/en/projects': 3,
            '/ru/проекты': 3,
            '/projects/[id]': 3,
            '/az/xəbərlər': 4,
            '/en/news': 4,
            '/ru/новости': 4,
            '/contact': 5,
            '/продукты/[id]': 4,

            // Add more routes as needed
        };
        setActiveIndex(routeToIndex[path]);
    }, [lang, page]);
    // const activeIndex = routeToIndex[router.pathname] || 0; // Default to 0 if no match

    return (
        <LanguageProvider>
            <QueryClientProvider client={queryClient}>
                {/* Progress bar component */}
                <Head>
                    <title>My Awesome Page</title>
                    <meta property="og:title" content="Emkotech" />
                    <meta
                        property="og:description"
                        content="This is an example of an Open Graph description."
                    />
                    <meta property="og:image" content="/path-to-image.jpg" />
                    <meta
                        property="og:url"
                        content="https://www.Emkotech.com"
                    />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <NextNProgress
                    color="#29d" // Customize the color
                    startPosition={0.3} // Initial starting position
                    stopDelayMs={200} // Delay in ms before stopping
                    height={5} // Height of the progress bar
                    showOnShallow={true} // Show progress for shallow routing
                />
                <Header activeindex={activeIndex} />
                <Component {...pageProps} />
                <Footer />

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </LanguageProvider>
    );
}
