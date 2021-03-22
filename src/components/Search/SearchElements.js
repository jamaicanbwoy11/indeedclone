import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 50px;
    color: #2d2d2d;
`

export const AlertContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #fff0ef;
`

export const Alert = styled.p`
    font-size: 12px;
    margin: 10px;
`

export const SearchBarsContainer = styled.div`
    display: flex;
    
    @media screen and (max-width: 990px) {
        flex-direction: column;
    }
`

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 345px;
    height: 18px;
    margin: 7px 4px 7px 4px;
    padding: 12px 16px;
    border: 1px solid gray;
    border-radius: 10px;

    @media screen and (max-width: 990px) {
        width: 587px;
    }

    @media screen and (max-width: 680px) {
        width: ${({ windowWidth }) => `${windowWidth}px`};
    }
`

export const Button = styled.a`
    margin: auto;
    margin-left: 12px;
    padding: 12px 24px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #2164f4;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: #0B4CD7;
    }

    &:active {
        border-color: #2164f4;
    }

    @media screen and (max-width: 990px) {
        width: 575px;
        margin: auto;
        margin-top: 15px;
    }

    @media screen and (max-width: 680px) {
        width: ${({ windowWidth }) => `${windowWidth}px`};
    }
`

export const SearchTitleAbove = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 0 5px;

    @media screen and (min-width: 990px) {
        display: none;
    }
`

export const SearchTitle = styled.label`
    font-weight: bold;

    @media screen and (max-width: 990px) {
        display: none;
    }
`

export const SearchInput = styled.input`
    width: 80%;
    margin-left: 13px;
    border: none;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`

export const EmployerSection = styled.div`
    display: flex;

    @media screen and (max-width: 990px) {
        display: none;
    }
`

export const EmployerPostLink = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: #2164f4;
    padding: 0 5px 0 0;

    &:hover {
        text-decoration: underline;
    }
`

export const IconCover = styled.div`
    width: 18px;
    height: 18px;
    margin: 0;
    padding: 0;
`