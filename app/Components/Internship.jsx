'use client'
import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const Internship = () => {
  const router = useRouter();
  useEffect(() => {
    const closeBtn = document.querySelector('.close');
    const overlayEl = document.querySelector('.overlay');
    const internshipDiv = document.querySelector('.intership-form-div')
    closeBtn.addEventListener('click', function () {
      overlayEl.style.display = "none";
      internshipDiv.style.display = "none";
    })

    const applyBtn = document.querySelectorAll('.right-side button');
    applyBtn.forEach((btn) => {
      btn.addEventListener('click', function () {
        overlayEl.style.display = "block";
        internshipDiv.style.display = "flex";
      })
    })
  })
  const onSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.post('/api/payment', {
      firstName, lastName, email, phoneNumber, collegeName, courseCode: Number(duration + course), semester: Number(semester)
    })
    if(resp.data.redirectUrl){
      router.push(resp.data.redirectUrl)
    }
    // handleSubmit();
  }
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [semester, setsemester] = useState(0)
  const [collegeName, setcollegeName] = useState("")
  const [duration, setDuration] = useState('3')
  const [course, setcourse] = useState('1')
  const [price, setPrice] = useState('2999')
  return (
    <>
      <div className="overlay"></div>
      <div className="intership-form-div">
        <div className="close"><img src='/assets/close.png' alt="" /></div>
        <form action="" onSubmit={onSubmit} className='internship-form'>
          <div><input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='your first name?' className='form-input' required />
            <input type="text" value={lastName} onChange={(e) => { setlastName(e.target.value) }} className='form-input' placeholder='your last name?' required /></div>
          <select className='form-input' value={course} onChange={e => setcourse(e.target.value)} name="" id="" required>
            <option value="1">Frontend Development</option>
            <option value="2">Backend Development</option>
            <option value="3">Machine Learning</option>
          </select>
          <select className='form-input' value={duration} onChange={e => { setDuration(e.target.value); setPrice(e.target.value == '3' ? '2999' : '5999') }} name="" id="" required>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
          </select>
          <input className='form-input' value={email} onChange={(e) => { setemail(e.target.value) }} type="email" name="email" placeholder='your email address?' id="" />
          <input className='form-input' value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }} type="text" name="phone-number" placeholder='your Phone Number?' id="" />
          <input className='form-input' value={collegeName} onChange={e => { setcollegeName(e.target.value) }} type="text" name="college-name" placeholder='your College name?' id="" />
          <input className='form-input' value={semester} onChange={e => { setsemester(e.target.value) }} type="number" name="semester" placeholder='your Current Semester?' id="" max={8} min={1} />
          <h1 className='text-2xl my-10 font-semibold'>Price :{price}</h1>
          <button type="submit">Pay Now</button>
        </form>
      </div>
      <div className="internship">
        <Navbar internship='true' />
        <div className='internship-container'>

          <div className="internship-card">
            <div className="image"><img src="https://i.ytimg.com/vi/MsnQ5uepIaE/maxresdefault.jpg" alt="" /></div>
            <div className="right-side">
              <h1>Front-end Development</h1>
              <h3>Bridging Imagination with User Interface Mastery!</h3>
              <p> In the realm of Front End Development, we're dedicated to shaping the user experience, pixel by pixel. Join our course cum internship program and unlock the art of creating visually stunning, user-friendly websites and applications. You'll master the latest web technologies, responsive design, and interactive user interfaces. Your journey begins here to make the web a more engaging, accessible, and beautiful place.</p>
              <h1 className='!text-md'>Perks</h1>
              <ul className='text-lg list-decimal pl-10 font-bold'>
                <li>Letter of recommendation</li>
                <li>Hands on project</li>
                <li>Working on real world projects</li>
                <li>Internship completion Letter</li>
              </ul>
              <h2 className='text-xl font-semibold mt-10'>Training + Internship (6 months) fees - Rs. 5999/-</h2>
              <h2 className='text-xl font-semibold mt-5'>Training + Internship (3 months) fees - Rs. 2999/-</h2>
              <button className='!bottom-0'>Apply now </button>
            </div>
          </div>
          <div className="internship-card">
            <div className="image"><img src="https://plopdo.com/wp-content/uploads/2021/09/Backend-development.png" alt="" /></div>
            <div className="right-side">
              <h1>Backend-end Development</h1>
              <h3>Behind Every Great App, There's Back End Magic!</h3>
              <p>Dive into the world of Back End Development and discover the engine that drives innovation. Our course cum internship program will immerse you in the world of server-side technologies, databases, and application architecture. Learn how to build robust and efficient systems that power the digital world. Join us to become the backbone of cutting-edge applications and bring your ideas to life through the magic of code.</p>
              <h1 className='!text-md'>Perks</h1>
              <ul className='text-lg list-decimal pl-10 font-bold'>
                <li>Letter of recommendation</li>
                <li>Hands on project</li>
                <li>Working on real world projects</li>
                <li>Internship completion Letter</li>
              </ul>
              <h2 className='text-xl font-semibold mt-10'>Training + Internship (6 months) fees - Rs. 5999/-</h2>
              <h2 className='text-xl font-semibold mt-5'>Training + Internship (3 months) fees - Rs. 2999/-</h2>
              <button className='!bottom-0'>Apply now </button>
            </div>
          </div>
          <div className="internship-card">
            <div className="image"><img src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg" alt="" /></div>
            <div className="right-side">
              <h1>machine learning</h1>
              <h3>Unleash the Power of AI Transforming Data to Insights!</h3>
              <p> Embark on a journey of discovery with our Machine Learning course cum internship opportunity. Here, you'll delve into the exciting universe of artificial intelligence and data science. Gain expertise in building predictive models, uncover hidden patterns, and develop intelligent solutions. Join us to harness the immense potential of AI and shape the future.</p>
              <h1 className='!text-md'>Perks</h1>
              <ul className='text-lg list-decimal pl-10 font-bold'>
                <li>Letter of recommendation</li>
                <li>Hands on project</li>
                <li>Working on real world projects</li>
                <li>Internship completion Letter</li>
              </ul>
              <h2 className='text-xl font-semibold mt-10'>Training + Internship (6 months) fees - Rs. 5999/-</h2>
              <h2 className='text-xl font-semibold mt-5'>Training + Internship (3 months) fees - Rs. 2999/-</h2>
              <button className='!bottom-0'>Apply now </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Internship