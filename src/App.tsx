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

  useEffect(() => {
    const getJokes = async () => {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJokes(response.data);
    };
    getJokes();
  }, []);

  return (
    <main>
      <h1>Jokes</h1>
      <Jokes jokes={jokes} />
    </main>
  );
};

export default App;
