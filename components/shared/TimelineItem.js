import Link from "next/link";
import Tag from "./Tag";
import { textColors } from "../../concerns/topics"

const TimelineItem = ({ children, title, dateTime, slug, tags }) => {
  return (
    <div className="flex justify-center">
      <div className="w-10 border-l border-gray-400">
        <div className="flex flex-col text-center">
          <div className="border-b border-gray-400 h-20">&nbsp;</div>
          <span className="dot"></span>
        </div>
      </div>
      <div className="flex-grow rounded shadow-lg border-solid border border-gray-100 my-8 p-5 max-w-xs md:max-w-2xl">
        <Link href={`/posts/${slug}`}>
          <a className="nav-link">
            <h2 className={`font-sans prose-h2 ${textColors[tags[0] || 'default']}`}>{title}</h2>
          </a>
        </Link>
        <div className="flex">
          <h3 className="mb-3 italic text-gray-500">{dateTime}</h3>
          <div className="flex-grow"></div>
          <div className="text-right">
            {tags.map((t, index) => (
              <Tag name={t} key={`${t}-${index}`} />
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
