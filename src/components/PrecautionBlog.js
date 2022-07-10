import React from "react";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const PrecautionBlog = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <NavLink to="/precautions">
            <Icon />
          </NavLink>
          <Text>Precautions</Text>
          <Avatar>
            <FaUserAlt fontSize="33px" color="#9999" />
          </Avatar>
        </Top>
        <ImgHolder>
          <Img src="/image/violence.jpeg" alt="" />
        </ImgHolder>
        <TexHoder>
          <Date>
            September 4, 2022 <span />3 min read
          </Date>
          <Contet>Avoiding violence by all means</Contet>
          <SmallText>
            In show dull give need so held. One order all scale sense her gay
            style wrote. Incommode our not one ourselves residence. Shall there
            whose those stand she end. So unaffected partiality indulgenc
          </SmallText>
          <SmallText>
            Folly words widow one downs few age every seven. If miss part by
            fact he park just shew. Discovered had get considered projection who
            favourable. Necessary up knowledge it tolerably. Unwilling departure
            education is be dashwoods or an. Use off agreeable law unwilling sir
            deficient curiosity instantly.
          </SmallText>
        </TexHoder>
      </Wrapper>
    </Container>
  );
};

export default PrecautionBlog;
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid #1111;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TexHoder = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const SmallText = styled.div`
  color: gray;
  margin-top: 30px;
  line-height: 1.3;
`;

const Contet = styled.div`
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const Date = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: grey;
  span {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: grey;
    margin: 0 7px;
    margin-top: 1px;
  }
`;
const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
`;

const Text = styled.div`
  font-weight: 500;
`;
const Icon = styled(BsChevronLeft)`
  font-size: 20px;
  color: black;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const ImgHolder = styled.div`
  height: 170px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
