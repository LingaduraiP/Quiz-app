import {  useEffect, useState } from "react"

const useFetchData=(url)=>{
    const [data,setData] =useState('')
    useEffect(()=>{
        const fetchData=(async()=>{
            const response = await fetch(url)
            const jsonData= await response.json()
            setData(jsonData)
        })   
         fetchData()
        },[])
  
  
    return data
}

export default useFetchData