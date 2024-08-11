import { useEffect, useState } from 'react';
import './select.scss';
import Taiwan from '../../assets/taiwan.json';

export default function Select({ selectCity, setSelectCity, selectArea, setSelectArea }) {
    const [country, setCountry] = useState([]);
    function handleSelectCity(e) {
        setSelectCity(e.target.value);
        setSelectArea('請選擇區域');

    }
    function handleSelectArea(e) {
        setSelectArea(e.target.value);
    }
    useEffect(() => {
        setCountry(Taiwan)
    }, [])
    return (
        <>
                <div className="row row-cols-1 row-cols-md-2 gy-2">
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-white dropdown-toggle border w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectCity}
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item text-center" value='所有縣市' onClick={handleSelectCity}>所有縣市</button></li>
                                {Object.values(country).map((city, i) => {
                                    return (
                                        <li key={i}><button className="dropdown-item text-center" value={city.CityName} onClick={handleSelectCity}>{city.CityName}</button></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dropdown">
                            <button className="btn btn-white dropdown-toggle border w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectArea}
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item text-center" value='所有地區' onClick={handleSelectArea}>所有地區</button></li>
                                {Object.values(country).find((city) => city.CityName === selectCity)?.AreaList.map((area, i) => {
                                    return (
                                        <li key={i}><button className="dropdown-item text-center" value={area.AreaName} onClick={handleSelectArea}>{area.AreaName}</button></li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}