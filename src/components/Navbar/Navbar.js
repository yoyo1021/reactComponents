import './Navbar.scss';
import { useEffect, useRef, useState } from 'react';
export default function Navbar({ items }) {

    const burgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const navLinkRef = useRef([]);
    const [checkLogin, setCheckLogin] = useState(true);
    useEffect(() => {
        const toggleBurger = burgerRef.current;
        const navMenu = navMenuRef.current;
        const navLink = navLinkRef.current;

        if (toggleBurger && navMenu && navLink) {
            const navLinks = navMenu.querySelectorAll('li');
            const handleToggle = () => {
                navMenu.classList.toggle('active');
                toggleBurger.classList.toggle('active');
            };
            const removeActive = () => {
                navMenu.classList.remove('active');
                toggleBurger.classList.remove('active');
            }

            toggleBurger.addEventListener('click', handleToggle);
            navLinks.forEach((navLink) => {
                navLink.addEventListener('click', removeActive)
            });

            // 清理函數，以防止重複添加事件監聽器或記憶體洩漏
            return () => {
                toggleBurger.removeEventListener('click', handleToggle);
                //navLink.removeEventListener('click',removeActive);
            };
        }
    }, [])

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="burger" ref={burgerRef} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="navMenu" ref={navMenuRef}>
                {items.map((item, i) => {
                    return (
                        <li key={i}><a href={item.link} className='navLink' ref={navLinkRef}>{item.item}</a></li>
                    )
                })}
                {checkLogin ? (
                    <>
                        <li><a href='#' className='navLink' ref={navLinkRef}>我的最愛</a></li>
                        <li><a href='#' className='navLink' ref={navLinkRef}><i className="bi bi-chat-left-dots"></i></a></li>
                        <li>
                            <div className="dropdown h-100 py-2 p-lg-3">
                                <button className="btn btn-gray w-100 h-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle text-white"></i>
                                </button>
                                <ul className="dropdown-menu bg-black end-0" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item " href="#">個人檔案</a></li>
                                    <li><a className="dropdown-item " href="#">登出</a></li>
                                </ul>
                            </div>
                        </li>
                    </>
                ) : (
                    <li><a href='#' className='navLink' ref={navLinkRef}>登入</a></li>
                )}

            </ul>
        </nav>


    )
}