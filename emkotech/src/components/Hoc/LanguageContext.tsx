import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState('az');

    // Update localStorage when language changes
    useEffect(() => {
        localStorage.setItem('accept-language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
