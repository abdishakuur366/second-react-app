import './style.css'
const Semesters=(props)=>
{
    return (
        <ul>
<li>{props.semName}</li>
<li>{props.course}</li>
<li>{props.lecturer}</li>
        </ul>
    )
}

export default Semesters