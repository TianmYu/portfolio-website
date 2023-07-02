import React, { Component } from "react";
import timelineDataRaw from './TimelineData';

const TimelineItem = ({ data, clickHandler }) => { 
    let itemClass = "timeline-item"
    if (data.page_link){
        itemClass = "timeline-item timeline-link"
    }
    return (
    <div onClick={() => clickHandler(data.page_link, data.page)}>
        {data.type === "entry" && <div className={itemClass}>
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
            <div>
                {data.text}
            </div>
            <span className="timeline-circle" style={{backgroundColor: data.color}} />
        </div>}
    </div>
    )
};

class Timeline extends Component {
    render(){
        let timelineData = timelineDataRaw;
        return(
            timelineData.length > 0 && (
                <div className="timeline-container">
                    <h2 className="timeline-title"> Projects </h2>
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} clickHandler={this.props.toggle}/>
                    ))}
                </div>
            )
        )
    }
}

export default Timeline