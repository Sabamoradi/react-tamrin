const MenuBtn = ({ categories , filterItem }) => {
  //bind class for showing active item
  return (
    <div className="btn-container">
      {categories.map((el,index) => {
        return <button key={index} className="filter-btn" onClick={() => filterItem(el)}>{el}</button>;
      })}
    </div>
  );
};
export default MenuBtn;
