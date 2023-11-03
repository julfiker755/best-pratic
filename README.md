<p>
 <h1 style="color:red;" align="center">Dark/Light Theme</h1>
</p>

> [dark+light](https://6544caa3b697ca10adc8693a--statuesque-chaja-8eccb0.netlify.app)

> [best-pratic](https://sweet-strudel-e3510e.netlify.app/)

## 1. Add Dark Mode Toggle in ReactJS + TailwindCSS+Vary Good Pratic

  ```js
import React, { useEffect, useState } from 'react';

const useThame = () => {
    const [mode,setmode]=useState('light')
    function Changetheme(){
     const html=document.documentElement
     if(mode === 'light'){
        html.classList.remove('light')
        html.classList.add('dark')
        setmode('dark')
        localStorage.setItem("mode", "dark")
     }else{
        html.classList.remove('dark')
        html.classList.add('light')
        setmode('light')
        localStorage.setItem("mode","light")
     }
    }
    useEffect(()=>{
        const currentmode=localStorage.getItem("mode") || 'light'
        document.documentElement.classList.add(currentmode)
        setmode(currentmode)
    },[])
    return {Changetheme,mode}
};

export default useThame;
  ```

## 2. Add Dark Mode Toggle in ReactJS + TailwindCSS + DaisyUI

  ```js
const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    // dark handleform
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
         <div>
            <input onChange={handleToggle} type="checkbox"
            className="toggle toggle-info  h-5 my-1"/>
         </div>
    );
};

export default Header;

//mast be use index.html page use
<html lang="en" data-theme="light">
  ```
## 3. Add Dark Mode Toggle in ReactJS + Custom css

  ```js
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./src/assets/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>School</title>
    <style>
      body {
        background-color: #1D2229;
        color: white;
        height: 100%;
      }
      /* Light Theme Styles */
      body.light {
        background-color: white;
        color: black;
      }
    </style>
    <script>
      // JavaScript logic to toggle the theme
      function toggleTheme() {
        const body = document.body;
        if (body.classList.contains('light')) {
          body.classList.remove('light');
        } else {
          body.classList.add('light');
        }
      }
  </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  ```








