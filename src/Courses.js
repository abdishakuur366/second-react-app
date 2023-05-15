import './style.css'
export function CourseList()
{
    const styles={backgroundColor:"yellow",color:"white",fontSize:"30px"}
    return (
        <ol>
            <li style={
                {backgroundColor:"black",color:"white",fontSize:"40px"
            ,borderRadius:"40px"
            }
                }>React js</li>
            <li style={styles}>C#</li>
            <li style={
                {color:"blue"}
                }>JavaScript</li>
            <li className='st'>HTML & CSS</li>
        </ol>
    )
}

function Students()
{
    return (
        <ul>

           <li>Ahmed</li> 
           <li>Ali</li> 
           <li>Amran</li> 
        </ul>
    )
}
export default Students