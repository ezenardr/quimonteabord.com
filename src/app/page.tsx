'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../img/logo.png';
import Icon from '../img/icon.png';
import Testimonials from '@/components/Testimonials';
import { BsArrowRight, BsInstagram } from 'react-icons/bs';
import { RiFacebookCircleLine, RiTwitterXFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';
import { fadeIn } from './variants';
import { motion } from 'framer-motion';
import './page.css';
import './responsive.css';

const variants = (direction: string, delay: number) => {
    return {
        variants: fadeIn(direction, delay),
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.7 },
    };
};
export default function Home() {
    return (
        <>
            <HeroSection />
            <BlogPreviewSection />
            <AboutSection />
            <AuthorSection />
            <Footer />
        </>
    );
}

function HeroSection() {
    return (
        <>
            <Navigation />
            <header>
                <motion.h1 {...variants('up', 0)} className="heading-primary">
                    Explorez Ensemble les Horizons Infinis des Mots
                </motion.h1>
                <motion.p
                    {...variants('up', 0.1)}
                    className="body-text hero-text"
                >
                    Ici, nous célébrons le pouvoir des mots pour inspirer,
                    émouvoir et transformer. Notre mission est de donner vie aux
                    pensées, de partager des récits captivants et de cultiver un
                    espace où chacun peut trouver sa place.
                </motion.p>
                <motion.div {...variants('up', 0.2)} className="cta-box">
                    <Link
                        href="https://blog.quimonteabord.com"
                        className="btn btn-primary blog-link"
                    >
                        Visitez le Blog
                        <BsArrowRight />
                    </Link>
                    <Link href="#about" className="btn btn-secondary">
                        A Propos
                    </Link>
                </motion.div>
            </header>
        </>
    );
}

function Navigation() {
    return (
        <nav className="navigation">
            <Image src={Logo} alt="Logo of Qui Monte à Bord" loading="eager" />
        </nav>
    );
}

function BlogPreviewSection() {
    return (
        <motion.section {...variants('up', 0)} className="blog-preview-section">
            <div className="preview-img-box"></div>
            <div className="preview-article">
                <div className="article-top">
                    <p className="body-text">Article Récent</p>
                    <div className="tags">
                        <p className="tag body-text">Developpement</p>
                        <p className="tag body-text">Ecriture</p>
                    </div>
                </div>
                <div className="article">
                    <p className="article-title">
                        Le Pouvoir de la Narration : Comment Raconter des
                        Histoires Qui Captivent
                    </p>
                    <p className="body-text article-description">
                        Découvrez les éléments essentiels qui composent une
                        histoire réussie et apprenez comment maîtriser
                        l&apos;art de captiver et d&apos;inspirer vos lecteurs
                        grâce à la magie des mots.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="section-about">
            <motion.div {...variants('right', 0)} className="about-text-box">
                <p className="about-title">A Propos du blog</p>
                <p className="about-text body-text">
                    Notre blog est né de la passion pour l&apos;écriture,
                    l&apos;échange d&apos;idées et le désir de créer une
                    communauté vibrante. Que tu sois un voyageur de
                    l&apos;écriture ou un explorateur en herbe, notre navire
                    littéraire t&apos;invite à prendre part à un périple où
                    l&apos;imagination est la boussole et les mots, les voiles.
                </p>
                <div className="about-cta">
                    {/* btn should point to blog, login or something else */}
                    <Link href="/" className="btn btn-primary">
                        Commencer
                    </Link>
                    {/* An about page ?
                     */}
                    <Link href="/" className="btn btn-secondary">
                        En Savoir Plus
                    </Link>
                </div>
            </motion.div>
            <Testimonials />
        </section>
    );
}

function AuthorSection() {
    return (
        <section className="author-section">
            <motion.div
                {...variants('right', 0)}
                className="author-img-box"
            ></motion.div>
            <motion.div {...variants('up', 0)} className="author-text-box">
                <p className="author-text">
                    &quot;Ensemble, nous écrivons les chapitres les plus
                    éblouissants de cette histoire littéraire. Votre passion,
                    votre engagement et votre talent sont la véritable essence
                    de
                    <span className="text-acccent"> Qui monte à bord</span>, et
                    je suis honorée de faire partie de cette aventure avec
                    vous.&quot;
                </p>
                <p className="author">Messara Ezenard</p>
                <p className="author-role">Auteur</p>
            </motion.div>
        </section>
    );
}

function Footer() {
    const date = new Date();
    const now = date.getFullYear();
    return (
        <footer>
            <nav>
                <Link href="/">
                    <Image
                        src={Icon}
                        alt="Logo of Qui Monte à Bord"
                        loading="eager"
                    />
                </Link>
                <ul className="footer-links">
                    <li>
                        <Link className="footer-link" href="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="footer-link"
                            href="https://blog.quimonteabord.com"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className="footer-link" href="#about">
                            A Propos
                        </Link>
                    </li>
                </ul>
                <div className="social">
                    <Link href="https://web.facebook.com/profile.php?id=100091865442401">
                        <RiFacebookCircleLine className="icon" />
                    </Link>
                    <Link href="https://www.instagram.com/mesarah16/?hl=fr">
                        <BsInstagram className="icon" />
                    </Link>
                    <Link href="/">
                        <RiTwitterXFill className="icon" />
                    </Link>
                </div>
            </nav>
            <div className="separator"></div>
            <p className="copyright">
                &copy; {now} Tout Droits Réservés |{' '}
                <Link href="https://quimonteabord.com">
                    www.quimondeabord.com
                </Link>
            </p>
            <p className="dev">
                Developpé par{' '}
                <Link href="https://ezenardr.dev">
                    ezenardr
                    <FiExternalLink />
                </Link>
            </p>
        </footer>
    );
}
