import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import HomeLink from './HomeLink';
// import '../styles/ResidentDetailStyle.css'

const Header = styled.h6`
margin: 20px 0;
width: 100%; /* Make sure it spans full container width */
  text-align: center;
  margin-top: 0px ;
  margin-bottom: 10px;
  -webkit-text-fill-color: rgb(13, 232, 217) ;
  -webkit-text-stroke: 2px;
  color: black;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size:3em;
`

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
      <HomeLink />
      <Header>Residents of {location.name}</Header>
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
    return <h5>Loading Resident...</h5>;
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