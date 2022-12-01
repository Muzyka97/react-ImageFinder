import styles from './button.module.css'; 

const Button = ({text, onClick}) =>{
    return(
        <button className={styles.Button} onClick={onClick}>{text}</button>
    )
};
export default Button;