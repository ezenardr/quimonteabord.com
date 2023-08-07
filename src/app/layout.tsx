import { Source_Serif_4 } from 'next/font/google';
import Footer from '@/components/Footer';
import './globals.scss';
import { Metadata } from 'next';

const source_Serif_4 = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap',
    variable: '--font-primary',
});

export const metadata: Metadata = {
    title: 'Accueil | Qui monte à bord',
    description:
        'Chaque page est un voyage onirique, chaque paragraphe est une mélodie enchanteresse qui caresse ton âme...',
    verification: {
        google: '8SgjsZuvo2mUT3hX9vaKhoUvddOwJugdQc8E8YfiWq4',
    },
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
            <body className={source_Serif_4.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
