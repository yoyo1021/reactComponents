import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Banner from './components/Banner/Banner';
import bootstrap from 'bootstrap'

function App() {
  const navbarItems = [
    {
      item: '首頁',
      link: '#'
    },
    {
      item: '關於我們',
      link: '#'
    },
    {
      item: '聯絡我們',
      link: '#'
    }
  ]

  const bannerImgs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1609081144289-eacc3108cd03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1634822929277-0c51ca0e8846?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  function handleClick() {
    alert('hello world')
  }

  function handleCancel() {
    alert('cancel!')
  }
  return (
    <>
      <Navbar items={navbarItems}></Navbar>
      <Banner imgs={bannerImgs} />
      <div className="">
        <Button buttonTxt={'確認'} outline={false} bgColor={'success'} disabled={false} onClick={handleClick}></Button>
        <Button buttonTxt={'取消'} outline={true} bgColor={'danger'} disabled={false} onClick={handleCancel}></Button>
      </div>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}
    </>


  );
}

export default App;
