import React, { createContext, useState, useEffect } from 'react'

export const RecentSearchData = createContext();

function RecentSearchDataContext({ children }) {
    const [recentSearchData, setRecentSearchData] = useState([]);

    const recentSearchContext = {
        recentSearchData,
        setRecentSearchData
    }

    useEffect(() => {
        if (localStorage.getItem('recentSearch')) {
            setRecentSearchData(JSON.parse(localStorage.getItem('recentSearch')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recentSearch', JSON.stringify(recentSearchData));
    }, [recentSearchData])
    
    return (
        <RecentSearchData.Provider value={recentSearchContext}>
            {children}
        </RecentSearchData.Provider>
    )
}

export default RecentSearchDataContext
