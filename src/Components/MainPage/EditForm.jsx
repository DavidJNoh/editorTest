import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Avatar from "@material-ui/core/Avatar";
import { Star, FourK, Edit } from "@material-ui/icons";
import FaceIcon from "@material-ui/icons/Face";

const style = {
  root: {
    width: "100%"
  },
  panel: {
    margin: 0,
    marginBottom: 6
  },
  heading: {},
  secondaryHeading: {
    fontSize: 15
  },
  button: {
    margin: 3
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid`,
    padding: `2px 3px`
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

function handleDelete() {
  alert("You clicked the delete icon."); // eslint-disable-line no-alert
}

function handleClick() {
  alert("You clicked the Chip."); // eslint-disable-line no-alert
}

export class EditForm extends Component {
  render() {
    return (
      <div style={style.root}>
        <ExpansionPanel style={style.panel} defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={style.heading}>Options</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Button
              style={style.button}
              variant="outlined"
              size="small"
              color="primary"
            >
              Import
            </Button>
            <Button
              style={style.button}
              variant="outlined"
              size="small"
              color="primary"
            >
              Export
            </Button>
            <Button
              style={style.button}
              variant="outlined"
              size="small"
              color="primary"
            >
              Save
            </Button>
            <Button
              style={style.button}
              variant="outlined"
              size="small"
              color="primary"
            >
              Layer Details
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={style.panel} defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={style.heading}>Symbols</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Chip label="Conveyor" style={style.chip} variant="outlined" />
            <Chip
              avatar={<Avatar>C</Avatar>}
              label="Conveyor 2"
              onClick={handleClick}
              onDelete={handleDelete}
              style={style.chip}
              variant="outlined"
            />
            <Chip
              avatar={<Avatar>L</Avatar>}
              label="Light"
              onClick={handleClick}
              onDelete={handleDelete}
              style={style.chip}
              variant="outlined"
            />
            <Chip
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label="Person"
              onClick={handleClick}
              onDelete={handleDelete}
              style={style.chip}
              variant="outlined"
            />
            {/* <Chip
              icon={<FaceIcon />}
              label="Clickable Deletable Chip"
              onClick={handleClick}
              onDelete={handleDelete}
              style={style.chip}
              variant="outlined"
            />
            <Chip
              label="Custom delete icon Chip"
              onClick={handleClick}
              onDelete={handleDelete}
              style={style.chip}
              deleteIcon={<DoneIcon />}
              variant="outlined"
            />
            <Chip
              label="Clickable Link Chip"
              style={style.chip}
              component="a"
              href="#chip"
              clickable
              variant="outlined"
            />
            <Chip
              avatar={<Avatar>MB</Avatar>}
              label="Primary Clickable Chip"
              clickable
              style={style.chip}
              color="primary"
              onDelete={handleDelete}
              deleteIcon={<DoneIcon />}
              variant="outlined"
            />
            <Chip
              icon={<FaceIcon />}
              label="Primary Clickable Chip"
              clickable
              style={style.chip}
              color="primary"
              onDelete={handleDelete}
              deleteIcon={<DoneIcon />}
              variant="outlined"
            />
            <Chip
              label="Deletable Primary Chip"
              onDelete={handleDelete}
              style={style.chip}
              color="primary"
              variant="outlined"
            />
            <Chip
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label="Deletable Secondary Chip"
              onDelete={handleDelete}
              style={style.chip}
              color="secondary"
              variant="outlined"
            />
            <Chip
              icon={<FaceIcon />}
              label="Deletable Secondary Chip"
              onDelete={handleDelete}
              style={style.chip}
              color="secondary"
              variant="outlined"
            /> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={style.panel} disabled>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={style.heading}>
              Disabled Expansion Panel
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel style={style.panel} defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div style={style.column}>
              <Typography style={style.heading}>Location</Typography>
            </div>
            <div style={style.column}>
              <Typography style={style.secondaryHeading}>
                Select trip destination
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={style.details}>
            <div style={style.column} />
            <div style={style.column}>
              <Chip label="Barbados" style={style.chip} onDelete={() => {}} />
            </div>
            <div style={(style.column, style.helper)}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a href="#sub-labels-and-columns" style={style.link}>
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel style={style.panel} defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={style.heading}>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default EditForm;
