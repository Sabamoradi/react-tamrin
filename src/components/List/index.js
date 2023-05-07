import { useEffect } from "react";
import './index.css'
const List = ({data}) =>{
    // const imgError = (image) =>{
    //     console.log('eher');
    //     image = ''
    // }
    return(
        <>
            {
                data.map((element)=>{
                    const {id,image,name,age} = element
                    return(
                        <div className="person" key={id}>
                            <img src={image} alt={name}/>
                            <div className="person-text">
                                <h4>
                                    {name}
                                </h4>
                                <h6>
                                    {age} years old
                                </h6>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;