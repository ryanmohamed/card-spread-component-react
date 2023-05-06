import styles from "./Stack.module.css";
const Stack = ({ children }) => {
  return <div className={styles.Stack}>{children}</div>;
};

export default Stack;
