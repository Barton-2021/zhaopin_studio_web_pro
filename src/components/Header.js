import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <div className="brand">
          <Link href="#">广州智尘梦科技工作室</Link>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">首页</a>
          <a href="#jobs" className="nav-link">岗位</a>
          <a href="#culture" className="nav-link">文化</a>
          <a href="#contact" className="nav-link cta">联系我们</a>
        </nav>
      </div>
    </header>
  )
}
