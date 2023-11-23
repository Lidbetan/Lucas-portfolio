
import { useState, useEffect } from 'react'
import ThemeContext from './themeContext'

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  console.log(theme)
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light")
    }
  }, [])

  const handleThemeSwitch = () => (
    setTheme(theme === "dark" ? "light" : "dark")
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])


  const values = {
    theme,
    handleThemeSwitch
  }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider