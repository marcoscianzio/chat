import React from 'react'
import styled from 'styled-components'

const NothingSelected = () => {
    return (
        <Container>
            <h1>
                Nothing selected...
            </h1>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('images/nothing.jpg');
    background-size: cover;

    h1 {
        color: white;
    }

`

export default NothingSelected
