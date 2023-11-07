import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  display: flex;
  height: 350px;
  min-width: 300px;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  margin: 5px;
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  `;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
