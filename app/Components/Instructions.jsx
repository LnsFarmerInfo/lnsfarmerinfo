import React from 'react'
import Navbar from './Navbar'

const Instructions = () => {
    return (
        <>
            <Navbar internship='true' />
            <div className='pt-[160px] p-10'>
                <div>
                    <h1 className='text-5xl mb-10'>Perks</h1>
                    <ul className='text-2xl list-decimal pl-16'>
                        <li>AICTE approved Internship.</li>
                        <li>MSME registered startup.</li>
                        <li>Non-editable (100%) genuine certificate.</li>
                        <li>Company is registered by Ministry of Commerce and Industry.</li>
                        <li>Letter of Recommendation from top designated authorities.</li>
                        <li>Hands on experience.</li>
                        <li>Internship Completion letter with badges of MSME, NaaVic, Nivedi, Ministry of commerce and Industry and TheByteBistro.</li>
                        <li>100% Support in building your report that needs to be submitted to VTU, at the end of internship coursework.</li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <h1 className='text-5xl mb-10'>Procedure</h1>
                    <ul className='text-2xl list-decimal pl-16'>
                        <li>go to the application form : <a className='underline font-bold' href='/internship'>application form</a></li>
                        <li>Choose the domain and select the duration.</li>
                        <li>make the pre-registration payment.</li>
                        <li>As soon as the payment is successfull, within next 4-5 minutes, you will recieve official Internship offer letter via registered mail id.</li>
                        <li>Your contact number will be shortly added to the required whatsapp group.</li>
                        <li>All the further instruction will be provided through email and whatsapp.</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Instructions