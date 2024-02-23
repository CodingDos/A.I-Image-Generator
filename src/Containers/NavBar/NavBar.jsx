import { useState } from 'react'
import "./NavBar.css"



function NavBar() {

  const [menuItem, setMenuItem] = useState("menuBar Unclicked")
  const [menuList, setMenuList] = useState("menu hidden")
  const [menuClicked, setMenuClicked] = useState(false)

  const showMenu = () => {
    if(!menuClicked) {
      setMenuItem("menuBar Clicked")
      setMenuList("menu visible")
    } else {
      setMenuItem("menuBar Unclicked")
      setMenuList("menu hidden")
    }
    setMenuClicked(!menuClicked)
  }

  return (
    <>
        <nav>
            <div className="NavBar-menu" onClick={showMenu}>
                <div className={menuItem}></div>
                <div className={menuItem}></div>
                <div className={menuItem}></div>
            </div>
        </nav>
        <div className={menuList}></div>
    </>
  )
}

export default NavBar