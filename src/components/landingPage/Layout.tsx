import React from 'react'
import Hero from './Hero'
import FindContent from './FindContent'
import FeaturedCollections from './FeaturedCollections'
import RecentSearch from './RecentSearch'
import NewsLetter from '../NewsLetter'
import LimitlessAccess from '../LimitlessAccess'


const Layout = () => {
  return (
    <>
        <Hero/>
        <LimitlessAccess/>
        <FindContent/>
        <FeaturedCollections/>
        <RecentSearch/>
        <NewsLetter/>
    </>
  )
}

export default Layout;