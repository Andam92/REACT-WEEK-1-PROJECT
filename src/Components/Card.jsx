import { Component } from "react";
import { Col } from "react-bootstrap";
import MyModal from "./Modal";
import ImgPlaceholder from "./Placeholder";

class MyCard extends Component {
  fetchModal = () => {
    fetch(`http://www.omdbapi.com/?apikey=ba9d3963&t=${this.props.title}`)
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
    this.fetchModal();
    console.log(this.props.title);
  }

  state = {
    selected: false,
  };

  render() {
    return (
      <Col
        xs={12}
        md={6}
        lg={4}
        xl={2}
        onClick={() => {
          console.log(this.state.selected);
          this.setState({ selected: !this.state.selected });
        }}
      >
        <ImgPlaceholder cardImg={this.props.cardImg} />
        {this.state.selected && (
          <MyModal title={this.props.title} actors={this.props.actors} />
        )}
      </Col>
    );
  }
}

export default MyCard;
