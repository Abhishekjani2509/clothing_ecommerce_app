import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
`;
const Agreement = styled.span`
  font-size:12px;
  margin:20px 0px;
`;
const Button = styled.button`
  width:40%;
  cursor:pointer;
  border:none;
  padding: 15px 20px;
  background-color:teal;
  color:white;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register here</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vitae
            esse autem at. Dolor eius nemo ipsam quis dolores! Numquam?
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
