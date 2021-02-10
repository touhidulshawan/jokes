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
      <h4 className="textStyle">{jokes.setup}</h4>
      <p>{jokes.punchline}</p>
    </div>
  );
};

export default Jokes;
