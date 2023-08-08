import { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "./_c-style.css";
import "react-mde/lib/styles/css/react-mde-all.css";

function App() {
  const [markdown, setMarkdown] = useState(" ## Markdown Preview");

  return (
    <main>
      <header>
        <h2>Expresate con estilo</h2>
        <label>
          <input type="checkbox" />
          <span className="check"></span>
        </label>
      </header>
      <section className="markdown">
        <div className="boxholder">
          <ReactMde className="input" value={markdown} onChange={setMarkdown} />
        </div>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
