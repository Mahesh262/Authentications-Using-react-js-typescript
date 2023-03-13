import React from 'react'

  interface AppProps {
    movie:any
 }
const ApiCalls = ({movie}:AppProps) => {
     console.log(movie)
  return (
    <>
    ApiCalls
    <div className='App-header'>

    
    {movie.result?.map((items:any,i:number)=>{
        return(
            <div key={i}>
<p> {items.title}</p>
            </div>
        )
    })}
    </div>
    
    </>
  )
}

export default ApiCalls