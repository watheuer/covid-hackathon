import React, { FunctionComponent, useEffect } from "react";
import { fetchAsks } from "../store/askState/thunks";
import { connect } from "react-redux";
import { RootState } from "../store";
import { AskList } from "./AskList";
import { AskMap } from "./AskMap";
import { Ask } from "../store/askState/types";
import styles from "./Asks.module.scss";

interface AskContainer {
  asks: Ask[];
  fetching: boolean;
  fetchAsks: () => void;
}
export const AskContainer: FunctionComponent<AskContainer> = ({ asks, fetching, fetchAsks }) => {
  // Fetch asks only on initial render
  useEffect(() => {
    fetchAsks();
  }, []); // empty dependency array to fire only once

  return (
    <div className={styles.container}>
      <AskList asks={asks} fetching={fetching} />
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
