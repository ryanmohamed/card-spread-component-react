import DotLink from "./DotLink";
import styles from "./Stack.module.css";
import colors from "../colors";
import Github from "../svgs/Github";
import LinkedIn from "../svgs/LinkedIn";
import Youtube from "../svgs/Youtube";
const shadow = { filter: "drop-shadow(0 2px 4px #0f0f0f)" };
const Dots = ({ ...props }) => {
  const { darkred, darkgreen, darkblue } = colors;
  return (
    <div className={styles.Dots} {...props}>
      <DotLink
        style={darkred}
        name="github"
        href="https://github.com/ryanmohamed"
      >
        <Github fill="none" stroke="whitesmoke" />
      </DotLink>
      <DotLink
        style={darkred}
        name="linkedin"
        href="https://www.linkedin.com/in/ryan-mohamed-41a253189/"
      >
        <LinkedIn fill="#0A66D2" />
      </DotLink>
      <DotLink
        style={darkred}
        name="youtube"
        href="https://www.linkedin.com/in/ryan-mohamed-41a253189/"
      >
        <Youtube />
      </DotLink>
    </div>
  );
};

export default Dots;
