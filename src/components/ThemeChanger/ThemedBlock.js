import { useTheme, useThemeUpdate } from './contexts/ThemeContext'

export default function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button className="btn btn-lg btn-primary" onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>
        A themed block that uses Context 
        provided by ThemeChanger.js
      </div>
    </>
  )
}
