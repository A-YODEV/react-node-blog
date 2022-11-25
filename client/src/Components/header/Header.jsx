import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://cdn.pixabay.com/photo/2018/04/15/08/25/roses-3321098__340.jpg" alt="" />
    </div>
  )
}
