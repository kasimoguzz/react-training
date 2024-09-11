import {useTheme} from '../context/ThemeContext'

function Header() {
    const {theme, setTheme} = useTheme()
  return (
    <div>
        theme : {theme}
        <br />
        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>change theme</button>
    </div>
  )
}

export default Header