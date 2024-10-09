import React, { useContext } from "react";
import "../Chatbox/Chatbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
import skjLogo from "../../assets/skjLogo.jpeg";

const Chatbox = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <>
      <div className="chatbox-container">
        {!showResult ? (
          <>
            <div className="chatbox-title">
              <h1>Chat With Our AI</h1>
              <p>
                Looking for quick answers or assistance? Our AI is ready to chat
                and provide the information you need, anytime.
              </p>
            </div>
            <div className="chatbox-welcome">
              <p>
                Hello! I'm your AI assistant, here to answer your questions and
                provide assistance. How can I help you today?
              </p>
            </div>
            <div className="prompt-box">
              <div className="chatbox-prompts">
                <p>What courses do you recommend for learning React?</p>
                <p>How can I improve my coding skills?</p>
                <p>Tell me about the latest trends in web development.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="result-box">
            <div className="chatbox-title">
              <h1>Chat With Our AI</h1>
            </div>
            <div className="result-data">
              <div className="chatbox-question">
                <img src={skjLogo} className="input-img" />
                <p>{recentPrompt}</p>
              </div>
              <div chatbox-answer>
                {loading ? (
                  <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="input-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Ask Suggestions"
          />
          <FontAwesomeIcon
            onClick={() => onSent()}
            className="faPaperPlane"
            icon={faPaperPlane}
          />
        </div>
      </div>
    </>
  );
};

export default Chatbox;
