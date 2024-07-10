import { useState } from 'react';
import './App.css'

function App() {
  const questions = [
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML tag is used to display a picture?",
      options: ["<picture>", "<image>", "<img>", "<pic>"],
      answer: "<img>"
    },
    {
      question: "Which CSS property is used to set the spacing between lines of text?",
      options: ["line-height", "line-spacing", "letter-spacing", "spacing"],
      answer: "line-height"
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "// this is a comment //"],
      answer: "/* this is a comment */"
    },
    {
      question: "Which HTML attribute is used to define the inline style?",
      options: ["styles", "class", "style", "font"],
      answer: "style"
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      options: ["font-weight", "font-style", "font-family", "font-size"],
      answer: "font-family"
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<foot>"],
      answer: "<footer>"
    },
    {
      question: "How do you make each word in a text start with a capital letter in CSS?",
      options: ["text-transform: capitalize;", "text-transform: uppercase;", "text-transform: lowercase;", "text-transform: capitalize-each;"],
      answer: "text-transform: capitalize;"
    },
    {
      question: "Which input type defines a slider control in HTML5?",
      options: ["range", "slider", "control", "input"],
      answer: "range"
    },
    {
      question: "Which method is used to remove whitespace from both sides of a string in JavaScript?",
      options: ["trim()", "strip()", "cut()", "squeeze()"],
      answer: "trim()"
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);




  function handleNext(items) {
    if (items === questions[currentQuestion].answer) {
      setResult(result + 1)
      console.log(result)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
        setShowResult(true)      
    }
  }
  return (
    <div className='container'>

      {showResult ? <div>    <h1>Result</h1> <p>Your Score is {result} out of {questions.length}</p> </div> :
        <div>
          <h1>Quiz App</h1>
          <h2>{currentQuestion+1+') '} {questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((items, index) => <button onClick={() => handleNext(items)} key={index}>{items}</button>)}
        </div>
      }
    </div>
  )
}
export default App;