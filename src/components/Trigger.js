import React from "react";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

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
        </Top>
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

// const Container = styled.div``;

// const Container = styled.div``;
