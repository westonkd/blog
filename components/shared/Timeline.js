import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  const example = {
    date: "date time",
    title: "title",
    body: "body",
  };

  const elements =
    items.length > 0 ? (
      items.map((item) => (
        <TimelineItem
          dateTime={item.dateTime}
          title={item.title}
          slug={item.slug}
          key={item.slug}
          tags={item.tags}
        >
          {item.body}
        </TimelineItem>
      ))
    ) : (
      <div className="flex-grow text-center mt-8">No results found 😢</div>
    );

  return (
    <div className="flex flex-col" aria-live="polite" id="search-results">
      {elements}
    </div>
  );
};

export default Timeline;
