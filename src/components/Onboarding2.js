import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiReset } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Onboarding2 = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const navigate = useNavigate();

  const updateUser = async () => {
    const getUser = JSON.parse(localStorage.getItem("data"))._id;
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;
    await axios.patch(url, {
      command: transcript,
    });
    navigate("/onboarding3");
  };

  const { resetTranscript, transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  console.log("this is transcript", transcript);

  return (
    <Container>
      <Image src="/image/girl.png" />
      <Curve />
      <Rest>
        <TextHolder>
          <Head>
            Set your <span>trigger</span>
          </Head>
          <Text>
            On no twenty spring of in esteem spirit likely estate. Continue new
            you declared differed
          </Text>
        </TextHolder>
        <SpeechHolder>
          <Speech>
            {toggle ? (
              <div>
                {transcript === "" ? (
                  <span>Say something....</span>
                ) : (
                  <span>{transcript}</span>
                )}
              </div>
            ) : (
              <span>Click to set command</span>
            )}
          </Speech>
          <Line></Line>
          <Icons>
            {transcript === "" ? (
              <Mic
                onClick={() => {
                  onToggle();
                  if (toggle) {
                    SpeechRecognition.startListening();
                  }
                }}
              >
                <BsFillMicFill />
                <Beam />
              </Mic>
            ) : (
              <Others>
                <Reset onClick={resetTranscript}>
                  <BiReset />
                </Reset>
                <Done
                  onClick={() => {
                    updateUser();
                  }}
                >
                  <AiOutlineCheck />
                </Done>
              </Others>
            )}
          </Icons>
        </SpeechHolder>
      </Rest>
    </Container>
  );
};

export default Onboarding2;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Text = styled.div`
  margin-top: 10px;
  opacity: 0.7;
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-top: 30px;
  span {
    color: red;
  }
`;

const TextHolder = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  color: white;
`;

const Done = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  color: #0a58ed;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  color: #00db33;
`;

const Reset = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  color: #0a58ed;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #ed0000;
`;

const Others = styled.div`
  display: flex;
`;

const Beam = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid white;
  position: absolute;
  animation: blink infinite 500ms linear forwards;
  @keyframes blink {
    100% {
      opacity: 0.2;
      height: 60px;
      width: 60px;
    }
  }
`;

const Mic = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  color: #0a58ed;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Icons = styled.div`
  margin-top: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 20px;
  background: white;
`;

const Speech = styled.div``;

const SpeechHolder = styled.div`
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Rest = styled.div`
  height: 70%;
  width: 100%;
  background: #4589f6;
  /* margin-top: -5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px 20px 0 0;
  z-index: 100;
`;

const Curve = styled.div``;

const Image = styled.img`
  height: 30%;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  overflow-y: hidden;
`;

//=====================================

//=====================================

//=====================================

//=====================================

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import axios from "axios";

// const Onboarding2 = () => {
//   const [toggle, setToggle] = useState(true);

//   const navigate = useNavigate();

//   const updateUser = async () => {
//     const getUser = JSON.parse(localStorage.getItem("data"))._id;
//     const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;
//     await axios.patch(url, {
//       command: transcript,
//     });
//     navigate("/onboarding3");
//   };

//   const onToggle = () => {
//     setToggle(!toggle);
//   };

//   const { transcript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser does not support speech recognition</span>;
//   }

//   console.log("this is transcript", transcript);

//   return (
//     <Container>
//       <Wrapper>
//         <SpeechHolder>
//           <Back />
//           <Speech
//             id="speech"
//             onClick={() => {
//               onToggle();
//               if (toggle) {
//                 SpeechRecognition.startListening();
//               }
//             }}
//           >
//             {toggle ? (
//               <span>Click to record</span>
//             ) : (
//               <div>
//                 {transcript === "" ? (
//                   <span>Say something....</span>
//                 ) : (
//                   <span>{transcript}</span>
//                 )}
//               </div>
//             )}
//           </Speech>
//         </SpeechHolder>
//         <Textholder>
//           <Title>Easy Accessibility To Help</Title>
//           <Text>
//             Abuse is that social evil which has ruined many lives and is
//             gradually on the rise.Follow this 2 steps to finish creating an
//             account
//           </Text>
//         </Textholder>
//         {transcript === "" ? (
//           <Button op>Continue</Button>
//         ) : (
//           <Button onClick={updateUser}>Continue</Button>
//         )}
//         <Level>
//           <NotActive />
//           <Active />
//           <NotActive />
//         </Level>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Onboarding2;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 90%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;

// const SpeechHolder = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Back = styled.div`
//   width: 200px;
//   height: 200px;
//   position: absolute;
//   border: 1px solid #0a58ed;
//   border-radius: 100%;
//   animation: blink infinite 500ms linear forwards;
//   z-index: -1;
//   @keyframes blink {
//     100% {
//       opacity: 0.2;
//       height: 250px;
//       width: 250px;
//     }
//   }
// `;

// const Speech = styled.div`
//   width: 200px;
//   height: 200px;
//   background: #0a58ed;
//   border-radius: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 500;
// `;

// const Textholder = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.div`
//   font-weight: 500;
//   font-size: 23px;
// `;

// const Text = styled.div`
//   padding: 0 10px;
//   text-align: center;
//   opacity: 72%;
//   margin-top: 10px;
// `;

// const Button = styled.div`
//   width: 85%;
//   color: #0a58ed;
//   height: 45px;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 500;
//   text-decoration: none;
//   border: 1px solid #0a58ed;
//   opacity: ${({ op }) => (op ? "0.5" : "1")};
// `;

// const Level = styled.div`
//   display: flex;
// `;

// const Active = styled.div`
//   height: 2px;
//   width: 20px;
//   background: #0a58ed;
//   margin: 10px;
// `;

// const NotActive = styled.div`
//   height: 2px;
//   width: 20px;
//   background: rgba(0, 0, 0, 0.3);
//   margin: 10px;
// `;
