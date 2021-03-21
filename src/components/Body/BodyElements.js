import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2d2d2d;
    background-color: #faf9f8;

    @media screen and (max-width: 680px) {
        background-color: #fff;
    }
`

export const NoSearchText = styled.p`
    font-size: 16px;
    font-weight: bold;
    padding: 30px;
`

export const RecentSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

export const BodyTitleContainer = styled.div`
    width: 600px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 680px) {
        width: ${({ windowWidth }) => `${windowWidth}px`};
    }
`

export const BodyTitle = styled.h4`
    font-size: 18px;
`

export const EditButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: #595959;
    background-color: #fff;
    padding: 8px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: #f3f2f1;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 680px) {
        background-color: #faf9f8;
    }
`

export const EditButtonsContainer = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
`

export const ClearButton = styled.button`
    font-size: 16px;
    color: #595959;
    padding: 8px;
    border: none;
    background-color: Transparent;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

export const DoneButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: #595959;
    background-color: #fff;
    padding: 8px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: #f3f2f1;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 680px) {
        background-color: #faf9f8;
    }
`

export const RecentSearchCard = styled.a`
    width: 600px;
    height: 40px;
    padding: 10px 16px;
    margin-bottom: 2px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #2d2d2d;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media screen and (max-width: 680px) {
        width: ${({ windowWidth }) => `${windowWidth}px`};
        border-bottom: 2px solid #faf9f8;
    }
`

export const RecentSearch = styled.p`
    text-decoration: none;
    color: #2d2d2d;
`