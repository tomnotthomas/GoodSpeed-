import React from 'react'
import './payment-page.css'
import { useNavigate } from 'react-router-dom';

import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";


function PaymentPage() {
  const navigate = useNavigate()

  const setPaymentStatusAndVM = () => {
     fetch ('http://localhost:3001/setpaiduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          //TODO THIS MAIL IS CURRENTLY HARDCODED AND NEEDS TO BECOME DYNAMIC
          userEmail: 'tom@example.com'
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Use navigate for redirection
        navigate(data.redirectTo);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };




  return  <div id='backbox'>

  <div id='box'>
  <div id="info-steam-connect">
  <h2>Subscribe now</h2>
  <p> And enjoy 20h of high quality gaming per month</p>
  <div id='login-create-account'>
        <p className="small-notification">Continue without subscription</p>
        <a className="small-notification" href='./'>Skip</a>
      </div>
  </div>
    <div id='steambutton'>
        <FaCcPaypal id='paypal' onClick={setPaymentStatusAndVM}/>
        <div className="icon-cards">
          <FaCcMastercard className='card' />
          <SiAmericanexpress className='card'/>
          <FaCcDiscover className='card'/>
          <FaCcJcb className='card'/>
        </div>
     
      </div>
    </div>
</div>
}

export default PaymentPage