import styles from "./Projects.module.css"
import Card from "../Card/Card";
export default function Projects() {

    /**
     * TODO: gera card með actual upplýsingum
     */
    const CardInfo =[
    {
        image: "./pikachu.svg",
        title: "Project 1",
        description: "This is a project descriptionhis is a project deschis is a project deschis is a project deschis is a project deschis is a project desc",
        technologies: ["React", "TypeScript", "CSS"],
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example"
    },
    {
        image: "./pikachu.svg",
        title: "Project 2",
        description: "This is a project descriptionheschis is a project deschis is a project desc",
        technologies: ["React", "TypeScript", "hesSS"],
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example"
    },
    {
        image: "./pikachu.svg",
        title: "Project 3",
        description: "This is a project descriptionhis is a project deschis is a project deschis is a project deschis is a project deschis is a project desc",
        technologies: ["React", "TypeScript", "CSS"],
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example"
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