import React, { useContext, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import { RecipieContext } from '../contexts/recipieContext'
import ShowRecipie from '../components/ShowRecipie'

const HomePage = () => {
  const {recipies} = useContext(RecipieContext)
 
  return (
    <>
   <main className='py-8 px-4'>
     <SearchBar />
     {
      recipies.length > 0 &&
      <ShowRecipie />
     }
   </main>
    </>
  )
}

export default HomePage