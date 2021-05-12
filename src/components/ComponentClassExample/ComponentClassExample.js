import React, { Component } from "react";
import makeRequest from "../../api/makeRequest";

class ComponentClassExample extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      loading: true,
      data: [],
      query: "popular",
    };
  }

  async handleInputChange(event) {
    const target = event.target;
    let value = target.value;

    if (value) {
      this.setState({ loading: true });
      const getNewData = await this.getAPIData(value);

      this.setState({
        loading: false,
        data: getNewData || [],
        query: value,
      });
    }
  }

  getAPIData = async (movieType) => {
    const getData = await makeRequest(`movie/${movieType}`);
    // return getData && getData.results;
    return;
  };

  async componentDidMount() {
    const data = await this.getAPIData(this.state.query);
    this.setState({
      loading: false,
      data: data,
    });
  }

  render() {
    return <div></div>;
  }
}

export default ComponentClassExample;
