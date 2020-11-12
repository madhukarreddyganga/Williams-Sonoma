import React from "react";
import "./styles.css";
import westlemServices from "./westlemServices";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      images: "",
      id: ""
    };
  }
  componentDidMount() {
    westlemServices
      .get("/services/catalog/v4/category/shop/new/all-new/index.json")
      .then((response) => {
        console.log(response);
        console.log(response.data.groups[0].name);
        this.setState({
          names: response.data.groups.name,
          images: response.data.groups.images,
          id: response.data.groups.id
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
        {this.state.images.map((name) => {
          return <div>{name}</div>;
        })}
      </div>
    );
  }
}
export default App;
