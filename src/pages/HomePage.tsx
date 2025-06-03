import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
};

export default HomePage;