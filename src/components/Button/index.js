const BaseButton = ({title,clickBtn}) =>{
    return(
        <button className="btn" onClick={clickBtn}>
            {title}
        </button>
    )
}
export default BaseButton;