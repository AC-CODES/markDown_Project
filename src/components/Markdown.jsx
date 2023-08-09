import { useState } from "react";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markdown, setMarkdown] = useState(" ## Markdown Preview, #Hey");
  return (
    <main>
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
};

export default Markdown;
