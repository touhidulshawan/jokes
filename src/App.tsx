import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Jokes from "./components/Jokes";

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

  const renderLoader = <div className={`loader ${spinner}`}></div>;

  const renderJokes = (
    <div>
      <Jokes jokes={jokes} />
      <button onClick={handleNewJokes} className={btn}>
        Next Joke
      </button>
    </div>
  );

  return (
    <main className={container}>
      <h1 className={headerStyle}>Jokes</h1>
      {loading ? renderLoader : renderJokes}
    </main>
  );
};

export default App;

const container = "w-full h-screen text-center bg-gray-200";

const headerStyle =
  "block w-screen text-center p-2 mb-8 text-2xl uppercase tracking-wide bg-gray-700 text-gray-200";

const spinner =
  "w-32 h-32 m-2 m-auto border-8 border-gray-400 rounded-full border-t-8 ";

const btn =
  "uppercase tracking-wide bg-blue-200 text-blue-700 border-b-8 border-blue-800 px-4 py-2 rounded shadow-md mt-4";
