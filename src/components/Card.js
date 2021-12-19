import { useState } from 'react';
import './Card.css';
import PeopleList from './peopleList';
import { data } from '../utils/data';

function Card() {
    var [arrayVal, setArrayVal] = useState(data);
    
    const clearAllData = () => {
        setArrayVal((existingArrayData) => {
            return existingArrayData = [];
        });
    }

    return (
        <div className="card">
            <div className="card__details">
                <h3>{arrayVal.length} birthdays today</h3>
                <div className="people-list">
                    {
                        arrayVal.map((item) => {
                            return (
                                <PeopleList person={item} key={item.id} />
                            )
                        })
                    }
                </div>
                <div>
                    <button className="btn" onClick={clearAllData}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Card;