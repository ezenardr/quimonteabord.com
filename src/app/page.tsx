import Link from 'next/link';
import Styles from './home.module.scss';
import Image from 'next/image';
import Hero from '../img/image 1.svg';
import Blog from '../img/book.webp';
import Commu from '../img/communaute.webp';
import * as Motion from '@/lib/motion';
import { fadeIn } from '@/lib/variants';

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
            <header className={Styles.header}>
                <div className={Styles.heroBox}>
                    <div className={Styles.heroTextBox}>
                        <Motion.p {...variants('down', 0.2)}>
                            Qui monte à bord
                        </Motion.p>
                        <Motion.h1 {...variants('', 0.1)}>
                            Qui monte à bord
                        </Motion.h1>
                        <Motion.p {...variants('up', 0.2)}>
                            Qui monte à bord
                        </Motion.p>
                        <Motion.span {...variants('', 0.9)}>
                            <Link href="https://blog.quimonteabord.com">
                                Blog
                            </Link>
                        </Motion.span>
                    </div>
                    <Motion.div
                        {...variants('left', 0.3)}
                        className={Styles.heroImgBox}
                    >
                        <Image
                            src={Hero}
                            alt="People writing on board"
                            width={300}
                            height={300}
                            priority
                        />
                    </Motion.div>
                </div>
            </header>
            <section className={Styles.blogSection}>
                <div className={Styles.blogBox}>
                    <div className={Styles.grid1}>
                        <Motion.h2 {...variants('right', 0.3)}>Blog</Motion.h2>
                        <Motion.div
                            {...variants('right', 0.5)}
                            className={Styles.line}
                        ></Motion.div>
                        <Motion.p {...variants('right', 0.6)}>
                            &quot;Naviguer dans les eaux de Qui monte à bord est
                            une expérience inoubliable. Un blog qui me pousse à
                            explorer des horizons nouveaux et à partager mes
                            histoires avec une communauté passionnée.&quot;
                        </Motion.p>
                    </div>
                    <Motion.div
                        {...variants('left', 0.4)}
                        className={Styles.grid2}
                    >
                        <p>
                            Notre blog est né de la passion pour
                            l&apos;écriture, l&apos;échange d&apos;idées et le
                            désir de créer une communauté vibrante. Ici, nous
                            célébrons le pouvoir des mots pour inspirer,
                            émouvoir et transformer. Notre mission est de donner
                            vie aux pensées, de partager des récits captivants
                            et de cultiver un espace où chacun peut trouver sa
                            place.
                        </p>
                        <p>
                            Que tu sois un voyageur de l&apos;écriture ou un
                            explorateur en herbe, notre navire littéraire
                            t&apos;invite à prendre part à un périple où
                            l&apos;imagination est la boussole et les mots, les
                            voiles.
                        </p>
                    </Motion.div>
                    <Motion.div
                        {...variants('left', 0.5)}
                        className={Styles.grid3}
                    >
                        <p>
                            Fais partie de cette belle aventure où les histoires
                            se tissent, les idées prennent vie. Nous sommes
                            enchantés de t&apos;accueillir dans notre équipage,
                            prêt à écrire les chapitres les plus éblouissants de
                            Qui monte à bord.
                        </p>
                        <div className={Styles.imgBox}>
                            <Image src={Blog} alt="Person passing sheet" fill />
                        </div>
                    </Motion.div>
                </div>
            </section>
            <section className={Styles.commuSection}>
                <div className={Styles.commuBox}>
                    <Motion.div
                        {...variants('right', 0.3)}
                        className={Styles.imgBox}
                    >
                        <Image
                            src={Commu}
                            alt="People talking to each other"
                            fill
                        />
                    </Motion.div>
                    <Motion.div
                        {...variants('left', 0.4)}
                        className={Styles.textBox}
                    >
                        <h2>
                            Rejoins la communauté pour explorer ensemble les
                            horizons infinis des mots.
                        </h2>
                        <p>
                            La magie de notre communauté réside dans les liens
                            que nous tissons ensemble. Des amitiés se forgeront
                            au fil des échanges, des inspirations naîtront de
                            chaque commentaire et des découvertes enchanteresses
                            émergeront de chaque article.
                        </p>
                    </Motion.div>
                </div>
            </section>
        </>
    );
}
