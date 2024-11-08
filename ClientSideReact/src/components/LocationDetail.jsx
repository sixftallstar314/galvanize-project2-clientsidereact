import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import HomeLink from './HomeLink';
// import '../styles/LocationDetailStyle.css'

const Wrapper = styled.div`
  display: flex;
  height: 100vh; 
  justify-content: center; 
  align-items: center; 
`;

const DetailContainer = styled.button`
  display:grid;
  align-items: center;
  text-align: center;
  background-color: pink;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`;

const LocationResidentsLink= ({locationId, numberOfResidents}) =>{
  return(
    <p>
      Residents: <Link to ={"/location/" + locationId + "/residents"}>{numberOfResidents}</Link>
    </p>
  );
};

const LocationDetail = () => {
  const params = useParams();
  const  id  = params.id
  const fetchResult= useFetch(`https://rickandmortyapi.com/api/location/${id}`);
  const location = fetchResult.data
  const loading = fetchResult.loading


  if (loading) {
    return (
      <div>Loading.....</div>
    );
  }
  

  return (
    <Wrapper>
      <HomeLink/>
      <DetailContainer>
        <h1>{location.name}</h1>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
          <LocationResidentsLink 
            locationId={id}
            numberOfResidents={location.residents.length}/>
    </DetailContainer>
    </Wrapper>
  );
};

export default LocationDetail;