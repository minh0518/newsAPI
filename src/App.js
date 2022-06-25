import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

const App = () => {


   const [category,setCategory]=useState('all') //카테고리 디폴트는 all
   const onSelect=useCallback(category=>setCategory((category),[]))

  return (
    <>
      {/* 카테고리 상태와 카테고리 변경 함수를 넘겨줌 */}
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
}
export default App
