import React from 'react';
import styled from 'styled-components';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function HomePage() {
    return (
        <HomePageContainer>
            <Search />
            <Body />
            <Footer />
        </HomePageContainer>
    )
}

export default HomePage
