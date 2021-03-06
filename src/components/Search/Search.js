import React, { useState, useEffect, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { 
    SearchContainer,
    AlertContainer,
    Alert,
    SearchBarsContainer,
    SearchBar,
    Button,
    SearchTitle,
    SearchTitleAbove,
    SearchInput,
    EmployerSection,
    EmployerPostLink,
    IconCover
} from './SearchElements';
import { WindowResizeProvider } from '../../contexts/WindowResizeContext';
import { RecentSearchData } from '../../contexts/RecentSearchDataContext';

function Search() {
    const [errorAlert, setErrorAlert] = useState(false);
    const [whatInputFocus, setWhatInputFocus] = useState(false);
    const [locationInputFocus, setLocationInputFocus] = useState(false);
    const [search, setSearch] = useState({what: '', where: ''});
    const {windowWidth, handleResize} = useContext(WindowResizeProvider);
    const {recentSearchData, setRecentSearchData} = useContext(RecentSearchData);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    const focusWhat = () => {
        setWhatInputFocus(true);
    }

    const unfocusWhat = () => {
        setWhatInputFocus(false);
    }

    const focusLocation = () => {
        setLocationInputFocus(true);
    }

    const unfocusLocation = () => {
        setLocationInputFocus(false);
    }
    
    const handleWhatInput = e => {
        setSearch({...search, what: e.target.value})
    }

    const handleLocationInput = e => {
        setSearch({...search, where: e.target.value})
    }
    
    const handleClick = e => {
        // Stop user from searching if any of the search bars are empty
        if (search.what === '' && search.where === '') {
            e.preventDefault();
            setErrorAlert(true);
        } else {
            setRecentSearchData([search, ...recentSearchData])  
            setErrorAlert(false);
        }
    }

    return (
        <SearchContainer>
            {errorAlert && 
                <AlertContainer>
                    <ErrorOutlineIcon /> 
                    <Alert>Enter a job title or location to start a search</Alert>
                </AlertContainer>}
            <SearchBarsContainer>
                <SearchTitleAbove>What</SearchTitleAbove>
                <SearchBar 
                    style={whatInputFocus ? {borderColor: '#2164f4'} : null} 
                    windowWidth={windowWidth-85}
                >
                    <SearchTitle>What</SearchTitle>
                    <SearchInput 
                        placeholder='Job title, keywords, or company' 
                        onFocus={focusWhat}
                        onBlur={unfocusWhat}
                        onChange={handleWhatInput}
                    />
                    {whatInputFocus ? <IconCover /> : <SearchIcon style={{ fontSize: 'large', color: 'gray'}} />}
                </SearchBar>
                <SearchTitleAbove>Where</SearchTitleAbove>
                <SearchBar 
                    style={locationInputFocus ? {borderColor: '#2164f4'} : null} 
                    windowWidth={windowWidth-85}
                >
                    <SearchTitle>Where</SearchTitle>
                    <SearchInput 
                        placeholder='City, province, or "remote"'
                        onFocus={focusLocation}
                        onBlur={unfocusLocation}
                        onChange={handleLocationInput}
                    />
                    {locationInputFocus ? <IconCover /> : <LocationOnIcon style={{ fontSize: 'large', color: 'gray'}} />}
                </SearchBar>
                <Button
                    href={`https://ca.indeed.com/${search.what}-jobs-in-${search.where}`} 
                    target='_blank'
                    windowWidth={windowWidth-100}
                    onClick={handleClick}
                >Find jobs</Button>
            </SearchBarsContainer>
            <EmployerSection>
                <EmployerPostLink  href="https://ca.indeed.com/hire" target="_blank">
                    Employers: Post a job{' '}
                </EmployerPostLink>
                 - Your next hire is here
            </EmployerSection>
        </SearchContainer>
    )
}

export default Search
