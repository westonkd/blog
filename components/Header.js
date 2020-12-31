import Link from "next/link"

const Header = () => {
  return(
    <header className="flex flex-col items-center">
      <div className="flex-grow-0 h-36 overflow-hidden pl-4">
        <img src="/logo.svg" alt="Weston Dransfield Logo" className="w-80" />
      </div>
      <div className="pt-2">
        <Link href="/posts">
          <a className="nav-link mr-3">Posts</a>
        </Link>
        <Link href="/">
          <a className="nav-link transition-all">About</a>
        </Link>
      </div>
    </header>
  )
}

export default Header