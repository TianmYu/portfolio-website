import timelineData from './TimelineData';

const TimelineItem = ({ data }) => {
    console.log(data)
    return (
    <div className="timeline-item">
        <div className="timeline-item-content">
        <div className="container-fluid borderless">
            <div className="row no-gutters borderless">
                <span className="timeline-tag" style={{ background: data.category.color }}>
                    <div className="timeline-tag-text"> {data.category.tag} </div>
                </span>
                    <time datetime={data.date} className="timeline-time"> {data.date} </time>
            </div>
            <div className="row no-gutters borderless">
                <p className="timeline-text">{data.text}</p>
            </div>
            <span className="circle" />
        </div>
        </div>
    </div>);
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