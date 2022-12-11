import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`


const Announcement = () => {
  return (
    <Container>Super deal now 10% off over $50 order </Container>
  )
}

export default Announcement