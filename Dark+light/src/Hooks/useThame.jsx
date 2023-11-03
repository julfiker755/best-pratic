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