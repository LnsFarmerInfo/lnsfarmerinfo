'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useRouter,useSearchParams } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';
const Internship = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref')
  useEffect(() => {
    if(ref){
      setRefferalCode(ref.toString())
    }
    axios.get('/api/get-count')
    .then(resp => resp.data.count)
    .then(count => {setInternCount(12+count)})
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
    setLoading(true)
    const resp = await axios.post('/api/payment', {
      firstName, lastName, email, phoneNumber, collegeName, courseCode: Number(course + duration), semester: Number(semester), usn: usn.toUpperCase(),referralCode
    })
    setLoading(false)
    if (resp.data.message == 'user already exists') {
      toast.error("user already exists")
    }
    else if (resp.data.message == 'failed') {
      toast.error("some error occured 🚫")
    }
    else if (resp.data.redirectUrl) {
      router.push(resp.data.redirectUrl)
    }
    // handleSubmit();
  }
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [usn, setusn] = useState("")
  const [email, setemail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [semester, setsemester] = useState("")
  const [collegeName, setcollegeName] = useState("")
  const [duration, setDuration] = useState('1')
  const [referralCode, setRefferalCode] = useState('')
  const [course, setcourse] = useState('1')
  const [price, setPrice] = useState('2999')
  const [loading, setLoading] = useState(false);
  const [internCount,setInternCount] = useState(12)
  const [internships] = useState([
    {
      image_url: "https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg",
      title: "Front-end Web Development Intern",
      description: "Join our team as a Front-End Web Development Intern and immerse yourself in creating visually appealing and highly functional user interfaces. This role focuses on developing the client-side of web applications, using modern technologies to ensure responsive and user-friendly designs.",
      responsibilities: ['Design and implement user interfaces using HTML, CSS, and JavaScript.', 'Collaborate with designers and back-end developers to create seamless web experiences.', 'Optimize web applications for speed and performance.', 'Conduct user testing and gather feedback to enhance UI/UX.'],
      training_program: ['Intensive workshops on front-end technologies and frameworks like React or Vue.js.', 'Hands-on projects to build responsive and interactive web interfaces.', 'Mentorship sessions on best practices in user experience and accessibility.'],
      price : 3499
    },
    {
      image_url: "/assets/backend.png",
      title: "Back-End Web Development Intern",
      description: "As a Back-End Web Development Intern, you'll be responsible for the server-side logic and database management of web applications. This internship offers hands-on experience in building and maintaining robust back-end systems that power dynamic web applications.",
      responsibilities: ['Develop and manage server-side components using languages such as Node.js, Python, or Ruby.', 'Work with databases (SQL or NoSQL) to design and implement efficient data storage solutions.', 'Integrate APIs and third-party services into web applications.', 'Troubleshoot and optimize server performance and security.'],
      training_program: ['Training on server-side programming languages and database management systems.', 'Projects focused on API development and integration.', 'Sessions on performance optimization and security best practices.'],
      price : 3499
    },
    {
      image_url: "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
      title: "FullStack Web Development Intern",
      description: "Join our team as a Full Stack Web Development Intern and dive into both the client and server sides of web applications. This role involves developing and integrating both front-end and back-end technologies to create comprehensive and dynamic web solutions.",
      responsibilities: ['Design and develop user interfaces using HTML, CSS, and JavaScript.', 'Build and maintain server-side applications and APIs using languages and frameworks such as Node.js, Python, or Ruby on Rails.', 'Collaborate with front-end developers, designers, and other team members to create cohesive and efficient web applications.', 'Optimize web applications for performance, scalability, and security.'],
      training_program: ['Intensive workshops on both front-end and back-end technologies, including frameworks like React, Vue.js, Node.js, and Express.', 'Hands-on projects to build full-stack applications from scratch.', 'Mentorship sessions on best practices in system design, database management, and web security.'],
      price : 3499  
    },
    {
      image_url: "/assets/machinelearning.jpg",
      title: "Machine Learning Engineer Intern",
      description: "As a Machine Learning Engineer Intern, you'll focus on developing and optimizing machine learning models that can be integrated into various applications. This role is ideal for those looking to deepen their knowledge of machine learning algorithms and data analysis techniques.",
      responsibilities: ['Design, train, and evaluate machine learning models for specific applications.', 'Analyze and preprocess data to improve model accuracy and performance.', 'Work with software engineers to integrate machine learning models into production systems.', 'Conduct experiments and document findings to support ongoing development.'],
      training_program: ['Comprehensive training on machine learning algorithms and techniques.', 'Practical experience with data preprocessing, model training, and evaluation.', 'Workshops on deploying machine learning models in real-world scenarios.'],
      price : 3999
    },
    {
      image_url: "https://media.geeksforgeeks.org/wp-content/uploads/20230808160224/DSA.webp",
      title: "Data Structures & Algorithm course",
      description: "In the Data Structures and Algorithms Course, you'll immerse yourself in the foundational concepts essential for efficient programming and problem-solving. This course is tailored for individuals seeking to enhance their understanding of data organization, algorithm design, and computational efficiency. It’s perfect for those looking to build a solid base in computer science principles and prepare for technical interviews or advanced software development roles.",
      responsibilities: ['Study and practice using arrays, linked lists, stacks, queues, trees, and graphs.', 'Understand and apply fundamental algorithms including sorting, searching, and optimization techniques.', 'Evaluate and improve the time and space complexity of your solutions.', 'Apply your knowledge to solve practical problems and coding challenges.'],
      training_program: ['Gain comprehensive insights into various data structures and their applications.', 'Receive practical training on designing algorithms and analyzing their efficiency using Big O notation.', 'Engage in interactive coding exercises and projects to reinforce concepts and techniques.'],
      price : 3999
    },
    
  ])
  return (
    <>
      <Toaster />
      <div className="overlay"></div>
      <div className="intership-form-div">
        <div className="close"><img src='/assets/close.png' alt="" /></div>
        <form action="" onSubmit={onSubmit} className='internship-form'>
          <div><input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='your first name?' className='form-input' required />
            <input type="text" value={lastName} onChange={(e) => { setlastName(e.target.value) }} className='form-input' placeholder='your last name?' required /></div>
          <input className='form-input' value={usn} onChange={(e) => { setusn(e.target.value.toUpperCase()) }} type="text" name="usn" placeholder='your USN?' id="" />
          <div className="flex flex-col !gap-2 !mb-4">
            <label htmlFor="course" className="text-2xl text-left"> Select the domain : </label>
            <select className='form-input !my-0' value={course} onChange={e => setcourse(e.target.value)} name="" id="course" required>
              <option value="1">Frontend Web Development</option>
              <option value="2">Backend Web Development</option>
              <option value="3">FullStack Web Development</option>
              <option value="4">Machine Learning</option>
              <option value="5">Data Structure & Algorithm course</option>
            </select>
          </div>
          <div className="flex flex-col !gap-2">
            <label htmlFor="duration" className="text-2xl text-left"> Select the duration : </label>
            <select className='form-input !my-0' value={duration} onChange={e => { setDuration(e.target.value); setPrice(e.target.value == '3' ? '2999' : '5999') }} name="" id="duration" required>
              <option value="1">15 Weeks (as per VTU)</option>
              <option value="2">1 Months</option>
            </select>
          </div>
          <input className='form-input' value={email} onChange={(e) => { setemail(e.target.value) }} type="email" name="email" placeholder='your email address?' id="" required />
          <input className='form-input' value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }} type="text" name="phone-number" placeholder='your Phone Number?' id="" required />
          <input className='form-input' value={collegeName} onChange={e => { setcollegeName(e.target.value) }} type="text" name="college-name" placeholder='your College name?' id="" required />
          <input className='form-input' value={semester} onChange={e => { setsemester(e.target.value) }} type="number" name="semester" placeholder='your Current Semester?' id="semester" max={8} min={1} required />
          <input className='form-input' readOnly={ref ? true : false} value={ref ? ref : referralCode} onChange={e => {console.log(referralCode);if(!ref)setRefferalCode(e.target.value.toLowerCase()) }} type="text" name="refferal" placeholder='if you have referral code, please mention' id="semester"  />
          <h1 className='text-2xl my-10 font-semibold'>Pre-registation fees - Rs. 999 /-</h1>
          <div className="flex justify-center items-center">
            {loading == true ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" className="h-16"></img> : <button type="submit">Pay Now</button>}
          </div>
        </form>
      </div>
      <div className="internship">
        <Navbar internship='true' />  
        <div className='internship-container'>
          <div className="mb-10">
            <h1 className="text-2xl text-center bg-green-50 py-5 font-semibold">Live count of interns : {internCount}</h1>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            {
              internships.map((internship, index) => (
                <div className="internship-card" key={index}>
                  <div className="image"><img src={internship.image_url} className="!object-center !object-cover !h-[250px]" alt="" /></div>
                  <div className="right-side">
                    <h1 className="text-2xl">{internship.title}</h1>
                    <p className="text-lg">{internship.description}</p>
                    <h1 className='text-xl'>Responsibilities</h1>
                    <ul className='text-lg list-decimal pl-10'>
                      {internship.responsibilities.map((responsibility,index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                    <h1 className='text-xl'>Training</h1>
                    <ul className='text-lg list-decimal pl-10'>
                      {internship.training_program.map((training,index) => (
                        <li key={index}>{training}</li>
                      ))}
                    </ul>
                    <h1 className='text-xl'>Perks</h1>
                    <p className="text-lg">Letter of Recommendation, Real world projects, Internship Compeletion Letter</p>
                    <h2 className='text-lg mt-5'>Training + Internship (15 weeks) fees - <span className="line-through">Rs. 4599/-</span></h2>
                    <h2 className='text-lg font-semibold mt-1'>Early bird offer (first 30 students per domain) - <span className="text-xl">Rs. {internship.price}/-</span></h2>
                    <button className='!bottom-0 !text-3xl' onClick={()=>{setcourse(index+1)}}>Apply now </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Internship