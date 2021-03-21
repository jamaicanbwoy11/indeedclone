import React, { useContext, useEffect } from 'react';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderIconsContainer,
    HeaderIcon,
    HeaderTags,
    HeaderTag,
    HeaderLeftContainer,
    HeaderRightContainer,
    HeaderLanguageContainer,
    Language,
    HeaderEmployerPortal,
} from './HeaderElements';
import logo from '../../images/indeed-logo.svg';
import { VscThreeBars, VscBell } from 'react-icons/vsc';
import { IoPersonOutline } from 'react-icons/io5';
import { BiMessageDetail } from 'react-icons/bi';
import { WindowResizeProvider } from '../../contexts/WindowResizeContext';

function Header() {
    const {
        windowWidth,
        handleResize
    } = useContext(WindowResizeProvider);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <HeaderContainer>
            <HeaderLeftContainer>
                <a href="/"><HeaderLogo src={logo} alt='Indeed' /></a>
                <HeaderTags>
                    <HeaderTag href="/">Find jobs</HeaderTag>
                    <HeaderTag href="https://ca.indeed.com/companies?from=gnav-homepage" target="_blank">Company reviews</HeaderTag>
                    <HeaderTag href="https://ca.indeed.com/career/salaries" target="_blank">Find salaries</HeaderTag>
                </HeaderTags>
            </HeaderLeftContainer>
            <HeaderRightContainer>
                <HeaderIconsContainer>
                    <HeaderIcon>
                        <BiMessageDetail />
                    </HeaderIcon>
                    <HeaderIcon>
                        <VscBell />
                    </HeaderIcon>
                    <HeaderIcon>
                        { windowWidth >= 968 ?  <IoPersonOutline /> : <VscThreeBars /> }
                    </HeaderIcon>
                </HeaderIconsContainer>
                <HeaderLanguageContainer>
                    <Language language='en'>En</Language>
                    <Language language='fr'>Fr</Language>
                </HeaderLanguageContainer>
                <HeaderEmployerPortal 
                    href="https://www.indeed.com/hire/employer-confirmation?co=CA&hl=en" 
                    target="_blank"
                >
                    Employers / Post Job
                </HeaderEmployerPortal>
            </HeaderRightContainer>
        </HeaderContainer>
    )
}

export default Header
