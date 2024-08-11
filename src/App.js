import { Routes, Route } from'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Banner from './components/Banner/Banner';
import Range from './components/Range/Range';
import bootstrap from 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Select from './components/Select/PositionSelect';
import Offcanvas from './components/Offcanvas/Sidebar';
import Register from './pages/front/Register';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
function App() {
  

  

  function handleClick() {
    alert('hello world')
  }

  function handleCancel() {
    alert('cancel!')
  }
  const [rentVal, setRentVal] = useState(3000);
  const [houseAge,setHouseAge] = useState(1);

  const data = {
      rent : rentVal,
      houseAge : houseAge
    }
  const [selectCity,setSelectCity] = useState('請選擇縣市')
  const [selectArea,setSelectArea] = useState('請選擇區域')
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<FrontLayout/>}>
            <Route path='' element={<Home />}></Route>
            <Route path='register' element={<Register/>}></Route>
          </Route>
          
      </Routes>
      
      
      <div className="container">
        <div className="">
          <Button buttonTxt={'確認'} outline={false} bgColor={'success'} disabled={false} onClick={handleClick}></Button>
          <Button buttonTxt={'取消'} outline={true} bgColor={'danger'} disabled={false} onClick={handleCancel}></Button>
        </div>
        <Range labelTxt={'租金'}min={3000} max={20000} step={1000}  rangeVal={rentVal} setRangeVal={setRentVal}/>
        <Range labelTxt={'屋齡'}min={1} max={50} step={1}  rangeVal={houseAge} setRangeVal={setHouseAge}/>
        <Select selectCity={selectCity} setSelectCity={setSelectCity} selectArea={selectArea} setSelectArea={setSelectArea}/>
        <Offcanvas />
      </div>
    
    </div>


  );
}

export default App;
