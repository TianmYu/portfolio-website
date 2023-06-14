import timelineData from './TimelineData';

const TimelineItem = ({ data }) => {
    console.log(data)
    return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p className="timeline-text">{data.text}</p>
            <span className="circle" />
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