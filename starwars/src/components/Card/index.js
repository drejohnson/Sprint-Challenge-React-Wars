import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #111;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
`;

export default function Card({ data }) {
  console.log(data);
  return (
    <Wrapper>
      {data &&
        data.results.map((person, i) => (
          <Fragment key={i}>
            <Info>
              <h2>Name: {person.name}</h2>
              <p>
                Gender: {person.gender !== 'n/a' ? person.gender : 'Android'}
              </p>
              <p>Birth Year: {person.birth_year}</p>
            </Info>
          </Fragment>
        ))}
    </Wrapper>
  );
}
