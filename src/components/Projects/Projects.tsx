import styles from "./Projects.module.css"
import Card from "../Card/Card";
export default function Projects() {
    return (
        <section className={styles.projects}>    
            <h1>Projects</h1>
            <p>card með hverju verkefni</p>

            <Card title={"Project 1"} description={"description"} link={"https://github.com/asgerdur03"}/>
            <Card title={"Project 2"} description={"description"} link={"https://github.com/asgerdur03"}/>
            <Card title={"Project 3"} description={"description"} link={"https://github.com/asgerdur03"}/>
            
        </section>
    );
}