import logo from './logo.svg';

import './style.css';
import Message from './Message';

function App() {
  const posts=[
    {
      id:1,
      post:"post1"
    },
    {
      id:2,
      post:"post2"
    },

  ]
  return (
    <div>
      
      <navbar>
        <a href='Home'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Flow</a>
        <a href='#'>Down</a>
      </navbar>
      <ul>
        {
         posts.map((item,index)=><li >(item.id) </li>)
        }
      
      </ul>
      <header>
        <div className='logo'>
          <h1 style={{color:"blue",fontSize:""}}>Abdishakuur</h1>
        </div>
      </header>
      <Message/>  
    </div>
  );
}

export default App;
