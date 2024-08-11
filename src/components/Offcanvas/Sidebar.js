import { useEffect, useRef, useState } from "react";
import { Offcanvas } from "bootstrap";
import PositionSelect from '../Select/PositionSelect'


export default function Sidebar() {
    const sidebarRef = useRef(null);
    const [selectCity,setSelectCity] = useState('請選擇縣市')
    const [selectArea,setSelectArea] = useState('請選擇區域')
    useEffect(()=>{
        sidebarRef.current = new Offcanvas('#offcanvasExample')
    },[])
    function openOffcanvas(){
        sidebarRef.current.show();
    }
    function closeOffcanvas(){
        sidebarRef.current.hide();
    }

    //data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
    return (
        <>
            <button className="btn btn-primary" type="button"  onClick={openOffcanvas}>
                <i className="bi bi-search" style={{width:'100px',height:'100px'}}></i>
            </button>
            <div className="offcanvas offcanvas-start" ref={sidebarRef} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset" onClick={closeOffcanvas}></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                    <PositionSelect selectCity={selectCity} setSelectCity={setSelectCity} selectArea={selectArea} setSelectArea={setSelectArea}/>
                    </div>
                </div>
            </div>
        </>
    )
}