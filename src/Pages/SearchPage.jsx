import React from 'react'
import Navbar from '../components/Navbar'
import '../style/SearchPage.css'
import { Link } from '@mui/material'
import Footer from './Footer'



const loadScript=(src)=>{
    return new Promise((resolve) =>{
        const script =document.createElement('script')
        script.src=src
  
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
  }
  
  const DisplayRazopay= async(amount)=>{
  
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
  
  
    if(!res)
    {
        alert("Failed to load payment!")
        return
    }
  
    const options={
        key:"rzp_test_bj4RGD5pPxGljN",
        currency: "INR",
        amount: amount*100,
        name: "Labour Service Charge",
        description: "Hiring finished!", 
        handler: function(response){
            alert(response.razor_payment_id)
            alert("Payment Successful!")
            
        },
        prefill:{
            name: "Labour Link"
        }
  
        // if(response.razor_payment_id)
    };
   const paymentObject= new window.Razorpay(options)
   paymentObject.open()
}


export default function SearchPage() {
    return(
        <>
          <Navbar/>
          
           <div className='bg'>
           <br></br>
          <br></br>
          <br></br>
           <div className="Search">
               <p className='text11'>Search Results</p>
               <div className="dropdown">
                   <div className="dropbtn">Sort by<img className="image" height='20px' src='.\assets\down.png'></img> </div>
                       <div className="dropdown-content">
                           <a href="#">Price: Low to High</a>
                           <a href="#">Price: High to Low</a>
                           <a href="#">Highest rated</a>
                   </div>
               </div>
            </div>
            <div className='rectangle'>
                

            <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                      
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
                <div className="rectangle1">
                    <div className='eclipse-1'><img className='eclipse-2' src='./assets/person1.jpg'></img></div>
                    <div className='star'><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img><img height="30px" width='30px' src='./assets/star.png'></img></div>
                    <div className='text22'>
                       <p >Name</p>
                       <p >Designation</p>
                       <p >Wages</p>
                       <button onClick={()=>DisplayRazopay(100)} className='rectangle2'>Queue</button>
                    </div>
                </div>
            </div>
           
         </div>
         <Footer/>
        </>
    )
      
   
           


           
            

    
}