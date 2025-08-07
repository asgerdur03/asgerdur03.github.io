'use client'

import confetti from 'canvas-confetti';

import Image from "next/image"
import styles from "./About.module.css"
export default function About() {    

    const handleClick = () => {
        confetti({
            particleCount: 300,
            startVelocity: 30,
            spread: 360
        });
    };

    const openPDF = () => window.open("/ferilskra_asgerdur_gunnarsdottir.pdf", "_blank");
    
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutHeader}>
                <h1>Um mig</h1>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <p>blblblblblblablalba,</p>
                    <p className={styles.todo}>Vefsíða er í vinnslu</p>
                    <button  className={styles.button} onClick={openPDF}>Ferilskrá</button>

                </div>
                <div className={styles.aboutImage}>
                    <Image src="/pikachu.svg" alt="inspo pic" width={100} height={60} onClick={handleClick}/>
                </div>

                
            </div>
        </section>
    );
}