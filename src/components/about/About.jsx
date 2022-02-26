// import "./about.css";
// import Award from "../../img/award.png";

// const About = () => {
//   return (
//     <div className="a">
//       <div className="a-left">
//         <div className="a-card bg"></div>
//         <div className="a-card">
//           <img
//             src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="a-img"
//           />
//         </div>
//       </div>
//       <div className="a-right">
//         <h1 className="a-title">About Me</h1>
//         <p className="a-sub">
//           It is a long established fact that a reader will be distracted by the
//           readable content.
//         </p>
//         <p className="a-desc">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
//         </p>
//         <div className="a-award">
//           <img src={Award} alt="" className="a-award-img" />
//           <div className="a-award-texts">
//             <h4 className="a-award-title">International Design Awards 2021</h4>
//             <p className="a-award-desc">
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
//               and fugit.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
///////////////////////////////////////////////////////////////////////////////



import React from 'react'
import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
          <div className="a-card bg" ></div>
          <div className="a-card">
              <img src="https://images.pexels.com/photos/1714340/pexels-photo-1714340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt="not work img" className="a-img" />
          </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
         <p className="a-sub">
           
         </p>
         <p className="a-desc">
         BCA Graduate Fresher
seeking for apportunities in Web Development
currently learning Fullstack Development 
<ul className='a-slist'>
Skill set :-
<li>HTML</li>
<li>CSS</li>
<li>BootstrapL</li>
<li>Ract Js</li>
</ul>
       </p>
       <div className="a-award">
         <img src={Award} alt="" className="a-award-img" />
         <div className="a-award-texts">
             <h4 className='a-award-title'>Responsive Web Design</h4>
             <p className='a-awars-desc'>Complite Two months Course in freeCodeCamp </p>
         </div>
      </div>
    </div>
    </div>
  )
}

export default About
