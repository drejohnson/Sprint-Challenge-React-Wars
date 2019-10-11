import React from 'react';
import styled from 'styled-components/macro';

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  color: #2c3e50;
  font-family: 'Helvetica', arial, sans-serif;
  font-size: 18px;
  border: 1px solid #ecf0f1;
  background: #ecf0f1;
  height: 60px;
  padding: 1rem;
  margin-bottom: 2rem;
  display: inline-block !important;
  visibility: visible !important;
  border-radius: 30px;
`;

const Search = ({ onChange, query }) => (
  <Input
    type='text'
    onChange={onChange}
    value={query}
    placeholder='Search for Starwars characters...'
    autoFocus
  />
);

export default Search;
