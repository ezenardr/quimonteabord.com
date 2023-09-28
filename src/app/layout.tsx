import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Accueil | Qui Monte à bord',
    description:
        'Célébrons le pouvoir des mots pour inspirer, émouvoir et transformer',
    metadataBase: new URL('https://quimonteabord.com'),
    alternates: {
        canonical: 'https://quimonteabord.com',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
