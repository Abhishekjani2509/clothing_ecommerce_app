import styled from "styled-components";
import {Link} from "react-router-dom";
const Container = styled.div`
  flex: 1;
  height:70vh;
  margin:3px;
  background-color:pink;
  position:relative;
`;
const Image = styled.img``;
const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`;
const Title = styled.h1``;
const Button = styled.div`
  cursor:pointer;
`;
const CategoryItem = ({ items }) => {
  return (
    <Container>
      <Image />
      <Info>
      <Title>{items.title}</Title>
      <Link to={`/products/${items.cat}`}>      
      <Button>Shop Now</Button>
      </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
