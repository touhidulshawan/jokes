import * as React from "react";
import { JokesProp } from "../App";

interface Props {
  jokes: JokesProp;
}
const Jokes: React.FC<Props> = (props) => {
  const { jokes } = props;
  return (
    <div>
      <p> -{jokes.setup}</p>
      <p> - {jokes.punchline}</p>
    </div>
  );
};

export default Jokes;
