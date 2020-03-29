import React, { FunctionComponent } from "react";
import { AskListProps } from "./AskList";
import { useStyles } from "./styles";
import { ResourceMap } from './ResourceMap';

export const AskMap: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
    const classes = useStyles();
    return (
        <div className={classes.mapRoot}>
            <ResourceMap />
        </div>
    );
}