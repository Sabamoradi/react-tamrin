const BaseButton = (props) =>{
    return(
        <button className="btn" onClick={props.clickBtn}>
            {props.title}
        </button>
    )
}
export default BaseButton;