import React, { Component } from "react";
import GridLayout from "react-grid-layout";
import "./MainPage/gridCSS/styles.css";
import "./MainPage/resizeCSS/styles.css";

import ThreeScene from "./MainPage/ThreeScene";
import EditForm from "./MainPage/EditForm";

export class Main extends Component {
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 6, h: 8, minW: 2 },
      { i: "b", x: 0, y: 0, w: 3, h: 8, minW: 2 }
      //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      //   { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={40}
        width={1200}
      >
        <div key="a">
          <ThreeScene />
        </div>
        <div key="b">
          <EditForm />
        </div>
        {/* <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div> */}
      </GridLayout>
    );
  }
}

export default Main;
