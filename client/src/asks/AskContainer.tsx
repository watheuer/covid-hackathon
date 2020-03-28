import React, { FunctionComponent } from "react";
import { fetchAsks } from "../store/askState/thunks";
import { connect } from "react-redux";
import { RootState } from "../store";
import { AskList } from "./AskList";
import { Button } from "@material-ui/core";
import { AskMap } from "./AskMap";

interface AskContainer {
  asks: string[];
  fetching: boolean;
  fetchAsks: () => void;
}
export const AskContainer: FunctionComponent<AskContainer> = ({ asks, fetching, fetchAsks }) => {
  return (
    <div>
      <AskList asks={asks} fetching={fetching} />
      <AskMap asks={asks} fetching={fetching} />
      <Button onClick={fetchAsks}>Get Asks</Button>
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