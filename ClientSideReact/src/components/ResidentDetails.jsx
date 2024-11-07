import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const ResidentList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ResidentItem = styled.div`
  margin: 10px;
  text-align: center;
`;

const ResidentDetails = () => {
  const { id } = useParams();
  const fetchLocation = useFetch(`https://rickandmortyapi.com/api/location/${id}`);
  const location = fetchLocation.data;
  const loading = fetchLocation.loading;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Residents of {location.name}</h1>
      <ResidentList>
        {location.residents.map((residentUrl, index) => (
          <ResidentPage key={index} url={residentUrl} />
        ))}
      </ResidentList>
    </div>
  );
};

const ResidentPage = (props) => {
  const url = props.url;
  const fetchResult = useFetch(url)
  const resident = fetchResult.data;
  const loading = fetchResult.loading;
  
  if (loading) {
    return <div>Loading Resident...</div>;
  }

  
  return (
    <ResidentItem>
      <img src={resident.image} alt={resident.name} width="100" />
      <p>
      <Link to={`/character/${resident.id}`}>{resident.name}</Link>
      </p>
    </ResidentItem>
  );
};

export default ResidentDetails;