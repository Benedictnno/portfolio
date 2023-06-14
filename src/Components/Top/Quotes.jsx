import React from "react";

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

  // Generate a random index within the range of the array length

  // Access the element at the random index
  function random() {
      const randomIndex = Math.floor(Math.random() * Data.length);
      const randomQuotes = Data[randomIndex];
    return randomQuotes;
  }
  setInterval(console.log(random()), 1000);

  // console.log(randomNumber);

  return (
    <div>
      {random().quotes}
      {/* {randomQuotes.quotes} -{randomQuotes.by} */}
    </div>
  );
};

export default Quotes;
