import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import '../styles/CharacterDetailStyle.css'
import HomeLink from './HomeLink';


const DetailContainer = styled.div`
  text-align: center;
`;

// Styled div component that center aligns content on the page 

const CharacterDetail = () => {
  const params = useParams();
  const id = params.id
  const fetchResult = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = fetchResult.data
  const loading = fetchResult.loading

// useParams is a custom hook used to fetch data id from the url 
// loading : a Boolean indicating wheter data is still being loaded 

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

//Determines the character's origin using the URL from the character.origin object. If an origin exists, it extracts the originId by splitting the URL string and getting the last segment.
//Constructs originElement:If originId is valid, it shows a link to the origin's detail page.If not, it displays "Origin: Unknown".

return (
  <div className = "page">
    <HomeLink />
      <DetailContainer>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Type: {character.type}</p>
       {originElement}
      </DetailContainer>
  </div>
);
};

export default CharacterDetail;