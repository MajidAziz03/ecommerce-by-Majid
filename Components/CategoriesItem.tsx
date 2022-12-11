import { Button } from "@mui/material"
import styled from "styled-components"



type CatProps = {
    item: {}[]
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
width: 100%;
height: 70vh;
`

const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
color: white;
`



const CategoriesItem = ({ item }: CatProps) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button variant="contained" size="small" sx={{ backgroundColor: "white", color: "gray", fontWeight: "600", "&:hover": { border: "1px solid gray", backgroundColor: "white", } }}> Shop Now! </Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem;