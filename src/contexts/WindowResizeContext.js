import React, { createContext, useState } from 'react'

export const WindowResizeProvider = createContext();

function WindowResizeContext({ children }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    const contexts = {
        windowWidth,
        setWindowWidth,
        handleResize
    }

    return (
        <WindowResizeProvider.Provider value={contexts}>
            { children }
        </WindowResizeProvider.Provider>
    )
}

export default WindowResizeContext
