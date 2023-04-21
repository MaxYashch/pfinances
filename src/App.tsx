import React from 'react';
import { Footer, Header, PageContent, PageSideMenu } from './components';
import './reset.css';
import { StyledContainer, StyledSpase } from './App.styles';


function App() {
  return (
    <StyledContainer>
      <Header />
      <StyledSpase>
        <PageSideMenu></PageSideMenu>
        <PageContent></PageContent>
      </StyledSpase>
      <Footer />
    </StyledContainer>
  );
}

export default App;
