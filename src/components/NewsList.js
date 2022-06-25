import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top:2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

// const sampleArticle={
//     title : '제목',
//     description : '내용',
//     url : 'https://google.com',
//     urlToImage : 'https://via.placeholder.com/160'
// }

const NewsList = () => {

    const [articles,setArticles]=useState(null)
    const [loading,setLoadging]=useState(false)

    useEffect(()=>{

        //내부에 async함수 따로 생성
        const fetchData= async ()=>{
            setLoadging(true)
            try{
                const response=await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a8dab6844dca4de7b2800aa0312b9d54')
                setArticles(response.data.articles)
            }
            catch(e){
                console.log(e)
            }
            setLoadging(false)
        }
        fetchData() //실행

    },[])

    //대기 중일 때
    if(loading){
        return <NewsItemBlock>대기 중...</NewsItemBlock>
    }
    //아직 articles 값이 설정되지 않았을 때
    if(!articles){
        return null
    }



    
    return(
        <NewsItemBlock>
            {articles.map((article)=>(
                <NewsItem article={article} key={article.url}/>
            ))}
        </NewsItemBlock>

    )
}
export default NewsList
