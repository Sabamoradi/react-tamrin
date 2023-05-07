import { useState } from 'react';
import List from '../../components/List/index'
import data from './data'
import './index.css';
const BirthdayReminder = () => {
    const [item,SetItem] = useState(data)
    return(
        <main>
            <section className='container'>
                <h3>
                    {item.length} Birthday today
                </h3>
                <List data={item} />
            </section>
        </main>
    )
}
export default BirthdayReminder;