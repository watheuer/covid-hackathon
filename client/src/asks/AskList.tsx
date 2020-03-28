import React, { FunctionComponent, useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { useStyles } from './styles';
import { Restore, LocationOn } from '@material-ui/icons';
import { Ask } from '../store/askState/types';

export interface AskListProps {
  asks: Ask[],
  fetching: boolean,
}
export const AskList: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
  const classes = useStyles();
  const [navValue, setNavValue] = useState('recents');

  const askListItems = asks.map(ask => {
    // TODO: get actual fields from ask
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="mask" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={ask.item}
          secondary={ask.instructions}
        />
      </ListItem>
    );
  });

  return (
    <div className={classes.listRoot}>
      <List className={classes.askList}>
        {askListItems}
      </List>
      <BottomNavigation value={navValue} onChange={(event, newValue) => setNavValue(newValue)} showLabels>
        <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </div>
  );
};
