import axios from "axios";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import {
  BsChevronDown,
  BsFillTelephoneFill,
  BsChevronRight,
  BsChevronUp,
} from "react-icons/bs";
import { SiTarget } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const drop = () => {
    document.getElementById("drop").style.height = "190px";
    document.getElementById("drop").style.padding = "10px";
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.display = "block";
    document.getElementById("container").style.height = "unset";
  };
  const dropNgo = () => {
    document.getElementById("ngo").style.height = "250px";
    document.getElementById("ngo").style.padding = "10px";
    document.getElementById("ngoDown").style.display = "none";
    document.getElementById("ngoUp").style.display = "block";
    document.getElementById("container").style.height = "unset";
  };
  const up = () => {
    document.getElementById("drop").style.height = "0";
    document.getElementById("drop").style.padding = "0";
    document.getElementById("up").style.display = "none";
    document.getElementById("down").style.display = "block";
    document.getElementById("container").style.height = "100vh";
  };
  const upNgo = () => {
    document.getElementById("ngo").style.height = "0";
    document.getElementById("ngo").style.padding = "0";
    document.getElementById("ngoUp").style.display = "none";
    document.getElementById("ngoDown").style.display = "block";
    document.getElementById("container").style.height = "100vh";
  };

  const [data, setData] = useState([]);
  const [phone, setPhone] = useState([]);
  const getUser = JSON.parse(localStorage.getItem("data"))._id;
  const getEmail = JSON.parse(localStorage.getItem("data")).email;

  const getData = async () => {
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

    const contactsUrl = `https://distress-backend.herokuapp.com/api/user/${getUser}/contact`;

    await axios
      .get(url)
      .then((res) => {
        const value = res.data.data;
        value.forEach((e) => {
          setData(e);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

    await axios
      .get(contactsUrl)
      .then((res) => {
        setPhone(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
    console.log("this is transcript", transcript);
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  const commands = [
    {
      command: `${data.command}`,
      callback: async () => {
        document.getElementById("overlay").style.display = "flex";
        setInterval(() => {
          document.getElementById("overlay").style.display = "none";
        }, 4000);

        const url = `https://distress-backend.herokuapp.com/api/sendMail`;

        const email = getEmail;

        await axios
          .post(url, {
            email: email,
          })
          .then(() => {
            console.log("message sent successufully");
          })
          .catch((err) => console.log(err.message));
      },
    },
  ];

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  return (
    <Container id="container">
      <Wrapper>
        <Top>
          <ImageHolder>
            <Overlay />
            <Image src="/image/6.jpg" />
          </ImageHolder>
          <Name>{data.userName}</Name>
        </Top>
        <Mid>
          Your trigger word is <br />
          <span>{data.command}</span>
        </Mid>
        <Rest>
          <Bar>
            <Icon>
              <BsFillTelephoneFill />
            </Icon>
            <Txt>Your Contacts</Txt>
            <Go>
              <BsChevronDown
                id="down"
                onClick={() => {
                  drop();
                }}
              />
              <BsChevronUp
                id="up"
                onClick={() => {
                  up();
                }}
                style={{
                  display: "none",
                }}
              />
            </Go>
          </Bar>
          <Contacts id="drop">
            {phone.map((res) => (
              <ContactBar key={res._id}>
                <CName>{res.name}</CName>
                <CEmail> {res.email}</CEmail>
              </ContactBar>
            ))}
          </Contacts>
          <Bar>
            <Icon
              style={{
                color: "#5730FA",
                background: "rgba(87, 48, 250,0.2)",
              }}
            >
              <SiTarget />
            </Icon>
            <Txt>Trigger when</Txt>
            <NavLink to="/trigger">
              <Go>
                <BsChevronRight />
              </Go>
            </NavLink>
          </Bar>
          <Bar>
            <Icon
              style={{
                color: "rgb(0, 234, 54)",
                background: "rgba(0, 234, 54, 0.2)",
              }}
            >
              <AiFillSafetyCertificate />
            </Icon>
            <Txt>Precautions</Txt>
            <NavLink to="/precautions">
              <Go>
                <BsChevronRight />
              </Go>
            </NavLink>
          </Bar>
          <Bar>
            <Icon
              style={{
                color: "#20B9FC",
                background: "rgba(32, 185, 252,0.2)",
              }}
            >
              <FaHandshake />
            </Icon>
            <Txt>Contact NGO's</Txt>
            <Go>
              <BsChevronDown id="ngoDown" onClick={dropNgo} />
              <BsChevronUp
                id="ngoUp"
                onClick={upNgo}
                style={{
                  display: "none",
                }}
              />
            </Go>
          </Bar>
          <Contacts id="ngo">
            <ContactBar>
              <CName>
                Health Initiatives for Safety and Stability in Africa
              </CName>
              <CEmail>Abuja · 0813 706 7345</CEmail>
            </ContactBar>
            <ContactBar>
              <CName>POPSIF</CName>
              <CEmail>Abuja · 0805 959 1108</CEmail>
            </ContactBar>
            <ContactBar>
              <CName>Patients Safety and Global Support Initiative</CName>
              <CEmail>
                Area 8, No 3, Lokoja Street, Off Ogbomosho St · 08189301799
              </CEmail>
            </ContactBar>
          </Contacts>
        </Rest>
      </Wrapper>
      <Modal id="overlay">
        <Box>
          <ModalIcon src="/image/sent1.gif" />
          <Span>Message sent successfully</Span>
        </Box>
      </Modal>
    </Container>
  );
};

export default MainPage;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
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
`;

const ModalIcon = styled.img`
  width: 20%;
`;

const Span = styled.div`
  font-weight: 500;
`;

const CEmail = styled.div`
  margin-top: 3px;
  opacity: 0.7;
`;

const CName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const ContactBar = styled.div`
  /* margin-bottom: 10px; */
  background: #5b9aff;
  padding: 5px;
  border-radius: 5px;
  color: white;
`;

const Contacts = styled.div`
  margin-top: -20px;
  /* background: white; */
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 350ms;
  overflow: hidden;
  height: 0;
`;

const Go = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: black;
`;

const Txt = styled.div`
  flex: 1;
  margin-left: 20px;
  font-weight: 500;
  font-size: 15px;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(252, 107, 33, 0.2);
  border-radius: 10px;
  font-size: 13px;
  color: #fc6b21;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Rest = styled.div`
  width: 100%;
  height: 57%;
  margin-top: 40px;
`;

const Mid = styled.div`
  margin-top: 20px;
  span {
    font-weight: 500;
    color: #0a58ed;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  position: relative;
`;

const Overlay = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: absolute;
  background: #0a58ed;
  opacity: 0.2;
`;

const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  width: 50px;
  span {
    font-weight: 400;
    opacity: 0.5;
  }
`;

const Top = styled.div``;

const Wrapper = styled.div`
  width: 85%;
  height: 90%;
  /* min-height: 100%; */
  margin: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  display: flex;
  background: #d9e4f7;
`;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import styled from "styled-components";

// const MainPage = () => {
// const [data, setData] = useState([]);
// const [phone, setPhone] = useState([]);
// const getUser = JSON.parse(localStorage.getItem("data"))._id;
// const getEmail = JSON.parse(localStorage.getItem("data")).email;

// const getData = async () => {
//   const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

//   const contactsUrl = `https://distress-backend.herokuapp.com/api/user/${getUser}/contact`;

//   await axios
//     .get(url)
//     .then((res) => {
//       const value = res.data.data;
//       value.forEach((e) => {
//         setData(e);
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });

//   await axios
//     .get(contactsUrl)
//     .then((res) => {
//       setPhone(res.data.data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// useEffect(() => {
//   getData();
//   console.log("this is transcript", transcript);
//   SpeechRecognition.startListening({ continuous: true });
// }, []);

// const commands = [
//   {
//     command: `${data.command}`,
//     callback: async () => {
//       document.getElementById("overlay").style.display = "flex";
//       setInterval(() => {
//         document.getElementById("overlay").style.display = "none";
//       }, 4000);

//       const url = `https://distress-backend.herokuapp.com/api/sendMail`;

//       const email = getEmail;

//       await axios
//         .post(url, {
//           email: email,
//         })
//         .then(() => {
//           console.log("message sent successufully");
//         })
//         .catch((err) => console.log(err.message));
//     },
//   },
// ];

// const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
//   { commands }
// );

// if (!browserSupportsSpeechRecognition) {
//   return <span>Browser does not support speech recognition</span>;
// }

//   return (
//     <Container id="text">
//       <Top>
//         Say <span>{data.command}</span> <br />
//         to Trigger the action
//       </Top>
//       <One>
//         <H1>Your Contacts</H1>
//         <Contacts>
// {phone.map((res) => (
//   <C1 key={res._id}>
//     <Name>{res.name}</Name>:<Contact> {res.email}</Contact>
//   </C1>
// ))}
//         </Contacts>
//       </One>
//       <Hold>
//         <Two>
//           <H1>Trigger action if {transcript}</H1>
//           <Ul>
//             <Li>When about to be raped</Li>
//             <Li>A child is being Abused</Li>
//             <Li>Someone is in an Abusive relationship</Li>

//             <Li>About to be trafficked</Li>
//           </Ul>
//         </Two>
//         <Picture src="/image/8.jpg" />
//       </Hold>
//       <Hold>
//         <Two>
//           <H1>What this action will do</H1>
//           <Ul>
//             <Li>a mail would be sent to your contacts</Li>
//             <Li>Would send sms to your 3 contacts</Li>
//             <Li>Random Text Generator is a web</Li>
//             <Li>It's better than Lorem ipsum because</Li>
//           </Ul>
//         </Two>
//         <Picture src="/image/7.jpg" />
//       </Hold>
// <Overlay id="overlay">
//   <Box>
//     <Icon src="/image/sent1.gif" />
//     <Span>Message sent successfully</Span>
//   </Box>
// </Overlay>
//     </Container>
//   );
// };

// export default MainPage;

// const Hold = styled.div`
//   width: 100%;
//   min-height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;
// const Picture = styled.img`
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   border-radius: 5px;
// `;
// const Container = styled.div`
//   padding: 10px;
// `;

// const Top = styled.div`
//   font-weight: 500;
//   font-size: 17px;
//   span {
//     color: #0a58ed;
//   }
// `;

// const One = styled.div`
//   margin-top: 40px;
// `;

// const H1 = styled.div`
//   font-weight: 500;
//   font-size: 17px;
// `;

// const Contacts = styled.div`
//   margin-top: 10px;
// `;

// const C1 = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 5px;
// `;

// const Name = styled.div`
//   font-weight: 500;
//   text-transform: capitalize;
//   margin-right: 3px;
// `;

// const Contact = styled.div`
//   margin-left: 10px;
//   font-size: 14px;
//   margin-top: 3px;
//   color: #0a58ed;
// `;

// const Two = styled.div`
//   margin-top: 40px;
//   width: 100%;
// `;

// const Ul = styled.ul`
//   padding-left: 20px;
// `;

// const Li = styled.li`
//   margin-top: 5px;
// `;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(2px);
//   position: fixed;
//   z-index: 100;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   display: none;
//   align-items: center;
//   justify-content: center;
// `;

// const Box = styled.div`
//   width: 80%;
//   height: 150px;
//   background: white;
//   border-radius: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Icon = styled.img`
//   width: 20%;
// `;

// const Span = styled.div`
//   font-weight: 500;
// `;

// // const Container = styled.div``
