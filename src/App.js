import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

   const [data,setData]=useState(null)
   const onClick=async ()=>{
      try{
         const response=await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8dab6844dca4de7b2800aa0312b9d54')
            setData(response.data)
      }
      catch (e){ 
         console.log(e)
      }
   }
   

   return(
      <>
         <div>
            <button onClick={onClick}> 불러오기 </button>
            {data&& <textarea rows={7} value={JSON.stringify(data,null,2)} />}
         </div>
      </>
   )

}
export default App