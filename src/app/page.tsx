import Link from 'next/link';
import Styles from './home.module.scss';
import Image from 'next/image';
import Hero from '../img/image 1.svg';
import Blog from '../img/book.webp';
import Commu from '../img/communaute.webp';

export default function Home() {
    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.heroBox}>
                    <div className={Styles.heroTextBox}>
                        <p>Qui monte à bord</p>
                        <h1>Qui monte à bord</h1>
                        <p>Qui monte à bord</p>
                        <Link href="https://blog.quimonteabord.com">Blog</Link>
                    </div>
                    <div className={Styles.heroImgBox}>
                        <Image
                            src={Hero}
                            alt="People writing on board"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </header>
            <section className={Styles.blogSection}>
                <div className={Styles.blogBox}>
                    <div className={Styles.grid1}>
                        <h2>Blog</h2>
                        <div className={Styles.line}></div>
                        <p>
                            &quot;Naviguer dans les eaux de Qui monte à bord est
                            une expérience inoubliable. Un blog qui me pousse à
                            explorer des horizons nouveaux et à partager mes
                            histoires avec une communauté passionnée.&quot;
                        </p>
                    </div>
                    <div className={Styles.grid2}>
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
                    </div>
                    <div className={Styles.grid3}>
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
                    </div>
                </div>
            </section>
            <section className={Styles.commuSection}>
                <div className={Styles.commuBox}>
                    <div className={Styles.imgBox}>
                        <Image
                            src={Commu}
                            alt="People talking to each other"
                            fill
                        />
                    </div>
                    <div className={Styles.textBox}>
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
                    </div>
                </div>
            </section>
        </>
    );
}
