import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export default function FrontLayout(){
    const navbarItems = [
        {
          item: '網站公告',
          link: '#'
        },
        {
          item: '關於我們',
          link: '#'
        }
      ]
    return(
        <>
            <Navbar items={navbarItems}></Navbar>
            <Outlet></Outlet>
        </>
    )
}