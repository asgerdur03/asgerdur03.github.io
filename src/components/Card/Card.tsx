import styles from "./Card.module.css"


/* TODO: gera actual card porps */
type CardProps = {
    title: string;
    description: string;
    link: string;
}
export default function Card({title, description, link}: CardProps) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}>Link</a>
        </div>
    );
}