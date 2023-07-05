import React, { useEffect, useRef } from 'react';

export default function Test1(props) {
  const myRef = useRef(null)
  useEffect(() =>{
    console.log("mounted")
    myRef.current.scrollTop = props.scrollPos
  })

  function scrollHandler(){
    console.log("test")
    console.log(myRef.current.scrollTop)
  }

  return <div style={{overflowY: 'scroll', height:'100vh'}} ref={myRef} onScroll={() => props.scroll(myRef.current.scrollTop)}> <h1> test 1 </h1>
      <header className="App-header" style={{height: '200vh',}}>
      <p>
        test 2
      </p>
    </header> </div>
}