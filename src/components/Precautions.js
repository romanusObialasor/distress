import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Precautions = () => {
  const [name, setName] = useState("");

  const getData = () => {
    const getEmail = JSON.parse(localStorage.getItem("data")).userName;
    setName(getEmail);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Top>
          <TopUP>
            <NavLink to="/mainpage">
              <IconLeft>
                <BsChevronLeft />
              </IconLeft>
            </NavLink>
            <Text>
              <Main>Welcome,</Main>
              <Sub>{name}</Sub>
            </Text>
            <Avatar>
              <FaUserAlt fontSize="33px" color="#9999" />
            </Avatar>
          </TopUP>
          <TopBottom>
            <Input placeholder="Search for a topic" type="text" />
            {/* <Input placeholder="input password" type="password" /> */}
            <Button>
              <button>
                <RiSearchLine fontSize="15px" color="white" />
              </button>
            </Button>
          </TopBottom>
        </Top>
        <Centre>
          <Article>Today's Article</Article>
          <Image>
            <Picture>
              <Write>
                <Up>Make your voice heard</Up>
                <Down>
                  Never be silient whenever human beings
                  <br /> endure suffering and humiliation
                </Down>
              </Write>
            </Picture>
          </Image>
        </Centre>
        <Bottom>
          <Article>More Articles</Article>
          <Content to={`/precautionblog`}>
            <Img src="/image/violence.jpeg" />
            <Info>
              <Article>Avoiding violence by all means</Article>
              <Topic>
                <One>September 4,</One>
                <Two>
                  2022
                  <span></span>
                </Two>
                <Three>3 min read</Three>
              </Topic>
            </Info>
          </Content>
          <Content to={`/precautionblog`}>
            <Img src="/image/8.jpg" />
            <Info>
              <Article>Avoidign walking at night</Article>
              <Topic>
                <One>Octorber 4,</One>
                <Two>
                  2022
                  <span></span>
                </Two>
                <Three>3 min read</Three>
              </Topic>
            </Info>
          </Content>
        </Bottom>
      </Wrapper>
      <Web>
        Not A Desktop Application,
        <br />
        Try Switching To A Mobile Device,
        <br />
        To Access This Application
      </Web>
    </Container>
  );
};

export default Precautions;

const IconLeft = styled.div`
  color: black;
`;

const Input = styled.input`
  :focus {
    outline: 1px solid silver;
  }
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */
  flex: 1;
  background-color: transparent;
  border: 1.5px solid #1111;
  outline: none;
  font-size: 15px;
  border-radius: 4px;
  padding-left: 10px;
`;

const Web = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: red;
  }
`;
const One = styled.div`
  display: flex;
  /* align-items: center; */
  font-size: 12px;
  font-weight: 400;
`;
const Two = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  justify-content: space-between;
  span {
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: grey;
    margin: 0 10px;
    margin-top: 6px;
  }
`;
const Three = styled.div`
  display: flex;
  /* align-items: center; */
  font-size: 12px;
  font-weight: 400;
`;
const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: grey;
  margin-top: 3px;
`;
const Img = styled.img`
  width: 70px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  margin-left: 7px;
`;
const Content = styled(NavLink)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: unset;
  text-decoration: unset;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Down = styled.div`
  font-size: 13px;
  font-weight: 400;
`;
const Up = styled.div`
  margin-bottom: 7px;
  font-size: 14px;
  font-weight: 500;
`;
const Write = styled.div`
  margin-bottom: 15px;
  color: white;
  padding-left: 10px;
`;
const Picture = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 6px;
  backdrop-filter: blur(2px);
`;
const Article = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Image = styled.div`
  background-image: url("/image/safety.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 10px;
  width: 100%;
  height: 190px;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    height: 270px;
  }
`;
const Centre = styled.div`
  @media screen and (min-width: 768px) {
    height: 320px;
  }
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  margin-top: 20px;
`;

const Button = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: #0a58ed;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Search = styled.input`
  flex: 1;
  height: 50px;
  width: 60%;
  background-color: transparent;
  border: 1.5px solid #1111;
  outline: none;
  font-size: 15px;
  color: #1111;
  border-radius: 4px;
`;
const TopBottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
const Sub = styled.div`
  font-weight: 500;
`;
const Main = styled.div``;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid #1111;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 16px;
  text-align: center;
`;
const TopUP = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 85%;
  min-height: 90%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
