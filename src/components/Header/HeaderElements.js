import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 0 32px 0 32px;
    margin: 15px 9px 0 9px;
    border-bottom: 1px solid #faf9f8;
    color: #2d2d2d;

    @media screen and (max-width: 968px) {
        border-bottom: none;
        padding: 0 5px 10px 5px;
    }
`

export const HeaderLeftContainer = styled.div`
    display: flex;
`

export const HeaderLogo = styled.img`
    width: 100px;
    height: auto;
`

export const HeaderTags = styled.div`
    display: flex;
    margin-left: 10px;

    @media screen and (max-width: 968px) {
        display: none;
    }
`

export const HeaderTag = styled.a`
    font-size: 14px;
    margin: 5px 10px 0 10px;
    text-decoration: none;
    color: #2d2d2d;

    &:hover { 
        border-bottom: 2px solid #2164f4;
        cursor: pointer;
    }
`

export const HeaderRightContainer = styled.div`
    display: flex;
`

export const HeaderIconsContainer = styled.div`
    margin: 5px 10px 0 10px;
    display: flex;
`
export const HeaderIcon = styled.div`
    padding: 0 16px 0 16px;
    font-size: 1.3rem;

    &:hover {
        border-bottom: 2px solid #2164f4;
        cursor: pointer;
    }
`

export const HeaderLanguageContainer = styled.div`
    display: flex;
    padding: 0 30px;
    margin-bottom: 12px;
    border-left: 2px solid #faf9f8; 
    border-right: 2px solid #faf9f8; 

    @media screen and (max-width: 968px) {
        display: none;
    }
`

export const Language = styled.p`
    font-size: 14px;
    padding: 6px 7px;
    margin: auto;
    font-weight: ${({ language }) => language === 'en' ? 'bold' : 'normal'};
    background-color: ${({ language }) => language === 'en' ? '#ececec' : null};

    &:hover {
        cursor: pointer;
    }
`

export const HeaderEmployerPortal = styled.a`
    margin: 6px 0 0 30px;
    font-size: 14px;
    text-decoration: none;
    color: #2d2d2d;

    &:hover {
        border-bottom: 2px solid #2164f4;
        cursor: pointer;
    }

    @media screen and (max-width: 968px) {
        display: none;
    }
`