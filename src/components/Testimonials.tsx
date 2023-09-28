'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { fadeIn } from '@/app/variants';
import { motion } from 'framer-motion';

type testimonials = { name: string; text: string };
const testimonials: Array<testimonials> = [
    {
        name: 'Léa H.',
        text: "Ce blog est une bouffée d'air frais dans ma vie quotidienne. Les articles sont variés, intéressants et toujours bien écrits. Je suis reconnaissante d'avoir découvert 'Qui monte à bord'.",
    },
    {
        name: 'Sophie R.',
        text: "Je suis tombée sous le charme de 'Qui monte à bord' dès ma première lecture. Les articles sont écrits avec une telle passion et une telle profondeur que je me sens transportée à chaque fois. C'est un véritable trésor pour les amoureux des mots.",
    },
    {
        name: 'David L.',
        text: "Ce blog est une source inépuisable d'inspiration. Les histoires captivantes et les conseils sur l'écriture ont amélioré ma propre plume. 'Qui monte à bord' est un compagnon précieux pour tout écrivain en herbe.",
    },
    {
        name: 'Emma S.',
        text: "Je me sens privilégiée de faire partie de la communauté de 'Qui monte à bord'. Les discussions enrichissantes et les histoires émouvantes m'ont aidée à grandir en tant qu'écrivaine et en tant que personne.",
    },
    {
        name: 'Lucas P.',
        text: "Ce blog m'a redonné le goût de la lecture. Chaque article est une aventure en soi. J'ai appris, ri, et même versé quelques larmes en lisant les merveilles de 'Qui monte à bord'.",
    },
    {
        name: 'Isabelle M.',
        text: "J'attends chaque nouvel article avec impatience. 'Qui monte à bord' est devenu un rituel pour moi, un moment de détente où je peux me perdre dans des mondes fascinants et des réflexions profondes.",
    },
    {
        name: 'Antoine G.',
        text: "Ce blog est un trésor caché pour les amateurs de littérature. Il m'a ouvert les yeux sur des auteurs et des styles que je n'aurais jamais découverts autrement. Une vraie pépite littéraire.",
    },
    {
        name: 'Clara B.',
        text: "L'équipe derrière 'Qui monte à bord' est incroyablement talentueuse. Leurs articles sont non seulement bien écrits, mais ils sont également profonds et stimulants. Une véritable source d'inspiration.",
    },
    {
        name: 'Martin C.',
        text: "J'ai commencé à écrire sérieusement après avoir lu les articles de ce blog. Ils m'ont donné la confiance nécessaire pour partager mes propres histoires. 'Qui monte à bord' a transformé ma vie.",
    },
    {
        name: 'Alice D.',
        text: "Je suis tombée amoureuse de la communauté de 'Qui monte à bord'. C'est un endroit où je me sens vraiment comprise en tant qu'écrivaine. Chacun ici partage la même passion pour les mots.",
    },
];
const variants = (direction: string, delay: number) => {
    return {
        variants: fadeIn(direction, delay),
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.7 },
    };
};

export default function Testimonials() {
    const [index, setIndex] = useState<number>(0);
    const img = testimonials[index].name.split(' ')[0]; // take the first word to match the image import
    function handleNext() {
        if (index < 9) setIndex((prev) => prev + 1);
        if (index === 9) setIndex(0);
    }
    function handlePrevious() {
        if (index > 0) setIndex((prev) => prev - 1);
        if (index === 0) setIndex(9);
    }
    return (
        <motion.div {...variants('left', 0)} className="about-img-box">
            <Image
                src={require(`@/img/testimonials/${testimonials[index].name}.jpg`)}
                loading="eager"
                alt={testimonials[index].name}
                fill
            />
            <div className="testimonial">
                <p className="testimonial-text">{testimonials[index].text}</p>
                <div className="testimonial-action">
                    <p className="testimonial-name">
                        {testimonials[index].name}
                    </p>
                    <div className="action">
                        <button aria-label="previous" onClick={handlePrevious}>
                            <IoIosArrowBack />
                        </button>
                        <button aria-label="next" onClick={handleNext}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
