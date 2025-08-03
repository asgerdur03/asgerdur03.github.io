import Image from "next/image"
import styles from "./Header.module.css"

export default function Header() {
    /*
    TODO: gera hamburger menu, gera meeee popup þegar ýtt er á kind
    
    */


    return <>
    <nav className={styles.nav}>
        <div className={styles.navLogo}>
            <Image src="/sheep.svg" alt="inspo pic" width={100} height={60}/>
        </div>

        <div>
            <p>Rest a nav bar, hamburger í minna en ~500px</p>
        </div>
        
    </nav>
    
    
    </>
}