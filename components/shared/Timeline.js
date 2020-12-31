import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  const example = {
    date: "date time",
    title: "title",
    body: "body",
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <TimelineItem dateTime={item.dateTime} title={item.title} key={`${item.dateTime}${item.title}`}>
          {item.body}
        </TimelineItem>
      ))}
    </div>
  );
};

export default Timeline;
