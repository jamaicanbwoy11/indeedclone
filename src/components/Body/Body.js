import React, { useState, useContext, useEffect, useReducer } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClearIcon from '@material-ui/icons/Clear';
import {
    BodyContainer,
    NoSearchText,
    BodyTitleContainer,
    BodyTitle,
    EditButton,
    EditButtonsContainer,
    ClearButton,
    DoneButton,
    RecentSearchContainer,
    RecentSearchCard,
    RecentSearch
} from './BodyElements';
import { WindowResizeProvider } from '../../contexts/WindowResizeContext';
import { RecentSearchData } from '../../contexts/RecentSearchDataContext';
import { IconButton } from '@material-ui/core';

function Body() {
    const [edit, setEdit] = useState(false)
    const {windowWidth, handleResize} = useContext(WindowResizeProvider);
    const {recentSearchData, setRecentSearchData} = useContext(RecentSearchData);
    // This incrementing function is used to force a rerender update.
    const [, forceUpdate] = useReducer(x => x + 1, 0); 

    const handleDeleteCard = (e, index) => {
        e.preventDefault();
        recentSearchData.splice(index, 1);
        setRecentSearchData(recentSearchData);
        localStorage.setItem('recentSearch', JSON.stringify(recentSearchData))
        forceUpdate();
    }

    const clearAll = () => {
        setRecentSearchData([]);
        localStorage.setItem('recentSearch', JSON.stringify(recentSearchData));
    }

    const clickEdit = e => {
        e.preventDefault();
        setEdit(!edit)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <BodyContainer>
            {recentSearchData.length > 0 ?
                <RecentSearchContainer>
                    <BodyTitleContainer windowWidth={windowWidth-90}>
                        <BodyTitle>Recent searches</BodyTitle>
                        {edit ? (
                            <EditButtonsContainer>
                                <ClearButton onClick={clearAll}>Clear</ClearButton> 
                                <DoneButton onClick={e => clickEdit(e)}>Done</DoneButton>
                            </EditButtonsContainer>
                        ) 
                        : <EditButton onClick={e => clickEdit(e)}>Edit</EditButton>}
                    </BodyTitleContainer>
                    {recentSearchData.map((search, index) => (
                        <RecentSearchCard 
                            key={index}
                            windowWidth={windowWidth-90} 
                            href={`https://ca.indeed.com/${search.what}-jobs-in-${search.where}`} 
                            target='_blank' 
                        >
                            <RecentSearch>{search.what} {search.what && search.where ? '-' : null} {search.where}</RecentSearch>
                            {edit ? (
                                <IconButton 
                                    style={{color: '#2d2d2d', zIndex: '999'}}
                                    onClick={handleDeleteCard}
                                >    
                                    <ClearIcon />
                                </IconButton>
                            )
                            : <ArrowForwardIosIcon style={{color: 'gray', fontSize: 'large'}} />}
                        </RecentSearchCard>
                    ))}
                </RecentSearchContainer>
            : <NoSearchText>You have no recent searches.</NoSearchText>}
        </BodyContainer>
    )
}

export default Body
