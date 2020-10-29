import * as React from "react";
import { JokesProp } from "../App";

interface Props {
  jokes: JokesProp;
}
const Jokes: React.FC<Props> = (props) => {
  const { jokes } = props;
  return (
    <div className={wrapper}>
      <p className={textStyle}>
        <span className={spanStyle}>Joke:</span>
        {jokes.setup}
      </p>
      <p className={textStyle}>
        <span className={spanStyle}>Punch:</span>
        {jokes.punchline}
      </p>
    </div>
  );
};

export default Jokes;
const wrapper =
  "my-2 w-full md:w-2/4 m-auto p-4 border-b-4 border-indigo rounded";
const textStyle = "text-xl text-gray-700 mb-4";
const spanStyle = "bg-gray-400 text-gray-7000 mr-2 rounded px-2 py--1";
