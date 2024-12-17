export interface CameraData {
    id: number;
    title: string;
    description: string;
    image: string;
    image2: string;
    image3: string;
}
export interface AboutBunnerItem {
    id: number;
    title: string;
    description: string;
    image: string;
}
export type TranslationData = Record<string, string>;

export interface Translation {
    Layihələr: string;
    Xəbərlər: string;

    Daha_çox: string;
    data: TranslationData;
}
export interface AboutBunner {
    data: AboutBunnerItem[];
}
export interface AboutData {
    data: CameraData[];
}
export interface AboutBannerItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

export interface AboutUsProps {
    aboutData: AboutData;
    aboutBannerData: AboutBunner;
    translationsData: Translation;
}
export interface Project {
    slug: string;
    id: number;
    title: string;
    description: string;
    image: string;
}
interface NewsItem {
    slug: string;
    id: number;
    image: string;
    title: string;
    short_description: string;
    date: string;
    views: number;
}
export interface news {
    data: NewsItem[];
    total_pages: number;
}

export interface ContactData {
    id: number;
    icon: string;
    data: string;
}

export interface ContactsData {
    image: string;
    data: ContactData[];
    iframe: string;
}
