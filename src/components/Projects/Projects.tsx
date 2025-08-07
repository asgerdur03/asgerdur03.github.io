import styles from "./Projects.module.css"
import Card from "../Card/Card";
import { describe } from "node:test";
export default function Projects() {

    /**
     * TODO: gera card með actual upplýsingum
     */
    const CardInfo =[
    {
        image: "/images/task-manager.jpg",
        title: "Task Manager",
        description: "Spring API, skrifaður fyrir áfangann \"Hugbúnaðarverkefni 1\". Framendi skrfaður með thymeleaf, og er hýstur á Render (ATH: Render, free version er mjöööög hægt á startupi). Demo user: {username: 'demo1', password: 'demo1'}",
        technologies: ["Spring", "Thymeleaf", "CSS"],
        demoUrl: "https://hugboverkefni1.onrender.com/",
        githubUrl: "https://github.com/asgerdur03/HugboVerkefni1/tree/api"
    },
    {
        image: "/images/cat.jpg",
        title : "Random Cat Generator",
        description: "Random cat generator, hægt er að skrifa caption til að setja á random kött og hlaða niður myndinni",
        technologies: ["Javascript", "Web API"],
        demoUrl: "https://random-cat-generato.netlify.app/",
        githubUrl: "https://github.com/asgerdur03/vef-verkefni10"
    }
    ]

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsHeader}>
                <h1>Verkefni</h1>
                <div className={styles.divider}></div>
                <p>Hér má sjá vekefni sem ég hef unnið að. </p>
            </div>
            <div className={styles.projectsCards}>
                {CardInfo.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        technologies={card.technologies}
                        demoUrl={card.demoUrl}
                        githubUrl={card.githubUrl}
                    />
                ))}
            </div>
            
        </section>
    );
}