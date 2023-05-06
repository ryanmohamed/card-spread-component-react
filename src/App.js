import Stack from "./Stack/Stack";
import Card from "./Stack/Card";
import Dots from "./Stack/Dots";
import colors from "./colors";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Stack>
        <Card>
          <p>Quizitiv</p>
        </Card>
        <Card>
          <p>PetMatcher</p>
        </Card>
        <Card>
          <p>Student++</p>
        </Card>
        <Card>
          <p>OAuth 2.0</p>
        </Card>
        <Dots />
      </Stack>
    </div>
  );
}
