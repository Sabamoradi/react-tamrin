import { Link } from "react-router-dom";
const routerItem = [
  {
    route: "/birthday",
    title: "Birthday Remainder",
    id: 1,
    src: require("./assets/image/pro1.png"),
  },
  {
    route: "/tours",
    title: "Tours",
    id: 2,
    src: require("./assets/image/pro2.png"),
  },
  {
    route: "/reviews",
    title: "Reviews",
    id: 3,
    src: require("./assets/image/pro3.png"),
  },
  {
    route: "/accordion",
    title: "Accordion",
    id: 3,
    src: require("./assets/image/pro4.png"),
  },
  {
    route: "/menu",
    title: "Menu",
    id: 3,
    src: require("./assets/image/pro5.png"),
  },
];
const Views = () => {
  return (
    <>
      <div className="first-header">
        <h1>React Projects</h1>
      </div>
      <section className="projects-section">
        <div className="header">
          <h2>Basic Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="mainPro_wrapper">
          <ul className="mainPro">
            {routerItem.map((el) => {
              return (
                <li key={el.id}>
                  <article>
                    <Link to={el.route}>
                      <img src={el.src} />
                      <div className="footer">
                        <h4>{el.title}</h4>
                      </div>
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Views;
