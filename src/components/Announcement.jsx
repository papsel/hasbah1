import styled from 'styled-components'
const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    text-align:center;
    
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Delivery on Orders Over $50
    </Container>
  )
}

export default Announcement