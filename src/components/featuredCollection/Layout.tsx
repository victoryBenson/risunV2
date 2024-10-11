import React from 'react'
import Hero from './Hero';
import PopularTrends from './PopularTrends';
import PopularCategory from '../PopularCategory';
import NewsLetter from '../NewsLetter';
import LimitlessAccess from '../LimitlessAccess';

const Layout = () => {
  return (
    <>
        <Hero/>
        <PopularTrends/>
        <PopularCategory/>
        <LimitlessAccess/>
        <NewsLetter/>
    </>
  )
}

export default Layout;