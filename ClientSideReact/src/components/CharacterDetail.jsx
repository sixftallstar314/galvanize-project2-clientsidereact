import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import '../styles/CharacterDetailStyle.css'

const DetailContainer = styled.div`
  text-align: center;
`;


const CharacterDetail = () => {
  const params = useParams();
  const id = params.id
  const fetchResult = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = fetchResult.data
  const loading = fetchResult.loading

  if (loading) {
    return (
      <div>Loading.....</div>
    );
  }

  if (!character) {
    return (
      <div> Character not found.</div>
    );
  }



let originId = null
  if (character.origin && character.origin.url) {
    const urlSegments = character.origin.url.split('/');
    originId = urlSegments[urlSegments.length - 1]
  }else{
    originId = null
  }

let originElement;
  if (originId) {
    originElement = (
    <p>
      Origin: <Link to={`/location/${originId}`}>{character.origin.name}</Link>
    </p>
  );
} else {
  originElement = (
    <p>Origin: Unknown</p>
  );
}
return (
  <div className = "page">
  <DetailContainer>
    <h1>{character.name}</h1>
    <img src={character.image} alt={character.name} />
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    {originElement}
  </DetailContainer>
  </div>
);
};

export default CharacterDetail;