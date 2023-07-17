import React, { useEffect, useRef } from 'react';
import intersectionDiagram from '../Assets/Intersection-options.png'
import results1 from '../Assets/Intersection-results-1.png'
import results2 from '../Assets/Intersection-results-2.png'

export default function Intersections(props) {
  const myRef = useRef(null)
  useEffect(() =>{
    myRef.current.scrollTop = props.scrollPos
  })

  function scrollHandler(){
    console.log(myRef.current.scrollTop)
  }

  return <div style={{overflowY: 'scroll', height:'100vh'}} ref={myRef} onScroll={() => props.scroll(myRef.current.scrollTop)}> 
      <h3 className="drawer-header"> Monte Carlo Intersection Optimization </h3>
      <header className="App-header">
        <div className="left-align drawer-content-container">
          <h4> The Premise </h4>
          <p className="large-font">
            If you're like me, and generally have too much time on your hands, 
            you may have experienced mostly-useless questions popping into 
            your head now and again. What's worse is as an engineer, you just 
            might have the know-how to commit way too much time to one to solving 
            one of these. This time, our useless question asks for the fastest path 
            in a very specific scenario.
          </p>
          <p className="large-font">
            Here it is: Picture yourself walking
            down a major road. Upcoming is a 4 way intersection, which you will
            need to cross both ways. You can either choose to make both crossings 
            at the intersection, or you can immediately cross the road now, and 
            only make the second crossing at the intersection.
          </p>
          <div className="image-outer">
            <div className="image-container">
              <img 
                style={{
                  width:"min(50vw, 400px)",
                }}    
                loading="lazy"
                src={intersectionDiagram}/>
                <p className="image-caption">
                Diagram of problem statement with the starting location as the 
                upper-left black circle, goal as the lower right green circle,
                and two possible paths outlined. 
              </p>
            </div>
          </div>
          <h4> The Strategies and Setup </h4>
          <p className="large-font">
            We will refer to the two options as the "Lazy" and "Greedy" strategies 
            as presented in the above picture. The Greedy argument is based on wanting to save time 
            initially by making the first crossing without needing to wait for a 
            light to change. On the other hand, the Lazy argument proposes to 
            spend as much time at the intersection as possible, since 
            the bottleneck to time is needing to wait for lights to change at the 
            intersection. 
          </p>
          <p className="large-font">
            Now from this point, we can build a probablistic theory to explain 
            the expected times taken by both strategies, but that would be a decent 
            amount of work, and require showing some unfun math. While I do have 
            mathematical results linked in a report
            <a href="https://github.com/TianmYu/intersection-optimizer">
            &nbsp;here, on my github
            </a>
            , on this page I'll stick the more fun method, which is performing a 
            monte carlo simulation of the crossing and letting our computer do the 
            heavy lifting.
          </p>
          <p className="large-font">
            For the simulation, we set a couple of parameters. These include 
            the assumptions that the roads are constant width, that we walk 
            at a constant speed, that we can cross as long as the light 
            is green, and that we cannot predict 
            the state of the stoplight before arriving. Therefore, the stoplight state once we arrive 
            at the intersection will be our one random variable. We also introduce a 
            "dead time", being the time between stoplight changes when both lights are red. 
          </p>
          <p className="large-font">
            What we're interested in is how the crossing time of both strategies changes 
            as the "on time" - the time each stoplight is green - changes.
            Once all these assumptions are setup, we can turn the simulation on for 
            10,000 trials and the following is what we find.
          </p>
          <h4> The Results </h4>
          <p className="large-font">
            The following plot is made to compare the mean times of both strategies, 
            where strategy A is Lazy and B is Greedy. The ew and ns lights refer 
            to the lights governing the east-west crossing and north-south crossing 
            as per the previous diagram. A negative result in the plot means that it is 
            preferable to take the lazy strategy, wile a positive results favours the greedy 
            one. 
          </p>
          <div className="image-outer">
            <div className="image-container">
              <img 
                style={{
                  width:"min(50vw, 400px)",
                }}    
                loading="lazy"
                src={results1}/>
                <p className="image-caption">
                Expected value results for both strategies
              </p>
            </div>
          </div>
          <p className="large-font">
            As we can see, the Greedy strategy seems generally favourable, execpt when 
            both lights are on for a very short amount of time, or when the east/west 
            light is on for much longer than the north/south light. It makes sense that 
            the Lazy strategy is better in these cases as in the former, if the lights change 
            before you are able to fully cross then you essentially don't have to wait if 
            using Lazy, and in the latter the greedy strategy is exclusively dependant 
            on the average north/south light on time, and having it be much lower results in 
            increased waiting.
          </p>
          <p className="large-font">
            As we can see, the Greedy strategy seems generally favourable, execpt when 
            both lights are on for a very short amount of time, or when the east/west 
            light is on for much longer than the north/south light. It makes sense that 
            the Lazy strategy is better in these cases as in the former, if the lights change 
            before you are able to fully cross then you essentially don't have to wait if 
            using Lazy, and in the latter the greedy strategy is exclusively dependant 
            on the average north/south light on time, and having it be much lower results in 
            increased waiting.
          </p>
          <p className="large-font">
            In conclusion, in most cases it's better to cross the street whenever you can,
            instead of waiting for the intersection. Exceptions include if you are 
            walking to an intersection that changes very often, or if you are on a small road 
            walking towards an intersection with a larger road.
          </p>
          <p className="large-font">
            For a more complete explanation, along with additional graphs for both 
            methods, check out the   
            <a href="https://github.com/TianmYu/intersection-optimizer"> code and report I have on my github
            </a>
          </p>
        </div>
    </header> </div>
}