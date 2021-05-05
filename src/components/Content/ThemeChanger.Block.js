const codeSamples = [
// Sample 1
`
<ThemeContext.Provider value={true}>
  ...children
</ThemeContext.Provider>
`
,

// Sample 2
`
/**
 * ThemeChanger.js
 **/ 
return (
  <>
    <ThemeProvider>
      <h1>Theme Changer</h1>
      <ThemedBlock />
    </ThemeProvider>
    <Content/>
  </>
);`
,

// Sample 3
`
/**
 * ThemeChanger/contexts/ThemedContent.js
 **/ 

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
`
,

// Sample 4
`
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
`
,

// Sample 5
`
export default function ThemeProvider({ children }) {
  ...variables available to the component
  ...return(
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  ) 
}`
,

// Sample 6
`
/**
 * Before the return()
 **/ 
const [darkTheme, setDarkTheme ] = useState(true);

function toggleTheme() {
  setDarkTheme(prevDarkTheme => !prevDarkTheme);
}

/**
 * Inside the return()
 **/ 
<ThemeContext.Provider value={darkTheme}>
// ... and
<ThemeUpdateContext.Provider value={toggleTheme}>
`
,

// Sample 7
`
/**
 * ThemeChanger/ThemedBlock.js
 **/ 
// Import Custom React Hooks
import { useTheme, useThemeUpdate } from './contexts/ThemeContext'

export default function ContextComponent() {
  const darkTheme = useTheme(); // Custom Hook
  const toggleTheme = useThemeUpdate(); // Custom Hook
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
`
]

export default function Block() {
  return(
    <>
      <div className="row align-items-center">
        <div className="col-12">
          <h4>Use Case: useContext</h4>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>What is happening?</h5>
            <p>
              The <code className="font-weight-bold">useContext()</code> hook 
              uses two functions and a custom component in order to be implemented:
            </p>
            <ul>
              <li>
                A context object created using <code>React.createContext()</code>, 
                i.e. <code>ThemeContext = React.createContext()</code>
              </li>
              <li>
                A consumer function that returns the value stored in the context object, 
                i.e. <code>contextValue = useContext(ThemeContext)</code>
              </li>
              <li>
                A Provider wrapper component that passes the context value down to its children, 
                i.e. <code><pre>{codeSamples[0]}</pre></code>
              </li>
            </ul>
            <p>
              <code>useContext()</code>
              &nbsp; is used to pass two stateful variables down
              from a parent <code>ThemeProvider</code> component element to
              the child <code>ThemedBlock</code> component. The <code>ThemedBlock</code>
              &nbsp; component uses these provided variables to determine which 
              styles to apply to the <code>ThemedBlock</code> and toggle 
              which style object properties to use. The first context is a <code>boolean</code>
              &nbsp; used to determine, inside of the component's styles, if the theme is 'dark' or 'light'. 
              The second context is the the handler for an <code>onClick</code> event, 
              to set the <code>boolean</code> to true or false.
            </p>
            <p>The top-most parent in <code>ThemeChanger.js</code> inserts the 
              &nbsp;<code>ThemeProvider</code> component located in <code>./ThemeChanger/contexts/ThemeContext.js</code>.
              The <code>ThemedBlock</code> component in <code>./ThemeChanger/ThemedBlock.js</code> is nested
              inside the <code>ThemeProvider</code> component as a child.
            </p>
            <p>
              The <code>ThemeProvider</code> component handles the state of the <code>boolean</code> and
              the <code>onClick</code> event, and passes these down to its child components through Context Providers. 
              Custom hooks are used to export these contexts from <code>ThemeProvider</code>, which are then imported and callable inside of 
              the <code>ThemedBlock</code> component.
            </p>
          </div>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'>
            <h5>How is this implemented?</h5>
            <p>
              The top-most parent, <code>ThemeChanger.js</code> wraps the <code>ThemedBlock</code> component inside of the <code>ThemeProvider</code> component.
            </p>
            <code>
              <pre>
                {codeSamples[1]}
              </pre>
            </code>
            <p>
              The <code>ThemeProvider</code> component in <code>./ThemeChanger/contexts/ThemeContext.js</code> creates two
              contexts using <code>React.createContext()</code>. 
            </p>
            <code>
              <pre>
                {codeSamples[2]}
              </pre>
            </code>
            <p>
              Using React Custom Hooks, these two new contexts are exported so they are available to the
              <code>ThemedBlock</code> component. Inside of the export, we return the Context wrapped 
              inside of a <code>useContext()</code> function call. 
            </p>
            <code>
              <pre>
                {codeSamples[3]}
              </pre>
            </code>
            <p>
              The <code>ThemeProvider</code> component is defined with the ability to accept 
              children components and render them inside the <code>return</code> function.
              The children elements are wrapped in the Context Providers created above.
            </p>
            <code>
              <pre>
                {codeSamples[4]}
              </pre>
            </code>
            <p>
              Variables are defined before the <code>return</code> function. These 
              values will then be passed into the Provider elements. Notice 
              how the stateful <code>darkTheme</code> variable 
              and <code>toggleTheme</code> function are passed into the Context Providers.
              This allows the Context Provider values to be accessed by 
              their children (in this case, the <code>ThemedBlock</code> child, 
              which was passed in from the <code>ThemeContext.js</code> wrapper).
            </p>
            <code>
              <pre>
                {codeSamples[5]}
              </pre>
            </code>
            <p>
              Finally, the custom React hooks are imported 
              into our <code>ThemedBlock.js</code> file, allowing us to
              access the <code>darkTheme</code> boolean 
              and <code>setDarkTheme</code> function, which are stored in 
              the <code>ThemeContext</code> and <code>ThemeUpdateContext</code> context 
              objects. These context objects are imported from <code>ThemeChanger/contexts/ThemeContext.js</code>
            </p>
            <code>
              <pre>
                {codeSamples[6]}
              </pre>
            </code>
          </div>
        </div>
      </div>
    </>
  );
}