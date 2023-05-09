const TabsButton = ({ categoriesData, activeItem, itemIndex }) => {
  return (
    <div className="btn-container">
      {categoriesData.map((el, index) => {
        return (
          <button
            key={index}
            className={`job-btn ${index === itemIndex && "active-btn"}`}
            onClick={() => activeItem(el, index)}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};
export default TabsButton;
