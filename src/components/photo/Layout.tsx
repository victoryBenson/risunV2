import React from 'react'
import Hero from './Hero';
import MostPopularTrends from './MostPopularTrends';
import PopularCategory from '../PopularCategory';
import LimitlessAccess from '../LimitlessAccess';
import NewsLetter from '../NewsLetter';

const Layout = () => {
  return (
    <>
        <Hero/>
        <MostPopularTrends/>
        <PopularCategory/>
        <LimitlessAccess/>
        <NewsLetter/>
    </>
  )
}

export default Layout;