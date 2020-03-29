import React, { FunctionComponent } from "react";
import { fetchAsks } from "../store/askState/thunks";
import { connect } from "react-redux";
import { RootState } from "../store";
import { AskList } from "./AskList";
import { Button } from "@material-ui/core";
import { AskMap } from "./AskMap";
import { Ask } from "../store/askState/types";
import { useStyles } from "./styles";

interface AskContainer {
  asks: Ask[];
  fetching: boolean;
  fetchAsks: () => void;
}
export const AskContainer: FunctionComponent<AskContainer> = ({ asks, fetching, fetchAsks }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AskList asks={asks} fetching={fetching} />
      <Button onClick={fetchAsks}>Get Asks</Button>
      <AskMap asks={asks} fetching={fetching} />
    </div>
  );
};

export default connect(
  (state: RootState) => ({
    asks: state.askState.asks,
    fetching: state.askState.fetching
  }),
  {
    fetchAsks: fetchAsks
  }
)(AskContainer);