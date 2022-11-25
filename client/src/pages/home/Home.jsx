import "./home.css"
import Header from "../../Components/header/Header"
import Sidebar from "../../Components/sidebar/Sidebar"
import Posts from "../../Components/posts/Posts"
import axios from "axios";
import {useState} from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    }
    fetchPosts()
  },[search]);
  return (
    <>
      <Header/>
      <div className='home'>
       <div className="sidebar-wrap">  <Sidebar/> </div>
       <div className="post-wrap">  <Posts posts={posts}/> </div>
      </div>
    </>
  )
}
