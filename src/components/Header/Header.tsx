'use client'
import Image from "next/image"
import styles from "./Header.module.css"
import { useState } from "react";

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return <header className={styles.header}>
    <div className={styles.container}>
        <div className={styles.headerContent}>
            <div className={styles.navLogo}>
                <Image src="/sheep.svg" alt="inspo pic" width={60} height={60} onClick={() => scrollTo('about')}/>
                ÁJG
            </div>

            {/* opin nav */}
            <nav className={styles.bigNav}>
                <button className={styles.bigNavButton} onClick={() => scrollTo('about')}>Um mig</button>
                <button className={styles.bigNavButton} onClick={() => scrollTo('projects')}>Verkefni</button>
            </nav>

            {/* hamburger */}
            
            <button 
                className={styles.hamburgerButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                
                {isMenuOpen ? (
                    <CloseIcon fontSize="large"/>
                ): (
                    <LunchDiningIcon fontSize="large"/>
                )}
            </button>
        </div>

<<<<<<< HEAD
        {/* open burger */}
        {isMenuOpen && (
            <nav className={styles.smallNav}>
                <div className={styles.smallNavContainer}>
                    <button className={styles.smallNavButton} onClick={() => scrollTo('about')}>Um mig</button>
                    <button className={styles.smallNavButton} onClick={() => scrollTo('projects')}>Verkefni</button>
                </div>
            </nav>
        )}  
    </div>
    </header>
=======
        <div>
            <p>Rest a nav bar, hamburger í minna en ~500px</p>
        </div>

        
    </nav>
    
    
    </>
>>>>>>> 87be48e5043d8be7ae19c7353e1cfe6418ef79c3
}