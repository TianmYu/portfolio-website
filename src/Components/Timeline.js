import React, { Component } from "react";
import timelineDataRaw from './TimelineData';
import {ReactComponent as ArrowSvg} from "../Assets/right-arrow.svg"

const TimelineItem = ({ data, clickHandler }) => { 
    let itemClass = "timeline-item"
    if (data.page_link){
        itemClass = "timeline-item timeline-link"
    }
    return (
    <div className="timeline-item-container" onClick={() => clickHandler(data.page_link, data.page)}>
        {data.type === "entry" && 
        <div className={itemClass}>
            <div className="timeline-item-content">
                <div className="container-fluid borderless">
                    <div className="row no-gutters borderless timeline-header">
                        <time dateTime={data.date} className="timeline-date"> {data.date} </time>
                        <span className="timeline-tag" style={{ background: data.category.color }}>
                            <div className="timeline-tag-text"> {data.category.tag} </div>
                        </span>  
                    </div>
                    <div className="row no-gutters borderless">
                        <p className="timeline-text">{data.text}</p>
                    </div>
                    <span className="timeline-circle" />
                </div>
            </div>
        </div>}
        {data.type === "timestamp" && <div className="timeline-date-heading">
            <a className="anchor" id={data.text}> </a>
            <div>
                {data.text}   
            </div>
            <span className="timeline-circle-date" />
        </div>}
        {data.page_link &&
        <div>
        <ArrowSvg
            fill='#e3e3e3'
            style={{
                height:30,
                width:30,
                position:"relative",
                top:"calc(50% - 15px)"
            }}/>
        </div>
        }
    </div>
    )
};

class Timeline extends Component {
    render(){
        let timelineData = timelineDataRaw;
        return(
            timelineData.length > 0 && (
                <div className="timeline-container">
                    <h2 className="timeline-title"> Projects & Work History </h2>
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} clickHandler={this.props.toggle}/>
                    ))}
                </div>
            )
        )
    }
}

export default Timeline