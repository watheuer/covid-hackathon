import React, { FunctionComponent } from "react";
import { AskListProps } from "./AskList";
import { ResourceMap } from './ResourceMap';
import styles from './Asks.module.scss';

export const AskMap: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
    return (
        <div className={styles.mapRoot}>
            <ResourceMap />
        </div>
    );
}
