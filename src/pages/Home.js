import React from 'react'
import Hero from '../components/Hero';
import NewItems from '../components/NewItems';
import Features from '../components/Features';
import FeaturesSecond from "../components/FeaturesSecond";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero/>
      <Features/>
      <NewItems/>
      <FeaturesSecond/>
      <Products/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;