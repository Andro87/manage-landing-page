import styles from "./button.module.css";

export default function Button(props) {
    const { colour } = props;
    return (
        <button
            type="button"
            title="button"
            className={`${styles.button} ${styles[colour]}`}
        >
            Get Started
        </button>
    );
}
