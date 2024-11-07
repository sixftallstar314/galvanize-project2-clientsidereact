import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const DetailContainer = styled.button`
  text-align: center;
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
    <DetailContainer>
      <h1>{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <LocationResidentsLink 
      locationId={id}
      numberOfResidents={location.residents.length}/>
    </DetailContainer>
  );
};

export default LocationDetail;