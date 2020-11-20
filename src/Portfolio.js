import React from "react";
import Api from "./Api.js";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: props.match.params.uid,
      portfolio: null,
    };
  }

  componentDidMount = () => {
    this.getPortfolio();
  };

  getPortfolio = async () => {
    let url = Api.BackendAddr + `/${this.state.uid}`;
    await fetch(url)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((portfolio) => {
            this.setState({
              portfolio: portfolio,
            });
          });
        } else {
          alert(resp.json());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.portfolio == null) {
      //still loading
      return (
        <>
          <CircularProgress />
        </>
      );
    }

    if (this.state.portfolio.Items == null) {
      //nothing to render
      return <>You have no portfolio item</>;
    }

    let portfolio = this.state.portfolio.Items.map((item) => {
      return (
        <Container id="container">
          <PortfolioItem item={item} />
        </Container>
      );
    });

    return <>{portfolio}</>;
  }
}
