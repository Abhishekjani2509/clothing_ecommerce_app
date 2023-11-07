import React, { useState } from "react";
import { useLocation } from "react-router";
import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
const Container = styled.div``;
const Title = styled.h1`
  margin:20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filter = styled.div`
  display: flex;
  margin: 20px;
`;
const FilterText = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // console.log(cat);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleclick = (e) => {
    const val = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: val,
    });
  };
  // console.log(filter);
  // console.log(sort);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Items:</FilterText>
          <Select name="color" onChange={handleclick}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleclick}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
