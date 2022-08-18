import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";


export const MovieInfoContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px grey solid;
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
`;

export const ButtonLink = styled(Link)`
  padding: 5px 10px;
  background-color: lightgray;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 10px;
    &:hover {
      color: blue;
      background-color: red;
    }

`;

export const IconArrowBack = styled(HiArrowNarrowLeft)`

  
`;