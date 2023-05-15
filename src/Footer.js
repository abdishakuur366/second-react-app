
//import raki from'./rakia.png'
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div>
        <img src={raki} className="raki" alt="kkkkk" />
      </div> */}
      <p>&copy; {new Date().getFullYear()} @fatxi</p>
    </footer>
  );
};
export default Footer