import React from "react";

class Child extends React.Component {
    render() {
        const { value } = this.props;
        return <h2>{value}</h2>;
    }
}
export default Child;