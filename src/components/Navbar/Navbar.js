import './Navbar.scss';
import {useEffect,useRef} from 'react';
export default function Navbar({items}) {

    const burgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const navLinkRef = useRef([]);
    useEffect(()=>{
            const toggleBurger = burgerRef.current;
            const navMenu = navMenuRef.current;
            const navLink= navLinkRef.current;
            
            if (toggleBurger && navMenu && navLink) {
                const navLinks = navMenu.querySelectorAll('li');
                const handleToggle = () => {
                    navMenu.classList.toggle('active');
                    toggleBurger.classList.toggle('active');
                };
                const removeActive = ()=>{
                    navMenu.classList.remove('active');
                    toggleBurger.classList.remove('active');
                }
                
                toggleBurger.addEventListener('click', handleToggle);
                navLinks.forEach( (navLink) => {
                    navLink.addEventListener('click',removeActive)
                });
    
                // 清理函數，以防止重複添加事件監聽器或記憶體洩漏
                return () => {
                    toggleBurger.removeEventListener('click', handleToggle);
                    //navLink.removeEventListener('click',removeActive);
                };
            }
    },[])

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="burger" ref={burgerRef} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="navMenu" ref={navMenuRef}>
                {items.map((item,i)=>{
                    return(
                        <li key={i}><a href={item.link} className='navLink' ref={navLinkRef}>{item.item}</a></li>
                    )
                })}
            </ul>
        </nav>


    )
}