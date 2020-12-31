import Link from "next/link"

const TimelineItem = ({children, title, dateTime}) => {
  return(
    <div className="flex justify-center">
      <div className="w-10 border-l border-gray-400">
        <div className="flex flex-col text-center">
          <div className="border-b border-gray-400 h-20">
            &nbsp;
          </div>
          <span className="dot"></span>
        </div>
      </div>
      <div className="flex-grow rounded shadow-lg border-solid border border-gray-100 my-8 p-5 max-w-xs md:max-w-2xl">
        <Link href="/">
          <>
            <a className="nav-link">
              <h2 className="font-bold text-xl font-serif">{title}</h2>
            </a>
            <h3 className="mb-3 italic text-gray-500">{ dateTime }</h3>
          </>
        </Link>
        {children}
      </div>
    </div>
  )
}

export default TimelineItem