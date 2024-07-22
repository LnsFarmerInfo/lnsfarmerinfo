import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col text-center justify-center items-center'>
        <img src='/assets/Logo.png' alt="" />
        <h1>© 2023 LNS FarmerInfo LLP, All Rights Reserved.</h1>
        <h3>Incubation room no. 4,Activity centre,Dayananda Sagar Academy Of Technology & Management,Kanakpura road Bengaluru,Karnataka 560082</h3>
      </div>
      <div className=''>
        <h1 className='font-semibold'>Links</h1>
        <ul className='flex flex-col gap-10 pt-10'>
          <li className='underline'><a href="/privacy-policy">Privacy Policy</a></li>
          <li className='underline'><a href="/refund-policy">Refund Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer