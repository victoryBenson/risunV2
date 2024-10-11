import React from 'react'
import Hero from './Hero';
import RecentIllustration from './RecentIllustration';
import PopularCategory from './PopularCategory';
import FrameArt from './FrameArt';
import NewsLetter from '../NewsLetter';

const Layout = () => {
  return (
    <>
        <Hero/>
        <RecentIllustration/>
        <PopularCategory/>
        <FrameArt/>
        <NewsLetter/>
    </>
  )
}

export default Layout;