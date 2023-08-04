import React, { useEffect, useRef } from 'react';

export default function Thesis(props) {
    const myRef = useRef(null)
    useEffect(() =>{
      myRef.current.scrollTop = props.scrollPos
    })
  
    function scrollHandler(){
      console.log(myRef.current.scrollTop)
    }
  
    return <div style={{overflowY: 'scroll', height:'100vh'}} ref={myRef} onScroll={() => props.scroll(myRef.current.scrollTop)}> 
        <h3 className="drawer-header"> Thesis: AI Parkinson's Symptom Detection </h3>
        <header className="App-header">
          <div className="left-align drawer-content-container">
            <h4> Introduction </h4>
            <p className="large-font">
              My undergraduate program has a thesis component - 
              a final project conducted over a year in partnership with a faculty 
              professor.
            </p>
            <p className="large-font">
              My project involved building and training a neural network. This was
              partially to gain experinece in the practise, and also because it 
              counted as two credits to an AI minor, which I had been working up 
              to as well. 
            </p>
            <p className="large-font">
              The particular project had us detecting a particular symtom of parkinson's 
              disease, called "freezing of gait", from real time accelerometer readings. 
              You can see the results <a href="https://ieeexplore.ieee.org/document/10123828">here</a>.
            </p>
            <h4> Methods</h4>
            <p className="large-font">
              As a high level summery, I worked to build a convolutional neural network 
              and trained it using the open daphnet freezing of gait dataset. The whole process 
              was done in Python, using the Tensorflow Keras library. The methodology was fairly standard, 
              and we implemented features such as early stopping, drop out, and ensemble prediction.
              However, we were severely limited by the available training data, which was too small. This 
              resulted in rapid ovefitting of the model. 
            </p>
            <p className="large-font">
              To combat this, I devised a method of data splitting that allowed for data augmentation.
              Here's how it worked. Our model worked on 1 dimensional time series data. We would split the data into windows 
              of a fixed number of data points, and the model would make predictions on these windows 
              of whether or not a freezing event was observed. 
            </p>
            <p className="large-font">
              Overlapping the windows would allow for more windows to be produced, and thus more training 
              data. However, since windows were randomly assigned to training or validation sets, 
              underlying data could be included in both training and validation data which is a big no no 
              for machine learning.
            </p>
            <p className="large-font">
              The solution was to therefore first split the time series into 
              groups called partitions, which were several windows long. There would be no overlap between 
              partitions, and partitions would be randomly assigned to training or validation sets. Within 
              individual partitions, we could then generate windows with arbitrarily large overlaps without 
              worrying about data being duplicated between validation and training sets.
            </p>
            <h4> Results</h4>
            <p className="large-font">
              This change resuled in a nearly 10% increase in relevant sensitivity and specificity performance 
              metrics. Unfortunately these results were not obtained in time for the published paper, but 
              did make their way onto my thesis. The final model that I left was able to achieve similar 
              sensitivity and specificity results as other paper's models, around 90% in both, while requiring 
              around 10% of the trainable parameters.
            </p>
        </div>
        </header>
    </div>
}