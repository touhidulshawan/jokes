import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Jokes from "./components/Jokes";
import "./App.css";

export interface JokesProp {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const App: React.FC = () => {
  const [jokes, setJokes] = useState<JokesProp>({
    id: 166,
    type: "general",
    setup: "What did one wall say to the other wall?",
    punchline: "I'll meet you at the corner!",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleNewJokes();
  }, []);

  const handleNewJokes = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    setJokes(response.data);
    setLoading(false);
  };

  const renderLoader = <div className="loader"></div>;

  const renderJokes = (
    <div>
      <Jokes jokes={jokes} />
      <button onClick={handleNewJokes} className="btn">
        Next Joke
      </button>
    </div>
  );

  return (
    <main className="wrapper">
      <h1 className="title">Jokes</h1>
      {loading ? renderLoader : renderJokes}
    </main>
  );
};

export default App;
