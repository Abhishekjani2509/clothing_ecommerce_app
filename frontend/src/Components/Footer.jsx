import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const Socialcontainer = styled.div`
  display: flex;
`;
const Socialicon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h1``;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
  width: 50%;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Contactitems = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
          aliquid accusantium voluptatibus cum aperiam totam quis quia nesciunt
          atque similique consectetur doloribus quae saepe, sapiente, amet,
          rerum laudantium assumenda?
        </Desc>
        <Socialcontainer>
          <Socialicon>
            <Facebook />
          </Socialicon>
          <Socialicon>
            <Instagram />
          </Socialicon>
          <Socialicon>
            <Twitter />
          </Socialicon>
          <Socialicon>
            <Pinterest />
          </Socialicon>
        </Socialcontainer>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Woman Fashion</Listitem>
          <Listitem>My account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us!</Title>
        <Contactitems>
          <Room style={{marginRight:"10px"}} />
          Carter road no 3, Borivali East, Mumbai:400066.
        </Contactitems>
        <Contactitems>
          <Phone style={{marginRight:"10px"}} />
          +91 771xxxxx95
        </Contactitems>
        <Contactitems>
          <MailOutline style={{marginRight:"10px"}} /> abhishekjani2509@gmail.com
        </Contactitems>
      </Right>
    </Container>
  );
};

export default Footer;
