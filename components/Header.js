import Link from "next/link"

const Header = () => {
  return(
    <header className="flex flex-col items-center">
      <div className="flex-grow-0 h-28 overflow-hidden pl-4">
        <img src="/logo.svg" alt="Weston Dransfield Logo" className="w-60" />
      </div>
      <div>
        <Link href="/">
          <a>Articles</a>
        </Link>
        <span> </span>
        <Link href="/">
          <a>About</a>
        </Link>
      </div>
    </header>
  )
}

export default Header