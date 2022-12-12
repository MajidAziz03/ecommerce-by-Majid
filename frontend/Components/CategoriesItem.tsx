import { Button } from "@mui/material"
import Link from "next/link"
import styled from "styled-components"
import { mobile } from "./Responsive"


type CatProps = {
    item: { id: number; img: string; title: string; }
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
width: 100%;
height: 70vh;
${mobile({ height: "58vh" })}

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
            <Link href={`/products/${item.cat}`}>
                <Image src={item.img} alt='' />
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                    <Button variant="contained" size="small" sx={{ backgroundColor: "white", color: "gray", fontWeight: "600", "&:hover": { border: "1px solid gray", backgroundColor: "white", } }}> Shop Now! </Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoriesItem;