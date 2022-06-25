import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

const App = () => {


   const [category,setCategory]=useState('all') //ī�װ� ����Ʈ�� all
   const onSelect=useCallback(category=>setCategory((category),[]))

  return (
    <>
      {/* ī�װ� ���¿� ī�װ� ���� �Լ��� �Ѱ��� */}
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
}
export default App
