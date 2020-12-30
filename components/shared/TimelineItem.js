import Link from "next/link"

const TimelineItem = ({children, title, dateTime}) => {
  return(
    <div className="flex">
      <div className="w-1/12 border-l border-gray-400">
        <div className="flex flex-col">
          <div className="border-b border-gray-400">&nbsp;</div>
          <div>&nbsp;</div>
          <span className="dot"></span>
        </div>
      </div>
      <div className="flex-grow rounded shadow-lg border-solid border border-gray-100 p-5 my-2">
        <Link href="/">
          <a className="nav-link">
            <h2 className="mb-3 font-bold text-xl font-serif">{title}</h2>
          </a>
        </Link>
        {children}
      </div>
    </div>
  )
}

export default TimelineItem