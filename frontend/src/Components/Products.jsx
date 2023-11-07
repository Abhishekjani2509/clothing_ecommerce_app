import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { productitems } from "../Data";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filter, sort }) => {
  // console.log(cat, filter, sort)
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilteredproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/api/product/allproducts/?category=${cat}`
            : "http://localhost:5001/api/product/allproducts"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredproducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredproducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredproducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredproducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filterproducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
