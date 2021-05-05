import ThemeProvider from './ThemeChanger/contexts/ThemeContext' 
import ThemedBlock from './ThemeChanger/ThemedBlock'
import Content from './Content/ThemeChanger.Block'

export default function ThemeChanger() {
  return (
    <>
      <ThemeProvider>
        <h1>Theme Changer</h1>
        <ThemedBlock />
      </ThemeProvider>
      <Content/>
    </>
  );
}
