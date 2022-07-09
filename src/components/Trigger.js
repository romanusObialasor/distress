import React from "react";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Trigger = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <NavLink to="/mainpage">
            <Icon>
              <BsChevronLeft />
            </Icon>
          </NavLink>
          <Title>Trigger when</Title>
          <Avatar>
            <FaUserAlt fontSize="33px" color="#9999" />
          </Avatar>
        </Top>
        <Second>
          <SecondTxt>
            "In show dull give need so held. One order all scale sense her gay
            style wrote. whose those stand she end."
          </SecondTxt>
          <SecondImage src="/image/8.jpg" />
        </Second>
        <Rest>
          <Ol>
            <Li>
              Both rest of know draw fond post as. It agreement defective to
              excellent. Feebly do engage of narrow. Extensive repulsive
              belonging depending
            </Li>
            <Li>
              On no twenty spring of in esteem spirit likely estate. Continue
              new you declared differed learning bringing honoured. At mean mind
              so upon they
            </Li>
            <Li>
              Folly words widow one downs few age every seven. If miss part by
              fact he park just shew. Discovered had get considered projection
              who favourable education
            </Li>
            <Li>
              deficient curiosity instantly. Easy mind life fact with see has
              bore ten. Parish any chatty can elinor direct for former. Up as
              meant widow equal an share least.
            </Li>
          </Ol>
        </Rest>
      </Wrapper>
    </Container>
  );
};

export default Trigger;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 90%;
  margin: auto;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  color: black;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Rest = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 10px;
`;

const Ol = styled.ol`
  margin-left: -20px;
`;

const Li = styled.li`
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid #1111;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Second = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SecondTxt = styled.div`
  padding: 0 10px;
  font-family: "PT Serif", serif;
  font-size: 20px;
`;

const SecondImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  margin-top: 15px;
`;

// const Container = styled.div``;
