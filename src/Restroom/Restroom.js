import React from 'react';
import styled from 'styled-components';

//import "./Restroom.css";

const StyledDiv = styled.div`
    width: 60%;
    margin: 15px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 15px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const restroom = (props) => {
    return (
        <StyledDiv>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <p>{props.children}</p>
        </StyledDiv>
    );
};

export default restroom;
