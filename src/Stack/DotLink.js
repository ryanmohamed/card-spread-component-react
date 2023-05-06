import styles from "./Stack.module.css";
const DotLink = ({ name, href, children, ...props }) => {
  return (
    <a
      className={styles.DotLink}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default DotLink;
