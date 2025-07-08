import React, { useState } from "react";
import pic1 from './assets/Pic1.png'
import pic2 from './assets/Pic2.png'
import pic3 from './assets/Pic3.png'

import bag from  '/public/bag-4-svgrepo-com 1.svg'
import favourites from '/public/heart-svgrepo-com.svg'
import profile from '/public/person 1.svg'

const faqs = [
  {
    question: "What skin types is this suitable for?",
    answer:
      "Our products are designed for all skin types, including sensitive and acne-prone skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, all our products are cruelty-free and never tested on animals.",
  },
  {
    question: "Do your products contain harmful chemicals?",
    answer:
      "No, we use natural and bio ingredients without harmful parabens, sulfates, or artificial fragrances.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Results vary, but most users begin to notice a healthy glow within 2-4 weeks of consistent use.",
  },
];

export default function SkincareLandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
  // --------HEADER SECTION--------
  <div className="w-[1920px] h-[9490px] bg-[#acd252]">
    <header className="">
    <div className="ml-[100px]">
      <nav className="flex ">
        <div className="w-[156px] h-[22px] mt-[50px]  text-[#2D3B36] font-bold size-7">
          SKINCARE
        </div>
        <div className="flex inter size-5 font-[400] text-[#2D3B36] gap-5 ">
          <a className="w-[103px] h-[15px] mt-[53px] ml-[717px]" href="#All Products">AllProducts</a>
          <a className="w-[57px] h-[15px] mt-[53px]" href="#Serum">Serum</a>
          <a className="w-[92px] h-[15px] mt-[53px]" href="#Sunscreen">Sunscreen</a>
          <a className="w-[61px] h-[15px] mt-[53px]" href="#Bundle">Bundle</a>
        </div>
        <div className="flex size-5 ml-[1305px] mt-[50px] gap-5">
          <img src={bag} alt="bag" />
          <img src={favourites} alt="liked cart" />
          <img src={profile} alt="person" />
        </div>
      </nav>
    </div>
    </header>
    {/* --------HERO SECTION-------- */}
    <section className=" ml-[100px]">
    <div className="flex">
      <div className=" w-[335px] h-[87px] mt-[301px]">
        <p className="inter indent-20 font-normal ">Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.</p>
      </div>
      <div className="w-[398px] h-[253px] mt-[218px] ml-[561px] inter font-[700] text-[100px] text-[#2D3B36] -tracking-[3%]">
        GLOW <br />
        NATUR- <br />
        ALLY
      </div>
      <div className="">
        <img src={pic1} alt="hero" className="w-[222.61px] h-[220px] mt-[234px] ml-[197px] rounded-[20px]" />
      </div>
    </div>
    <div className="" >
      <button className=" w-[180px] h-[60px] mt-[814px] rounded-[100px] bg-[#2D3B36]">
        <p className="inter font-[400] text-[20px] text-[#EFF5E1] text-center">Shop Now</p>
      </button>
      <div className="inter font-[800] text-[378px] text-[#2D3B36] uppercase">
        <p className="-ml-[140px] mt-[80px] text-center">
          <img className="w-[610px] h-[676px] mt-[0px] ml-[655px]" src={pic2} alt="image" />
          SKINCARE
        </p>
      </div>
    </div>
    <div className=" ">
      <p className="w-[1716px] h-[507px] Inter font-normal size-[53px] ">
        Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with advanced science, our collection ensures every
        skin type can achieve a radiant, healthy glow. Embrace your beauty with
        confidence every day. Experience the ultimate in skincare with our 
        expertly formulated products, crafted to nourish, protect, and rejuvenate
        your skin.
      </p>
    </div>
    <div>
      <div>
        <button className="w-[300px] h-[60px] mt-[50px] ml-[100px] rounded-[100px] bg-[#2D3B36] text-[#EFF5E1] inter font-[400] text-[20px]">
          Why Our Products
        </button>
      </div>
      <div>
        <img className="w-[849px] h-[1081px] mt-[50px] rounded-[30px]" src={pic3} alt="image" />
      </div>
    </div>
    </section>
  </div>
  );
}