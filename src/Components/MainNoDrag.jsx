import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import ThreeScene from "./MainPage/ThreeScene";
import EditForm from "./MainPage/EditForm";

const style = {
  root: {
    padding: 5,
    height: 700
  },
  grid: {
    padding: 20
  }
};

export class MainNoDrag extends Component {
  render() {
    return (
      <div style={style.root}>
        <Grid container spacing={8}>
          <Grid style={style.grid} item xs={8}>
            <ThreeScene />
          </Grid>
          <Grid style={style.grid} item xs={4}>
            <EditForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainNoDrag;
