import './PeopleList.css';

function PeopleList(props) {
    return (
        <div className="person-info">
            <div className="person-info__content">
                <div>
                    <img src={props.person.img} alt="" className="img" />
                </div>
                <div className="person_details">
                    <h4>{props.person.name}</h4>
                    <p>{props.person.age} years</p>
                </div>
            </div>
        </div>
    )
}

export default PeopleList;