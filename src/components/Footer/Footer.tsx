import styles from "./Footer.module.css"

export default function Footer() {
    return <>
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerIcons}>
                <p>icon1</p>
                <p>icon2</p>
                <p>icon3</p>
            </div>
            <div className={styles.footerLinks}>
                <p>link1</p>
                <p>link2</p>
                <p>link3</p>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>Copyright &copy;2025; Designed by <span className="designer">Ásgerður</span></p>
        </div>
    </footer>
    
    </>

}