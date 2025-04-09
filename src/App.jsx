import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
    "The best way to get a project done faster is to start sooner.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to get randome anecdote
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to vote for an anecdote
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  // Display top voted anecdote
  const mostVotes = Math.max(...votes);
  const mostVotedAnecdote = votes.indexOf(mostVotes);
  const mostVotedAnecdoteText = anecdotes[mostVotedAnecdote];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={getRandomAnecdote}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      {mostVotes > 0 ? (
        <>
          <p>{mostVotedAnecdoteText}</p>
          <p>Votes: {mostVotes}</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
}

export default App;
