import timelineData from './TimelineData';

const TimelineItem = ({ data }) => {
    if (data.type === "entry"){
    return (
    <div className="timeline-item">
        <div className="timeline-item-content">
        <div className="container-fluid borderless">
            <div className="row no-gutters borderless timeline-header">
                <time datetime={data.date} className="timeline-date"> {data.date} </time>
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
    </div>);
    }
    else{
        return (
            <div className="timeline-date-heading">
                <div>
                    {data.text}
                </div>
                <span className="timeline-circle" style={{backgroundColor: data.color}} />
            </div>
        )
    }
};

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline