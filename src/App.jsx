import "./_c-style.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import Navbar from "./components/Navbar";
import Markdown from "./components/Markdown";

function App() {
  return (
    <>
      <Navbar />
      <Markdown />
    </>
  );
}

export default App;
