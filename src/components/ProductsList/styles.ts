import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  padding-top: 80px;

  img {
    width: 470px;
    height: 217px;
  }
`
