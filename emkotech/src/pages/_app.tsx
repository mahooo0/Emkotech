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

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const router = useRouter();

    // Map routes to active index

    useEffect(() => {
        const routeToIndex: { [key: string]: number } = {
            '/': 0,
            '/products': 1,
            '/products/[id]': 1,
            '/aboutus': 2,
            '/projects': 3,
            '/projects/[id]': 3,
            '/news': 4,
            '/contact': 5,

            '/news/[id]': 4,

            // Add more routes as needed
        };
        setActiveIndex(routeToIndex[router.pathname]);
    }, [router.pathname]);
    // const activeIndex = routeToIndex[router.pathname] || 0; // Default to 0 if no match

    return (
        <LanguageProvider>
            <QueryClientProvider client={queryClient}>
                {/* Progress bar component */}
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
