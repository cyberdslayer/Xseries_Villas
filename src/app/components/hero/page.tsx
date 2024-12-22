'use client'

import Image from "next/image"
import ImageSelector from "@/assets/ImageTransition.svg"
import DetailImage from "@/assets/DetailPhoto.svg"
import styles from "./hero.module.css"
import { Inter,Lora  } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '400', '100'],
});

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '400', '400'],
});

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>
                <h1 className={lora.className}>Sea La Vie</h1>
                <div className={styles.location}>
                    <p className={inter.className}>Alibaug, Maharashtra</p>
                </div>
                <div className={styles.smallLogo}>
                </div>
            </div>
            <Image src={ImageSelector} alt="Villa next photo" className={styles.menu}/>
            <Image src={DetailImage} alt="Small house" className={styles.detail}/>
        </div>
    )
}

export default Hero;