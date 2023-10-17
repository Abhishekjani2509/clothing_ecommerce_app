import React from "react";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 70vh;
  width: 50%;
  background-color: purple;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content:space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  `;
  const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
  `;
  const Filtersize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer></ImgContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, blanditiis sed quod sunt dolor eius adipisci tempore
            ut culpa recusandae, maiores vitae non nemo totam debitis. Provident
            ipsam, aliquid eum corrupti vitae cumque necessitatibus! Ea sunt
            placeat odit illo unde magnam, temporibus ipsum voluptate eaque
            commodi dicta, deserunt provident a!
          </Desc>
          <Price>$ 10</Price>
          <FilterContainer>
            <FilterTitle>Color</FilterTitle>
            <Filter>
              <FilterColor color="blue" />
              <FilterColor color="black" />
              <FilterColor color="grey" />
            </Filter>
            <FilterTitle>Size</FilterTitle>
            <Filtersize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </Filtersize>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
