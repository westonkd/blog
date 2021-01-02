import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  const example = {
    date: "date time",
    title: "title",
    body: "body",
  };

  return (
    <div className="flex flex-col" aria-live="polite" id="search-results">
      {items.map((item) => (
        <TimelineItem dateTime={item.dateTime} title={item.title} slug={item.slug} key={item.slug}>
          {item.body}
        </TimelineItem>
      ))}
    </div>
  );
};

export default Timeline;
