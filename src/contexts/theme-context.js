import { createContext, useState } from "react";

// Theme values = light, dark

// Font values = sans serif, serif, mono

const ThemeContext = createContext();

function ThemeContextProvider({children}) {
  const [activeTheme, setActiveTheme] = useState('light')
  const [activeFont, setActiveFont] = useState('serif')


  const changeActiveTheme = () => {
    setActiveTheme((prevState) => {
      return prevState === 'light' ? 'dark' : 'light'
    })
  }

  const changeActiveFont = (newFont) => {
    setActiveFont(newFont)
  }

  const context = {
    activeTheme,
    activeFont,
    changeActiveTheme,
    changeActiveFont
  }



  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}

export {ThemeContextProvider}
export default ThemeContext