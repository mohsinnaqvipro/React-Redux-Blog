import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // console.warn("componentDidMount");
    console.log("Name: ", this.props.name);
  }
  componentDidUpdate() {
    // console.warn("componentDidUpdate");
    // alert("name is updated");
    console.log("After Update: ", this.props.name);
  }
  // componentWillUnmount() {
  //   console.warn("componentWillUnmount");
  // }
  render() {
    // console.warn("Render");
    return (
      <div>
        <h1>"This is Contact class component</h1>
      </div>
    );
  }
}

export default Contact;
