import Link from "next/link"

const Header = () => {
  return(
    <header className="flex flex-col items-center">
      <div className="flex-grow-0 h-28 overflow-hidden pl-4">
        <span className="logo">
          Weston
        </span>
      </div>
      <div>
        <Link href="/">
          <a className="nav-link mr-3">Posts</a>
        </Link>
        <Link href="/about">
          <a className="nav-link transition-all">About</a>
        </Link>
      </div>
    </header>
  )
}

export default Header