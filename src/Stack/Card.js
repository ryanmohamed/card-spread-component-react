import styles from "./Stack.module.css";
const Card = ({ children, ...props }) => {
  return (
    <div className={styles.Card} {...props}>
      {children}
    </div>
  );
};

export default Card;
