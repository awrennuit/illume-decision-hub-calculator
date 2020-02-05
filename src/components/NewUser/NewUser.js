import React from 'react';

export default function NewUser(){
  return(
    <center>
      <div className='main-container'>
        <h1 className='user-spacing'>Welcome, req.user.name!</h1>
        <h2 className='user-spacing'>What is the Illume Decision Hub Calculator?</h2>
        <h3 className='user-spacing'>This application is designed to help you generate more profits. 
          Using conversational language through a “choose your own adventure” format, you will 
          be prompted to enter your financial information to create predictive calculations based 
          on business decisions you can make around product pricing, operating costs, and total revenue. 
          This will help you better understand how changes in your decision-making and pricing could affect 
          your future profitability.
        </h3>
      </div>
    </center>
  )
}