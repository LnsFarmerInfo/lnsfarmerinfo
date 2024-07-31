'use client'
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  let locoScroll;
  // useEffect(() => {
  //   let locoScroll;

  //   import('locomotive-scroll').then((locomotiveModule) => {
  //     locoScroll = new locomotiveModule.default({
  //       el: document.querySelector('body'),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //       getDirection: true,
  //     })

  //     locoScroll.on('scroll', () => {
  //       ScrollTrigger.update()
  //     })

  //     ScrollTrigger.scrollerProxy('.main', {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? locoScroll.scrollTo(value, 0, 0)
  //           : locoScroll.scroll.instance.scroll.y
  //       },
  //       getBoundingClientRect() {
  //         return {
  //           top: 0,
  //           left: 0,
  //           width: window.innerWidth,
  //           height: window.innerHeight,
  //         }
  //       },

  //       pinType: document.querySelector('.main').style
  //         .transform
  //         ? 'transform'
  //         : 'fixed',
  //     })

  //     ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

  //     ScrollTrigger.refresh()
  //   })

  //   window.addEventListener('DOMContentLoaded', () => {
  //     locoScroll.update()
  //   })

  //   window.addEventListener('resize', () => {
  //     locoScroll.update()
  //   })
  //   const navLinks = document.querySelectorAll("nav a");


  // }, [])

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (!(this.getAttribute("href") == '/internship')) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        },'-180');
        }
      });
    });
  })
  useGSAP(() => {

    if (window.innerWidth > 1000) {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: ".section--1",
          start: "80% 0%",
          end: "top 10%",
          scrub: true
        },
      });
      tl
        .to(".hidden-navbar", {
          top: "0%",
          left: "0%",
          ease: "Expo.easeInOut",
          duration: 1,
          opacity: 1,
        })
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section--2",
          start: "top 50%",
          end: "120% bottom",
          scrub: true
        }
      })
      tl2
        .from(".even", {
          opacity: "0",
          stagger: 4,
          duration: 2,
          transform: "translateX(-10%)",
          ease: "Expo.easeInOut",
        }, 's')
        .from(".odd", {
          opacity: "0",
          delay: 1,
          duration: 2,
          transform: "translateX(10%)",
          ease: "Expo.easeInOut",
        }, 's')
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.section--2',
          start: "120% 50%",
          end: "172% bottom",
          scrub: true,
          ease: "Power3",
        }
      })
      tl3
        .from('.section--3', {
          opacity: 0,
          top: "50%"
        })
        .from('.left', {
          transform: "translateX(-10%)",
          opacity: 0,
        }, 's')
        .from('.right', {
          transform: "translateX(10%)",
          opacity: 0,
        }, 's')

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section--4",
          start: "10% 50%",
          end: "70% bottom"
        }
      })
      tl4
        .from('.section--4 h1', {
          opacity: 0
        })
        .from('.about h2', {
          opacity: 0
        })
        .from('.about p', {
          opacity: 0
        })
        .from('.co-founders', {
          opacity: 0
        })
        .from('.co-founder', {
          opacity: 0,
          transform: "translateY(30px)"
        })



    }
    const tl = gsap.timeline({});
    tl
      .from('#section-1 h1', {
        transform: "translate(-200%)",
        opacity: 0,
        ease: "Expo.easeInOut",
        duration: 1.5
      }, "a")
      .from('#section-1 img', {
        transform: "translate(200%)",
        opacity: 0,
        ease: "Expo.easeInOut",
        duration: 1.5
      }, "a")
      .from('.navbar ul li', {
        transform: "translateY(-300%)",
        stagger: 0.2
      }, "a")

  })


  return (
    <>
      <nav className="hidden-navbar">
        <ul>
          <li>
            <a href="#section-1">HOME</a>
          </li>
          <li>
            <a href="#section-2">INNOVATIONS</a>
          </li>
          <li>
            <a href="#section-3">ABOUT</a>
          </li>
        </ul>
      </nav>
      <div className="main overflow-x-hidden">
        <Navbar internship={false} />
        <section id="section-1" className="section--1">
          <h1>
            '' Enhancing Agriculture, Elevating Livestock: <span><div className="highlight"></div>LNS FarmerInfo</span> <br /> Where Cattle Well-Being Takes Center Stage in the Future of Farming. ''
          </h1>
          <img src='/assets/img-1.jpg' alt="" />
        </section>
        <section className="section--2">
          <div className="card even">
            <img src='/assets/card-img-1.webp' alt="" />
            <div>
              <h1>Caring for Farmers and Livestock</h1>
              <p>
                Rooted in love for the earth and its caretakers, we prioritise
                the well-being of both farmers and their farm animals.
              </p>
            </div>
          </div>
          <div className="card odd">
            <img src='/assets/card-img-2.webp' alt="" />
            <div>
              <h1>Pioneering the Future of Agriculture</h1>
              <p>
                Our dedication to innovation steers us towards new approaches,
                transforming the agricultural world for the better.
              </p>
            </div>
          </div>
          <div className="card even">
            <img src='/assets/img-2.jpg' className="img-2" alt="" />
            <div>
              <h1>Recognition</h1>
              <p>
                Acknowledged by NaaVIC India, our efforts to revolutionize
                agriculture and livestock welfare have not only made waves, but
                have galvanized a new generation of farming practices.
              </p>
            </div>
          </div>
        </section>
        <section id="section-2" className="section--3">
          <h1>Innovations</h1>
          <div className="product left">
            <h1>1. DAIRY FRIEND</h1>
            <img
              src='/assets/dairyfriend_img.jpg'
              alt=""
            />
            <p>
              Developing a platform that links veterinary professionals with farmers to swiftly identify diseases based on early symptoms, enabling timely delivery of essential medical equipment, is at the core of our product's mission
            </p>
     
          </div>
          <div className="product right">
            <h1>2. PLASTIC COW</h1>
            <img
              src='/assets/plasticcow_img.png'
              alt=""
            />
            <p>
              We're working on a product named 'Plastic Cow' designed to prevent cows from ingesting plastic and metal pieces. This innovation aims to mitigate hardware diseases by safeguarding cattle from consuming harmful materials.
            </p>
         
          </div>
          <div className="product left">
            <h1>3. WORKSHOPS</h1>
            <img
              src='/assets/workshop_img.jpg'
              alt=""
            />
            <p>
              Our team actively conducts workshops highlighting the significance of IoT in agriculture. These sessions focus on showcasing various sensors applicable in agricultural practices, emphasizing their practical usage and benefits.
            </p>
         
          </div>
          <div className="product right">
            <h1>4. MOBILE APPLICATION</h1>
            <img
              src='/assets/mobileapplication_img.jpg'
              alt=""
            />
            <p>
              We are currently developing a mobile application, funded by the National Institute of Veterinary Epidemiology and Disease Informatics (NIVEDI), that aims to aid veterinary professionals in the early-stage diagnosis of Haemoprotozoan diseases, thereby enhancing early detection capabilities within the veterinary field.
            </p>
         
          </div>
        </section>
        <section id="section-3" className="section--4">
          <h1>About - Us</h1>
          <div className="about">
            <h2>
              Welcome to LNS Farmer Info LLP - Pioneering Agriculture and Cattle
              Welfare, Recognized by NaaVIC India
            </h2>
            <p>
              LNS Farmer Info LLP is an agricultural and livestock-centric
              enterprise founded in 2021 by the visionary duo, Dr. C Nandini and
              Mr. Shiva Sumanth Reddy. Rooted in a profound love for the land
              and its caretakers, we are dedicated to enhancing the well-being
              of farmers and their cherished livestock companions. Our journey
              is marked by innovation and compassion, driven by a mission to
              redefine modern farming practices. We are proud to announce that
              we have been officially recognized by the National Association for
              the Advancement of Veterinary Informatics and Computational
              (NAAVIC) India for our exceptional contributions to agriculture
              and livestock welfare.
            </p>
          </div>
          <div className="line"></div>
          <br />
          <br />
          <br />
          <div className="co-founders">
            <h1>Co-Founders</h1>
            <div className="container">
              <div className="co-founder">
                <img src='/assets/nandiniMaam.png' alt="" />
                <h2>Dr. C Nandini</h2>
                <p>Vice-Principal | HOD CSE-AI, DSATM</p>
                <div className="line"></div>
                <p>
                  At LNS FarmerInfo LLP, we stand united for sharing a vision of agricultural transformation. Our journey is guided by the belief that knowledge, dedication, and cooperation can cultivate prosperity in the farming community. Together, we plow the fields of opportunity, nurturing growth and sustainability.
                </p>
              </div>
              <div className="co-founder">
                <img src='/assets/sumanthsir.jpg' alt="" />
                <h2>Dr. Shiva Sumanth Reddy</h2>
                <p>Asst. Professor, Dept. of CSE,DSATM</p>
                <div className="line"></div>
                <p>
                  From our humble beginnings, we've always believed that innovation and passion can transform the world. At LNS FarmerInfo LLP, we are driven by a deep commitment to empower farmers with cutting-edge technology and solutions. Together, we sow the seeds of progress and reap the harvest of a brighter future.
                </p>
              </div>
            </div>
          </div>
          <div className="team">
            <h2>Our Team</h2>
            <div className="team-member">
              <h3>
                - <span>Vinayak Nawdhar</span> | Developer |
                vinayaknawdhar003@gmail.com
              </h3>
              <h3>
                - <span>Mr. Chandra Sekhar reddy</span> | Accounts officer |
                lnsfarmerinfor@gmail.com
              </h3>
              <h3>
                - <span>Mohan Raju N</span> | Technical Programmer |
                nmr1762002@gmail.com
              </h3>
              <h3>
                - <span>Samarth Srinivas</span> | Technical Programmer |
                samarthraju2002@gmail.com
              </h3>
              <h3>
                - <span>Sanjana Srinivas</span> | Technical Programmer |
                srinivassanjana1204@gmail.com
              </h3>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
