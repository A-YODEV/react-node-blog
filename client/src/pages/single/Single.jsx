import "./single.css"
import Sidebar from "../../Components/sidebar/Sidebar"
import SinglePost from "../../Components/singlepost/SinglePost"

export default function Single() {
  return (
    <div className="single">
      <div className="singlePostWrap"><SinglePost/></div>
      <div className="sidebarWrap"><Sidebar/></div>
    </div>
  )
}
