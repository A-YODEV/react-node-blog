import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories/");
            setCats(res.data);
        }
        getCats();
    }, []);
  return (
    <div className="sideBar">
        <div className="sideBarItems">
            <span className="sideBarTitle">ABOUT ME</span>
            <img className="avatar" src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis iure, dolorum qui architecto officia neque vero consectetur placeat autem similique, harum inventore unde iusto temporibus quis. Distinctio, eos magnam!</p>
        </div>
        <div className="sideBarItems"></div>
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sideBarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        <div className="sideBarItems"></div>
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
                <i className="sideBarIcon fa-brands fa-instagram"></i>
                <i className="sideBarIcon fa-brands fa-linkedin"></i>
                <i className="sideBarIcon fa-brands fa-facebook"></i>
                <i className="sideBarIcon fa-brands fa-twitter"></i>
            </div>
    </div>
  )
}







