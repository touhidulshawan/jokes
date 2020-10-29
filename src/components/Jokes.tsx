import * as React from "react";
import { JokesProp } from "../App";
import "./Jokes.css";

interface Props {
  jokes: JokesProp;
}
const Jokes: React.FC<Props> = (props) => {
  const { jokes } = props;
  return (
    <div className="container">
      <p className="textStyle">
        <span className="spanStyle">Joke:</span>
        {jokes.setup}
      </p>
      <p className="textStyle">
        <span className="spanStyle">Punch:</span>
        {jokes.punchline}
      </p>
    </div>
  );
};

export default Jokes;
