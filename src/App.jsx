import Navbar from "./components/Navbar";
import Markdown from "./components/Markdown";
import "./_c-style.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div id={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Markdown />
    </div>
  );
}

export default App;
