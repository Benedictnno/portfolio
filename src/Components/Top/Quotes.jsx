import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function aniQuotes() {
  const [text] = useTypewriter({
    words: [
      "Make it work, make it right, make it fast.",
      " You might not think that programmers are artists, but programming is an extremely creative profession.",
      "It's all talk until the code runs.",
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      "I'm not a great programmer; I'm a decent programmer with great habits.",
      "It's not that I'm so smart, it's just that I stay with problems longer.",
      "The most important single aspect of software development is to be clear about what you are trying to build.",
      "The only way to learn a new programming language is by writing programs in it.",
      "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
      "Code is like humor. When you have to explain it, it's bad.",
      "Premature optimization is the root of all evil.",
    ],
    loop: true,
    typeSpeed:60,
  });

  return (
    <div>
      <blockquote className="quote">
        <p>{text}</p> 
      </blockquote>
    </div>
  );
}
const Quotes = () => {
  const Data = [
    { quotes: "Make it work, make it right, make it fast.", by: "Kent Beck" },
    {
      quotes:
        "You might not think that programmers are artists, but programming is an extremely creative profession.",
      by: " Richard Stallman",
    },
    { quotes: "It's all talk until the code runs.", by: "Ward Cunningham" },
    {
      quotes:
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      by: "Patrick McKenzie",
    },
    {
      quotes:
        "I'm not a great programmer; I'm a decent programmer with great habits.",
      by: "Kent Beck",
    },
    {
      quotes:
        "It's not that I'm so smart, it's just that I stay with problems longer.",
      by: " Albert Einstein",
    },
    {
      quotes:
        "The most important single aspect of software development is to be clear about what you are trying to build.",
      by: "Bjarne Stroustrup",
    },
    {
      quotes:
        "The only way to learn a new programming language is by writing programs in it.",
      by: "Dennis Ritchie",
    },
    {
      quotes:
        "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
      by: "Mario Fusco",
    },
    {
      quotes: "Code is like humor. When you have to explain it, it's bad.",
      by: "Cory House",
    },
    {
      quotes: "Premature optimization is the root of all evil.",
      by: "Donald Knuth",
    },
  ];

  const [num, setNumber] = useState(1);
  const [quote, setQuote] = useState(Data[3]);

  function changeQuote(type) {
    if (type === "inc") {
      if (num >= Data.length - 1) {
        setNumber(0);
      } else {
        setNumber(num + 1);
      }
    } else if (type === "dec") {
      if (num <= 0) {
        setNumber(Data.length - 1);
      } else {
        setNumber(num - 1);
      }
    }
    setQuote(Data[num]);
  }

  return (
    <div>
      <blockquote className="quote">
        <p>{quote.quotes}</p> - <span>{quote.by}</span>
      </blockquote>
      <button onClick={() => changeQuote("dec")} className="next">
        prev
      </button>
      <button onClick={() => changeQuote("inc")} className="next">
        Next
      </button>
    </div>
  );
};

export default Quotes;
