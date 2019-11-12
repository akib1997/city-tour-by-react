import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../tour/tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(jakir => jakir.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(sakib => {
          return (
            <Tour key={sakib.id} sakib={sakib} tourRemove={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
