import React, { FunctionComponent, useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, BottomNavigation, BottomNavigationAction, Modal, Button } from "@material-ui/core";
import { Restore, LocationOn } from '@material-ui/icons';
import { Ask } from '../store/askState/types';
import styles from './Asks.module.scss';
import RequestForm from './RequestForm';

export interface AskListProps {
  asks: Ask[],
  fetching: boolean,
}
export const AskList: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
  const [navValue, setNavValue] = useState('recents');
  const [isOpen, setIsOpen] = useState(false);

  const askListItems = asks.map(ask => {
    // TODO: get actual fields from ask
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="mask" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={ask.item}
          secondary={ask.requester}
        />
      </ListItem>
    );
  });

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.listRoot}>
      <div className={styles.listHeader}>
        <Button onClick={open}>Make a request</Button>
        <Modal
          open={isOpen}
          onClose={close}
        >
          <div className={styles.modal}>
            <RequestForm close={close} />
          </div>
        </Modal>
      </div>

      <div className={styles.listContent}>
        <List className={styles.askList}>
          {askListItems}
        </List>
        <BottomNavigation value={navValue} onChange={(event, newValue) => setNavValue(newValue)} showLabels>
          <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
        </BottomNavigation>
      </div>
    </div>
  );
};
