import React, { useEffect, useRef } from 'react';
import FileViewer from 'react-file-viewer';

import resume from "../Assets/Resume-Tian-Yu.pdf";


const type = "pdf"
const file = "Resume-Tian-Yu.pdf"

export default function ResumeSlider(props) {

    const myRef = useRef(null)
    useEffect(() =>{
      console.log("mounted")
      myRef.current.scrollTop = props.scrollPos
    })

    const onError = (e) => {
        console.log(e, "error in file-viewer");
      };
    
    return (
    <div style={{overflowY: 'scroll', height:'100vh'}} ref={myRef} onScroll={() => props.scroll(myRef.current.scrollTop)}>
        <div style={{ height:"100%"}}>
        <FileViewer
            className="resume-viewer-style"
            fileType={type}
            filePath={file}
            onError={onError}/>
        </div>
    </div>
    )
  }