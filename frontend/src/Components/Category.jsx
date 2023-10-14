import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {categories} from "../Data"
const Container = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
`

const Category = () => {
  return (
    <Container>
        {categories.map((items)=>(
            <CategoryItem items={items} key={items.id} />
        ))}
    </Container>
  )
}

export default Category
