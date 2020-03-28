import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { fetchAsks } from '../store/askState/thunks';

interface AskListProps {
    asks: string[],
    fetching: boolean,
    fetchAsks: () => void
}
export const AskList: FunctionComponent<AskListProps> = ({ asks, fetchAsks, fetching }) => {
    const asksComponents = asks.map((ask, index) => {
        return <div key={index}>
            Request: {ask}
        </div>;
    });

    return (
        <div>
            {fetching && "Fetching"}
            {asksComponents}
            <button onClick={fetchAsks}>get asks</button>
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
)(AskList);