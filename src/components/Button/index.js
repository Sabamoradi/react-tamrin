import './index.css'

const BaseButton = ({title,clickBtn,btnColor,color}) =>{
    return(
        <button className="btn" style={{backgroundColor:btnColor,color:color}} onClick={clickBtn}>
            {title}
        </button>
    )
}
export default BaseButton;