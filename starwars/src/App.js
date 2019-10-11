import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';

import Header from './components/Header';
import Card from './components/Card';

import GlobalStyle from './style/Global';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        crossorigin: true,
      })
      .then(response => setData(response.data));
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Card data={data} />
    </Wrapper>
  );
};

export default App;
