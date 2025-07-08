import React, { useState } from "react";
import pic1 from './assets/Pic1.png'
import pic2 from './assets/Pic2.png'
import pic3 from './assets/Pic3.png'
import pic4 from './assets/Pic4.png'
import pic5 from './assets/Pic5.png'
import pic6 from './assets/Pic6.png'
import pic7 from './assets/Pic7.png'

import bag from './assets/bag-4-svgrepo-com 1.svg'
import favourites from './assets/heart-svgrepo-com.svg'
import profile from './assets/person1.svg'
import cartimage from './assets/cart-large-2-svgrepo-com 5.svg'
import Footer from "./components/Footer";


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
      "No, we use natural and bio ingredients without harmful parabens, sulfates, or artificial fragrances",
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
  <div className="w-[1920px] h-[1080px] bg-[#EFF5E1]">
    <header className="">
    <div className="ml-[100px]">
      <nav className="flex ">
        <div className=" w-[156px] h-[22px] mt-[50px]  text-[#2D3B36] font-bold size-7">
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
          <p className="w-[64px] h-15px ">cart(1)</p>
          <img src={favourites} alt="liked cart" />
          <img src={profile} alt="person" />
        </div>
      </nav>
    </div>
    </header>

    {/* --------HERO SECTION-------- */}
    <section className=" ml-[100px] bg-[#EFF5E1]">
    <div className="flex">
      <div className=" w-[335px] h-[87px] mt-[301px]">
        <p className="inter indent-20 font-normal ">Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.</p>
      </div>
      <div className="w-[398px] h-[253px] mt-[218px] ml-[761px] inter font-[700] text-[100px] text-[#2D3B36] -tracking-[3%]">
        GLOW <br />
        NATUR- <br />
        ALLY
      </div>
      <div className="">
        <img src={pic1} alt="hero" className="w-[222.61px] h-[220px] mt-[234px] ml-[197px] rounded-[20px]" />
      </div>
    </div>
    <div className="flex" >
      <button className="ml-[513] w-[180px] h-[60px] mt-[513px] rounded-[100px] bg-[#2D3B36]">
        <p className="ml-[535] [inter font-[400] text-[20px] text-[#EFF5E1] text-center">Shop Now</p>
      </button>
      <div >
        <img className="w-[610px] h-[676px] mt-[353px] ml-[655px] rounded-[30px]" src={pic2} alt="image" />
        <div className="ml-[] flex bg-red-700  rounded-[200px] ">
          <img className="w-[80px] h-[80px] mt-[10px] p-2 mb-2 rounded-[110px]" src={pic1} alt="image" />
          <p className=" mt-[40px] ml-[22px] justify-center">While giving you an invigorating cleansing experience</p>
          

        </div>
      </div>
      <div className="inter font-[800] text-[378px] text-[#2D3B36] uppercase">
        <p className="ml-[140px] mt-[80px] text-center">
          
          SKINCARE
        </p>
      </div>
    </div>

    
    <div className=" ">
      <p className="w-[1716px] h-[507px] Inter font-normal size-[53px] ">
       <span> Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with </span>
        advanced science, our collection ensures every
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
        <h1>YOUR SKIN DESEVES <br/>
        THE BEST CARE.</h1>

        <p> Discover a curated collection of skincare products designed to rejuvenate,<br/>
        protect, and pamper your skin.Explore our rage crafted with love backed<br/>
        by science,and inspired by nature.</p>

        <h2>01  Bio ingredients</h2>
        <p>Get naturally beautiful and transform with our bio<br/>
        ingredients creams for healthy , radiant skin.</p>

        <h3>Everything Natural</h3>
        <p>Pure ingredients for pure skin . The Perfect solution<br/>
        for your skin care needs.</p>

        <h4>All Handmade</h4>
        <p>Mde with love and care.Just for you.Give your skin<br/>
        the tender lovingcare it</p>
      </div>
      <div>
        <img className="w-[849px] h-[1081px] rounded-[30px]" src={pic3} alt="image" />
      </div>
      <p>SINCE 2001</p>
      <p>LEARN MORE</p>
    </div>

    <div>
      <div>

      </div>
      <div>


        <button className="w-[201px]  bg-[#2D3B36] text-[#EFF5E1] inter font-[400] text-[20px]">
          Best Selling Products
        </button>
      </div>

      <h1>
        Skincare That Brings Out<br/>
        Your Natural Radiance
      </h1>

    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic4} alt="image" />
      </div>
      <div>
        <h2>ALYA SKIN CLEANSER</h2>
        <p>FROM $29.99</p>
       </div>
       <div>
        <img src={cartimage} alt="cart" />
       </div>
    </div> 
    
    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic5} alt="image" />
      </div>
      <div>
        <h2>RITUAL OF SAKURA.</h2>
        <p>FROM $27.99</p>
       </div>
       <div>
        <img src={cartimage} alt="cart" />
       </div>
    </div>

    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic6} alt="image" />
      </div>
      <div>
        <h2>THE BODY LOTION.</h2>
        <p>FROM $19.99</p>
       </div>
       <div>  
        <img src={cartimage} alt="cart" />
       </div>
    </div>

    <div>
       <img className="w-[560px] h-[770px] rounded-[20px]" src={pic7} alt="image" />
       <h1>Feel Beautiful Inside and Out <br/>
       with Every Product.</h1>
       <button>Shop Now</button>
    </div>

    <div >
      <h1>Feel Beautiful Inside and Out<br/>with Every Product.</h1>
      <div>
        <button>NEW ARRIVAL</button>
        <button>CLEANING</button>
        <button>ACNE FIGHTER</button>
        <button>ANTI AGGING</button>
      </div>
       <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic4} alt="image" />
      </div>
      <div>
        <h2>ALYA SKIN CLEANSER</h2>
        <p>FROM $29.99</p>
       </div>
       <div>
        <img src={cartimage} alt="cart" />
       </div>
    </div> 
    
    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic5} alt="image" />
      </div>
      <div>
        <h2>RITUAL OF SAKURA.</h2>
        <p>FROM $27.99</p>
       </div>
       <div>
        <img src={cartimage} alt="cart" />
       </div>
    </div>

    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic6} alt="image" />
      </div>
      <div>
        <h2>THE BODY LOTION.</h2>
        <p>FROM $19.99</p>
       </div>
       <div>  
        <img src={cartimage} alt="cart" />
       </div>
    </div>
    </div>




    <div>
      <div>
        <img className="w-[560px] h-[770px] rounded-[20px]" src={pic6} alt="image" />
        <div>
          <p>24/7 We're Here to Help You</p>
        </div>
      </div>
      
      <div>
        <button>Frequently Ased Question</button>
        <h1>Answers to Your <br/>Skincare Questions,All<br/>in One Place.</h1>
        <p>Are Your products safe for sensitive skin?</p>
        <p>Are Your products safe for sensitive skin?</p>
        <p>Are Your products safe for sensitive skin?</p>
        <p>Are Your products safe for sensitive skin?</p>
        <p>Are Your products safe for sensitive skin?</p>
      </div>
    </div>

           
    </div>
    </section>
  <Footer/>
  </div>

  );
}