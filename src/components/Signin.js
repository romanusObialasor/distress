import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "./GlobalState";
import swal from "sweetalert2";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSchema = yup.object().shape({
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    document.getElementById("modal").style.display = "flex";

    const { email, password } = value;
    const url = "https://distress-backend.herokuapp.com/api/sign";

    await axios.post(url, { email, password }).then((res) => {
      // console.log(res.data.data);
      dispatch(createUser(res.data.data));
    });
    swal.fire({
      title: "thanks",
      text: "thank you for visiting us here we we care",
      icon: "success",
      button: "success",
    });
    navigate("/onboarding1");
  });

  return (
    <Container>
      <Overlay>
        <Form onSubmit={onSubmit}>
          <Head>Welcome back</Head>
          <Title>Login account</Title>
          <Inputs>
            <Input placeholder="Email" {...register("email")} />
            <Input
              placeholder="Password"
              {...register("password")}
              type="password"
            />
          </Inputs>
          <Agree>
            <Span>Forget password? </Span>
          </Agree>
          <Button type="submit">Log in</Button>
          <Alt>
            Don't have an account?
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <span>Sign up</span>
            </NavLink>
          </Alt>
        </Form>
      </Overlay>
      <Modal id="modal">
        <Box>
          <Image src="/image/progress.gif" />
          <span>Sigin you in</span>
        </Box>
      </Modal>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  background-image: url("/image/back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Form = styled.form`
  width: 100%;
  height: 65%;
  background: white;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const Title = styled.div`
  font-size: 17px;
  opacity: 70%;
  font-weight: 500;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 78%;
  height: 40px;
  background: #d9d9d9;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  padding-left: 20px;
`;

const Agree = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  margin-top: 10px;
  justify-content: flex-end;
  color: #0a58ed;
`;

const Span = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled.button`
  background: #0a58ed;
  color: white;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
`;

const Alt = styled.div`
  margin-top: 10px;
  font-weight: 500;
  span {
    color: #0a58ed;
    margin-left: 5px;
  }
`;

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  top: 0;
`;

const Image = styled.img`
  width: 20%;
`;

const Box = styled.div`
  width: 80%;
  height: 150px;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 500;
    margin-top: 10px;
  }
`;

// const Container = styled.div``
