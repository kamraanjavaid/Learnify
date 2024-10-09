import React, { useState } from "react";
import "../Quiz/Quiz.css";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [selectedTopic, setSelectedTopic] = useState("dsa");
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const dsaQuestions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctAnswer: "O(log n)",
    },
    {
      question: "Which data structure is used in a breadth-first search?",
      options: ["Stack", "Queue", "Heap", "Linked List"],
      correctAnswer: "Queue",
    },
    {
      question: "What is the space complexity of a recursive algorithm?",
      options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
      correctAnswer: "O(n)",
    },
    {
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
      correctAnswer: "O(n^2)",
    },
    {
      question:
        "Which data structure is best for implementing a priority queue?",
      options: ["Array", "Stack", "Queue", "Heap"],
      correctAnswer: "Heap",
    },
  ];

  const reactQuestions = [
    {
      question: "What is JSX?",
      options: [
        "A CSS Framework",
        "A JavaScript library",
        "A syntax extension for JavaScript",
        "A database",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question: "What is the use of `useState` in React?",
      options: [
        "To store component state",
        "To render elements",
        "To fetch data",
        "To manage lifecycle methods",
      ],
      correctAnswer: "To store component state",
    },
    {
      question: "Which React hook is used for side effects?",
      options: ["useState", "useEffect", "useMemo", "useRef"],
      correctAnswer: "useEffect",
    },
    {
      question: "What is a higher-order component (HOC) in React?",
      options: [
        "A component that renders other components",
        "A pattern where a function takes a component and returns a new component",
        "A lifecycle method",
        "A state management tool",
      ],
      correctAnswer:
        "A pattern where a function takes a component and returns a new component",
    },
    {
      question: "What does the `useRef` hook do?",
      options: [
        "Manage refs",
        "Create context",
        "Handle props",
        "Manage state",
      ],
      correctAnswer: "Manage refs",
    },
  ];

  const jsQuestions = [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A way to handle exceptions",
        "A function combined with its lexical environment",
        "A method to define classes",
        "A syntax for declaring variables",
      ],
      correctAnswer: "A function combined with its lexical environment",
    },
    {
      question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: "false",
    },
    {
      question: "Which of the following methods returns a Promise?",
      options: ["fetch()", "setTimeout()", "console.log()", "Math.random()"],
      correctAnswer: "fetch()",
    },
    {
      question: "What is the purpose of the `async` keyword in JavaScript?",
      options: [
        "To declare a synchronous function",
        "To declare a function that returns a Promise",
        "To handle exceptions",
        "To execute code in strict mode",
      ],
      correctAnswer: "To declare a function that returns a Promise",
    },
    {
      question: "What is the difference between `let` and `var` in JavaScript?",
      options: [
        "`let` is block-scoped and `var` is function-scoped",
        "`let` is used in strict mode while `var` is not",
        "`let` can be redeclared while `var` cannot",
        "`var` is block-scoped and `let` is function-scoped",
      ],
      correctAnswer: "`let` is block-scoped and `var` is function-scoped",
    },
  ];

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const questions = getQuestionsForTopic(selectedTopic);

    if (
      userAnswers.length !== questions.length ||
      userAnswers.includes(undefined)
    ) {
      alert("Please answer all the questions.");
      return;
    }

    let score = 0;

    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        score += 1;
      }
    });

    setScore(score);
  };

  const getQuestionsForTopic = (topic) => {
    switch (topic) {
      case "dsa":
        return dsaQuestions;
      case "react":
        return reactQuestions;
      case "js":
        return jsQuestions;
      default:
        return [];
    }
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    setUserAnswers(Array(getQuestionsForTopic(topic).length).fill(undefined));
    setScore(null);
  };

  const questions = getQuestionsForTopic(selectedTopic);

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Test Your Knowledge</h1>
      <div className="question-type">
        <li>
          <Link
            to="/quiz"
            onClick={() => handleTopicChange("dsa")}
            className={selectedTopic === "dsa" ? "active" : ""}
          >
            DSA
          </Link>
        </li>
        <li>
          <Link
            to="/quiz"
            onClick={() => handleTopicChange("react")}
            className={selectedTopic === "react" ? "active" : ""}
          >
            React
          </Link>
        </li>
        <li>
          <Link
            to="/quiz"
            onClick={() => handleTopicChange("js")}
            className={selectedTopic === "js" ? "active" : ""}
          >
            JavaScript
          </Link>
        </li>
      </div>

      <form className="quiz-form">
        {questions.map((q, index) => (
          <div key={index}>
            <h3>
              {index + 1}. {q.question}
            </h3>
            {q.options.map((option, i) => (
              <div key={i}>
                <label className="options">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="button" onClick={handleSubmit} className="submitBtn">
          Submit
        </button>
      </form>
      {score !== null && (
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      )}
    </div>
  );
};

export default Quiz;
