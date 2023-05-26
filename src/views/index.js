// import BirthdayReminder from './1-BirthdayReminder/index'
// import Tours from "./views/2-Tours/index";
// import Reviews from './views/3-Reviews/index'
// import Accordion from './views/4.Accordion/index'
// import Menu from './views/5.Menu/index'
// import Tabs from "./views/6.Tabs/index";
// import Lorem from './views/8-lorem'
// import Navbar from './views/11-navbar'
import { Link } from "react-router-dom";
const routerItem = [
  {
    route: "/birthday",
    title: "Birthday",
    id: 1,
    src: "https://all-react-projects.netlify.app/images/pro1.png",
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
                        <h4>Birthday Remainder</h4>
                      </div>
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* <BirthdayReminder /> */}
      {/* // <Tours />
    // <Reviews />
    // <Accordion />
    // <Menu />
    // <Tabs />
    // <Lorem />
    // <Navbar /> */}
    </>
  );
};
export default Views;
