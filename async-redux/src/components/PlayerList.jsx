import React from 'react';
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/actions';

import styled from "styled-components";


const PlayerList = props => {
    console.log('PlayerList Props: ', props)
    return (
        <div>
            <button onClick={() => props.fetchPlayers()}>Get Players!</button>
            {props.playerData.map(player => {
                return (
                    <Container key={player.id}>
                        <h3>{player.first_name} {player.last_name}</h3>
                        <p>{player.team.full_name}</p>
                        <p>Position:{player.position}</p>
                    </Container>
                )
            })}
        </div>
    )
} 

export default connect(state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        playerData: state.playerData
    }
}, {fetchPlayers})(PlayerList);

const Container = styled.div`
border: 1px solid black;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 5%;

`