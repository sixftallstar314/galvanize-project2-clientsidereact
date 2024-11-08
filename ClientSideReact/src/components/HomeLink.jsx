import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeLinkContainer = styled.div`
  text-align: center;
  margin: 20px 0; /* Optional: Adjust spacing */
`;

const HomeLink = () => {
  return (
    <HomeLinkContainer>
      <Link to="/">Home</Link>
    </HomeLinkContainer>
  );
};

export default HomeLink;