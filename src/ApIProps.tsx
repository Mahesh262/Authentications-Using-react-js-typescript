import React,  { useEffect, useState }  from 'react'
import ApiCalls from './ApiCalls'
import axios from 'axios'
const ApIProps = () => {
    const [movies,setMovies]= useState([])
    const loadpost = async()=>{
      let response = await axios.post("https://hoblist.com/api/movieList",{ category:"movies",language:"kannada",genre:"all", sort:"voting"})
       setMovies(response.data)
    //   let response= await axios.get('https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1',{ headers:{ "X-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
    //   "X-tenant-key":"DIVANOR123"}})
    //  setMovies(response.data)
    }
  
    useEffect(()=>{
      loadpost()
    },[])

  return (
    <div>
        <ApiCalls movie={movies}/>
        
        </div>
  )
}

export default ApIProps