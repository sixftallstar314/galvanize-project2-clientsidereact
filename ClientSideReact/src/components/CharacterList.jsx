import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import '../styles/CharacterListStyle.css'


const ListItem = styled.div`
  text-align: center;
`;

const CharacterList = () => {
  const fetchResult = useFetch('https://rickandmortyapi.com/api/character');
  const data = fetchResult.data
  const loading= fetchResult.loading

  if (loading) {
    return (
      <div>Loading.....</div>
    );
  }


  return (
    <div className="page">
      <h1>Rick and Morty Characters</h1>
      {data.results.map((character) => (
        <ListItem key={character.id}>
          <Link to={`/character/${character.id}`}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </Link>
        </ListItem>
      ))}
    </div>
  );
};

export default CharacterList;