import React from "react";
import { render } from "react-dom";

class ExplorePage extends React.Component {
    submit = data => {
        console.log(data);
};

render() {
    return (
       <div>
            <h1>Explore page</h1>

        </div>
        );
    }
}

export default ExplorePage;