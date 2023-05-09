import './index.css';
import questions from './data'
import AccordionItem from '../../components/AccordionItem/index'
const Accordion = () =>{
    return(
        <main className="main-accordion">
            <div className='container'>
                <h3>Questions And Answers About Login</h3>
                <section className="info">
                    {
                        questions.map((el)=>{
                            return <AccordionItem key={el.id} questionItem={el} />
                        })
                    }
                </section>
            </div>
        </main>
    )
}
export default Accordion;