'use client'
import styles from "./Card.module.css"
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


/* TODO: gera actual card porps */
type CardProps = {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    
}
export default function Card({image, title, description, technologies, demoUrl, githubUrl}: CardProps) {
    

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={image} alt="inspo pic" width={500} height={300}/>
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardTechnologies}>
                    {technologies.map((tech, index) => (
                        <span className={styles.cardTech} key={index}>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className={styles.cardLinks}>
                    <a href={demoUrl} className={styles.demo}>
                        <LaunchIcon fontSize="small" />
                        <span>Demo</span>
                    </a>
                    <a href={githubUrl} className={styles.code}>
                        <GitHubIcon fontSize="small" />
                        <span>Code</span>
                    </a>
                </div>
            </div>       
        </div>
    );
}