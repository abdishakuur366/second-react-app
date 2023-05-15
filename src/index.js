import {createRoot} from 'react-dom/client';
// import { CourseList } from './Courses.js' // for Named Export
// import Semesters from './Sem.js';// for Defualt Export
// import Profile from './Profile.js';
// import Students from './Courses.js'
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar';

 
let container=document.getElementById("root");
let rnd=createRoot(container);
//Dynamic Code
let content=<h1>Welcome to Computer Science Class</h1>
let res=5*5
let res2="Welcome"
let num=[30,40,50,65,80,90]
let bool=false;
let results=num.map((item)=>(
  
    // <li>{bool?item:<h2>Sorry Sir/Madam we could found.</h2>}</li>// Ternary Operator
    <li>{bool && item}</li>// Short Circuit
))
// function Header(props)
// {
//     console.log(props)
//     return (<div>
//     <h1>Welcome Class</h1>
//     <h2>{props.name}</h2>
//     <h2>{props.course}</h2>
//     <h2>{props.Sem}</h2>
//     </div>)
// }
// End Dynamic Code
// rnd.render(<div>
//     <h1>{res}</h1>
//     <h2>{res2}</h2>
//     <input id="txtnum"></input>
//     <Header name="CA2010" course="React" Sem="6"></Header>
// </div>)
rnd.render(
<div>
<Header></Header>
<Sidebar></Sidebar>
<hr></hr>
<Footer></Footer>
</div>
)