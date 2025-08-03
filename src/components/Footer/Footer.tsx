'use client'

import styles from "./Footer.module.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function Footer() {
    return <>
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerInfo}>
                <p>blabla ehv lokaorð (contact me...etv)</p>
            </div>
            <div className={styles.footerIcons}>

                <div>
                    <a href="https://github.com/asgerdur03"><GitHubIcon/></a>
                    
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/%C3%A1sger%C3%B0ur-gunnarsd%C3%B3ttir-37a730292/"><LinkedInIcon/></a>

                </div>

                <div>
                    <a href="mailto:asgerdur03@gmail.com"><MailOutlineIcon/></a>
                    
                </div>

            </div>

        </div>
    </footer>
    
    </>

}