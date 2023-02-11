import { Component } from "react";
import { Row } from "react-bootstrap";
import MyCard from "./Card";

class Row2 extends Component {
  state = {
    cards: [],
  };

  fetchRows = () => {
    fetch(`http://www.omdbapi.com/?apikey=ba9d3963&s=${this.props.film}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((element) => {
        return this.setState({ ...this, cards: element.Search });
      });
  };

  componentDidMount() {
    this.fetchRows();
  }

  render() {
    return (
      <div className="mb-5">
        <div>
          <h2 className="text-light mx-4 my-3">{this.props.categories}</h2>
        </div>
        <div>
          <Row className="d-flex text-center">
            {this.state.cards
              /* .sort((a, b) => a.Year - b.Year) */
              .map((e, index) => {
                /* return (
                index < 5 && (
                  <MyCard key={`cardsKey = ${index}`} cardImg={e.Poster} />
                )
              ); */
                /* if (e.type !== "movie") {
                index--;
              } else  */ if (index < 6 && e.Type === "movie") {
                  return (
                    <MyCard
                      key={`cardsKey = ${index}`}
                      cardImg={e.Poster}
                      title={e.Title}
                      actors={"Cast: " + e.Writer}
                    />
                  );
                }
              })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Row2;
