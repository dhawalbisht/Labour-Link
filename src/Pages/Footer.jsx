import { colors } from "@mui/material";
import React from "react";
import '../style/FooterStyle.css'

export default function Footer () {
return (
	<>
    <div className="footer" >
        <div className="chatbot">
            <h4 className="ftext1">LinkBot/Help</h4>
                <input type="text" className="searchbar" placeholder="Ask your doubts!"></input>

            <img src="./assets/bot.png" height='50px' width='60px'></img>
        
        </div>
        <div className="column1">
            <h4>Company</h4>
            <div>About</div>
            <div>Services</div>
            <div>Link</div>
        </div>
        <div className="column2">
            <h4>Support</h4>
			<div>Contact</div>
            <div>E-mail</div>
            <div>Pricing</div>
        </div>
		<div className="column3">
            <h4>Legal</h4>
			<div>Claims</div>
            <div>Privacy</div>
            <div>Terms</div>
        </div>
        <div className="column4">
            <img src="./assets/instagram.png" alt="" height='40px' />⠀<img src="./assets/call.png" height='40px' alt="" />⠀<img src="./assets/gmail.png" height='40px' alt="" />
        </div>
		<div className="lastBar"><p>@copyright</p></div>
    </div>
    </>
);
};

// import { icon, logo } from './assets';
// import { FaInstagram,FaDribbble,FaXTwitter,FaYoutube } from "react-icons/fa6";

// import styles from '../style/FooterStyle.scss?inline';

// const Footer = () => {
//     const links = [
//         [
//             {label : 'Company' , key: 'header-1'},
//             {label : 'About us' , key: 'item-1-1'},
//             {label : 'blog' , key: 'item-1-2'},
//             {label : 'Contact us' , key: 'item-1-3'},
//             {label : 'Pricing' , key: 'item-1-4'},
//             {label : 'Testimonials' , key: 'item-1-5'},
//         ],
//         [
//             {label : 'Support' , key: 'header-2'},
//             {label : 'Help center' , key: 'item-2-1'},
//             {label : 'Terms of service' , key: 'item-2-2'},
//             {label : 'Legal' , key: 'item-2-3'},
//             {label : 'Privacy policy' , key: 'item-2-4'},
//             {label : 'Status' , key: 'item-2-5'},
//         ]
//     ]
//     return (
//         <div className='footer'>
//             <div className="footer-company-info">
//                 <div className="footer-img">
//                     <img src={icon} alt="" />
//                     <span>
//                         Nexcent
//                     </span>
//                 </div>
                
//                 <div className='infos'>             
//                     <span>
//                         Copyright © 2020 Nexcent ltd.
//                     </span>
//                     <span>
//                         All rights reserved
//                     </span>
//                 </div>
//                 <div className="footer-icons">
//                     <FaInstagram/>
//                     <FaDribbble/>
//                     <FaXTwitter/>
//                     <FaYoutube/>
//                 </div>
//             </div>
//             <div className="footer-links">
//                     {links.map((col,index) => (
//                         <ul className={`col col-${index+1}`} key={`col-${index}`}>
//                             {col.map((link,index) => (
//                                 <li key={`link-${col}-${index}`}>
//                                     {link.label}
//                                 </li>
//                             ))}
//                         </ul>
//                     ))}
//             </div>
//             <div className="footer-form">
//                 <label htmlFor="">
//                     Stay up to date
//                 </label>
//                 <input type="email" name="" id="" />
//             </div>
//         </div>
//     )
// }

// export default Footer;