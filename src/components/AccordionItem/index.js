import { useState } from "react";

const AccordionItem = ({ questionItem }) => {
  const [open, setOpen] = useState(false);
  const openBtn = () => {
    setOpen(!open);
  };
  return (
    <section className="info">
      <article className="question">
        <header>
          <h4>
            {questionItem.title}
          </h4>
          <button className="btn" onClick={openBtn}>
            {
                open ? 'close' : 'open'
            }
          </button>
        </header>
        {open
          ? <p>
              {questionItem.info}
            </p>
          : ""}
      </article>
    </section>
  );
};
export default AccordionItem;
