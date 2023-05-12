

const SliderItem = ({data,itemIndex}) =>{
    return(
        <>
          {
            data.map((el,index)=>{
              let position = 'nexSlide'
              if(index === itemIndex){
                position = 'activeSlide'
              }
              if((index-1 === itemIndex) || (index === 0 && index === data.length-1)){
                position = 'lastSlide'
              }
              return(
                <article key={el.id} className={position}>
                  <img src={el.image} alt={el.name} className="person-img" />
                  <h4>
                    {el.name}
                  </h4>
                  <p className="title">{el.title}</p>
                  <p className="text">{el.quote}</p>
                </article>
              )
            })            
          }
        </>
    )
}
export default SliderItem;