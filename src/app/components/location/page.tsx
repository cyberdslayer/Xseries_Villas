'use client'

import styles from "./location.module.css"
import Image from "next/image"
import map from "@/assets/Map.svg"
import  Button  from "../button"
import { Lora } from 'next/font/google';

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '400'],
});

const Location = () => {
    return (
        <div className={styles.locationContainer}>
            <h2 className={lora.className}>Location</h2>
            <Image src={map} alt="Map" className={styles.map}/>
            <Button text="Get Direction" disabled={false} bgColor="buttonTransparent" />
        </div>
    )
}

export default Location;