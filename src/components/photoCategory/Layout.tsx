import React from 'react'
import SearchBar from '../SearchBar'
import DiscoverCategory from './DiscoverVariety'
import RelatedCategory from './RelatedCategory'

const Layout = () => {
  return (
    <>
        <SearchBar/>
        <DiscoverCategory/>
        <RelatedCategory/>
    </>
  )
}

export default Layout