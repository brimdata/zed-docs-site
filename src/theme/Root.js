import React, { useEffect } from 'react';

// Default implementation, that you can customize
export default function Root({children}) {
    
    useEffect(() => {
        const script = document.createElement("script")
        script.src="https://buttons.github.io/buttons.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    }, [])

  return <>
    {children}
  </>;
}
