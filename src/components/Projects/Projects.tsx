import styles from "./Projects.module.css"
import Card from "../Card/Card";
export default function Projects() {

    /**
     * TODO: gera card með actual upplýsingum
     */
    const CardInfo =[
    {
        image: "/images/cat.jpg",
        title : "Random Cat Generator",
        description: "Random cat generator, hægt er að skrifa caption til að setja á random kött og hlaða niður myndinni",
        technologies: ["Javascript", "Web API"],
        demoUrl: "",
        githubUrl: "https://github.com/asgerdur03/vef-verkefni10"
    },
    {
        image: "./pikachu.svg",
        title : "Pokedex TCG checklist",
        description: "Tékklisti fyrir Pokedex challenge TCG. Í vinnslu",
        technologies: [],
        demoUrl: "https://github.com/asgerdur03/pokedex-checklist",
        githubUrl: "https://github.com/asgerdur03/pokedex-checklist"

    },
    {
        image: "/images/task-manager.jpg",
        title: "Task Manager",
        description: "Spring API, skrifaður fyrir áfangann \"Hugbúnaðarverkefni 1\". Framendi skrfaður með thymeleaf, og er hýstur á Render (ATH: Render, free version er mjöööög hægt á startupi). Demo user: {username: 'demo1', password: 'demo1'}",
        technologies: ["Spring", "Thymeleaf", "CSS"],
        demoUrl: "https://hugboverkefni1.onrender.com/",
        githubUrl: "https://github.com/asgerdur03/HugboVerkefni1/tree/api"
    },
    {
        image: "/images/cat2.png",
        title : "Spottaði kött",
        description: "Vefsíða/samfélagsmiðill til að pósta ef þú spottaðir kött. Web API frá grunni og framendi með React. Fyrsta verkefnið mitt í React, gæti verið betra. Demo user: {username: 'admin', email: 'admin@admin.com', password: 'password'}",
        technologies: ["Typescript", "Web API", "Postgresql","Prisma", "Hono", "React" ],
        demoUrl: "https://einstaklings-react.vercel.app/",
        githubUrl: "https://github.com/asgerdur03/Einstaklingsverkefni-allt/blob/main/plan.md"

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