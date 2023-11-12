import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 300;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Toptexts = styled.div``;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Productdetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 300px;
  height: 200px;
  background-color: teal;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Productname = styled.span``;
const Productid = styled.span``;
const Productcolor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Productsize = styled.span``;
const Pricedetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountcontainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Productamount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const Productprice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid grey;
  padding: 20px;
  height: 50vh;
`;
const Summarytitle = styled.h1`
  font-weight: 200;
`;
const Summaryitem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Summaryitemtext = styled.span``;
const Summaryitemprice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 600;
  background-color: black;
`;
const Cart = () => {
  const cart = useSelector(state => state.cart);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Cart Section</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <Toptexts>
            <Toptext>Shopping Bag</Toptext>
            <Toptext>Your Wishlist</Toptext>
          </Toptexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <Productdetail>
                  <Image />
                  <Details>
                    <Productname>
                      <b>Product Name: </b>{product.title}{" "}
                    </Productname>
                    <Productid>
                      <b>ID: </b>{product._id}
                    </Productid>
                    <Productcolor color={product.color} />
                    <Productsize>
                      <b>Size: </b>{product.size}
                    </Productsize>
                  </Details>
                </Productdetail>
                <Pricedetail>
                  <ProductAmountcontainer>
                    <Add />
                    <Productamount>{product.quantity}</Productamount>
                    <Remove />
                  </ProductAmountcontainer>
                  <Productprice>${product.quantity * product.price}</Productprice>
                </Pricedetail>
              </Product>
                ))}
            <hr />
          </Info>
          <Summary>
            <Summarytitle>Order Summary</Summarytitle>
            <Summaryitem>
              <Summaryitemtext>Subtotal: </Summaryitemtext>
              <Summaryitemprice>$ {cart.total}</Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
              <Summaryitemtext>Shipping Charges: </Summaryitemtext>
              <Summaryitemprice>$ 5.60</Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
              <Summaryitemtext>Discount: </Summaryitemtext>
              <Summaryitemprice>$ -5.60</Summaryitemprice>
            </Summaryitem>
            <Summaryitem type="total">
              <Summaryitemtext>Order Total: </Summaryitemtext>
              <Summaryitemprice>$ {cart.total}</Summaryitemprice>
            </Summaryitem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
