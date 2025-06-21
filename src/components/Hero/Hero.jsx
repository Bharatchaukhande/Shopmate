import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

import heroImg from '../../assets/Header-img.png';
import Heroimg from '../../assets/Heroimg.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import video from '../../assets/video.mp4';
import category1 from '../../assets/category1.png';
import category2 from '../../assets/category2.png';
import category3 from '../../assets/category3.png';
import collection1 from '../../assets/collection1.png';
import collection2 from '../../assets/collection2.png';
import collection3 from '../../assets/collection1.png';
import collection4 from '../../assets/collection4.png';
import collection5 from '../../assets/collection5.png';
import banner from '../../assets/Hero4.png';
import middle from '../../assets/collection3.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container1Ref = useRef(null);
  const headingRef = useRef(null);
  const textLines = useRef([]);
  const container3Ref = useRef(null);
  const container4Ref = useRef(null);
  const container2Ref = useRef(null);
  const container5Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // .Hero-container-1
      gsap.from(container1Ref.current, {
        opacity: 0,
        y: 100,
        duration: .7,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: container1Ref.current,
          start: "top 80%",
          once:true,
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(textLines.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
           once:true,
          toggleActions: "play none none reverse",
        },
      });

      // .Hero-container-3
      gsap.from(container3Ref.current, {
        opacity: 0,
        y: 100,
        duration: .7,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: container3Ref.current,
          start: "top 80%",
           once:true,
          toggleActions: "play none none reverse",
        },
      });

      // .Hero-container-4
      gsap.from(container4Ref.current, {
        opacity: 0,
        scale: 0.95,
        duration: .7,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: container4Ref.current,
          start: "top 80%",
           once:true,
          toggleActions: "play none none reverse",
        },
      });

      // .Hero-container-2
      gsap.from(container2Ref.current, {
        opacity: 0,
        y: 100,
        duration: .7,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: container2Ref.current,
          start: "top 80%",
           once:true,
          toggleActions: "play none none reverse",
        },
      });

      // .Hero-container-5
      gsap.from(container5Ref.current, {
        opacity: 0,
        y: 100,
        duration: .7,
        ease: "power2.out",
        delay:0.4,
        scrollTrigger: {
          trigger: container5Ref.current,
          start: "top 80%",
           once:true,
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className="video">
        <video src={video} autoPlay loop muted></video>
      </div>

      <div className='Hero-container-1' ref={container1Ref}>
        <div id='box1' className="box">
          <div className="heading" ref={headingRef}>
            {["Unleash Your Style", "Shop the Latest", "Trends"].map((text, index) => (
              <h1 key={index} ref={(el) => (textLines.current[index] = el)}>{text}</h1>
            ))}
            <p>
              Discover the latest trends & express your style effortlessly.
              Shop exclusive collection with premium designs, just for you!
            </p>
          </div>
          <div className="hero-button-container">
            <button className="hero-btn"><Link to='/shop'>Shop now</Link></button>
            <button className="arrow-btn"><Link to='/shop'><MdArrowOutward /></Link></button>
          </div>
          <div className="bottom-container">
            <div className="bottom-heading">
              <h1>25 Million+</h1>
              <p>Real reviews from our happy customers! See what fashion lovers are saying about our quality, style and service.</p>
            </div>
            <div className="bottom-img-div">
              <img style={{ height: "100%", width: "100%" }} src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <div id='box2' className="box">
          <img style={{ height: "100%", width: "100%" }} src={Heroimg} alt="" />
        </div>
      </div>

      <div className="Hero-container-3" ref={container3Ref}>
        <div className="hero-3">
          <h1>Our Category List</h1>
          <div className='category-list'>
            <div className="category">
              <Link to='/mens'><img style={{ height: '100%', width: "100%" }} src={category1} alt="" /></Link>
            </div>
            <div className="category">
              <Link to='/mens'><img style={{ height: '100%', width: "100%" }} src={category2} alt="" /></Link>
            </div>
            <div className="category">
              <Link to='/mens'><img style={{ height: '100%', width: "100%" }} src={category3} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="Hero-container-4" ref={container4Ref}>
        <div className="hero4">
          <img style={{ height: '100%', width: "100%" }} src={banner} alt="banner" />
        </div>
      </div>

      <div className="Hero-container-2" ref={container2Ref}>
        <div className="img-div">
          <img src={img1} alt="" />
        </div>
        <div className="img-div">
          <img src={img2} alt="" />
        </div>
        <div id='Last-heading' className="img-div">
          <h1>Models wearing</h1>
          <h1>full outfit</h1>
          <button className='last-btn'>Explore more</button>
        </div>
      </div>

      <hr />

      <div className="Hero-container-5" ref={container5Ref}>
        <h1>Our Top Collections</h1>
        <div className="hero5">
          <div className="hero5-category">
            <div className="hero5-img1">
              <img style={{ height: "100%", width: "100%" }} src={collection1} alt="" />
            </div>
            <div className="hero5-img2">
              <img style={{ height: "100%", width: "100%" }} src={collection2} alt="" />
            </div>
          </div>
          <div className="hero5-category">
            <img src={middle} style={{ height: '100%', width: '100%' }} alt="" />
          </div>
          <div className="hero5-category">
            <div className="hero5-img1">
              <img style={{ height: "100%", width: "100%" }} src={collection4} alt="" />
            </div>
            <div className="hero5-img2">
              <img style={{ height: "100%", width: "100%" }} src={collection5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
