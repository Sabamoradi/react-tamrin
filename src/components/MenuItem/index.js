const MenuItem = ({ menuData }) => {
  return (
    <section className="section-center">
      {menuData.map(el => {
        return (
          <article className="menu-item" key={el.id}>
            <img src={el.img} className="photo" />
            <div className="item-info">
              <h4>
                {el.category}
              </h4>
              <header>
                <h4>
                  {el.title}
                </h4>
                <h4 className="price">
                  ${el.price}
                </h4>
              </header>
              <p className="item-text">
                {el.desc}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default MenuItem;
