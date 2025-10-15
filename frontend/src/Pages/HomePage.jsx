import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import ProductsSection from '../components/ProductsSection'
import FeaturesSection from '../components/FeaturesSection'
import TrustSection from '../components/TrustSection'
import CTASection from '../components/CTASection'

const HomePage = () => {
  return (
    <div className='mt-20'>
        <HeroSection/>
        <CategoriesSection/>
        <TrustSection/>
        <ProductsSection/>
        
        <FeaturesSection/>
        <CTASection/>
    </div>
  )
}

export default HomePage