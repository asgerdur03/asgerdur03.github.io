import Image from "next/image"
import styles from "./Header.module.css"
export default function Header() {
    return <>
    <nav className={styles.nav}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <Image src="/pikachu.svg" alt="inspo pic" width={100} height={60}/>
        
    </nav>
    
    
    </>
}