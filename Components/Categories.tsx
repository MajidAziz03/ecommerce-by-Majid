import styled from "styled-components"
import CategoriesItem from "./CategoriesItem"
import { categories } from "./data"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px;
`


const Categories = () => {
  return (
    <Container>
      {
        categories.map((item) => (
          <CategoriesItem item = {item} key={item.id} />
        ))
      }
    </Container>
  )
}

export default Categories