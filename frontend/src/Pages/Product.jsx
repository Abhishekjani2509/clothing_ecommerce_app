import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { addProduct } from "../redux/cartRedux";
import { Add, Remove } from "@mui/icons-material";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 70vh;
  width: 50%;
  // background-color: purple;
`;
const Image = styled.img`
  width: 80%;
  height: 80vh;
  object-fit: cover;
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
  justify-content: space-between;
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
  const location = useLocation();
  // console.log(location)
  const val = location.pathname.split("/")[2];
  // console.log(val);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("null");
  const [size, setSize] = useState("null");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5001/api/product/find/${val}`
        );
        // console.log(data.data);
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [val]);
  const handleQuantity = (q) => {
    if (q === "dec") {
      if (quantity < 2) {
        setQuantity(1);
      } else {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...products, color, size, quantity }));
  };
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={products.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{products.title}</Title>
          <Desc>{products.desc}</Desc>
          <Price>$ {products.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {products.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Filtersize onChange={(e) => setSize(e.target.value)}>
                {products.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </Filtersize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("increease")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
