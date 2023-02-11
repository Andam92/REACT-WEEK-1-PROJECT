import { Component } from "react";
import Row2 from "./Row2";

class Main extends Component {
  state = {
    categories: [
      ["Trending", "star+wars"],
      ["Watch Again", "pirates+of+the+caribbean"],
      ["New Releases", "kung+fu"],
    ],
  };

  render() {
    return this.state.categories.map((e, index) => (
      <Row2 film={e[1]} categories={e[0]} key={`sectionKey = ${index}`} />
    ));
  }
}

export default Main;
