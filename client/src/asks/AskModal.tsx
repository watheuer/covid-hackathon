import React, { FunctionComponent, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { Ask } from '../store/askState/types';
import CSS from 'csstype';

interface AskListProps {
  ask: Ask,
}

export const AskModal :  FunctionComponent<AskListProps> = ({ask}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div>
      <h2>{ask.requester}</h2>
      <h2>{ask.item}</h2>
      <h2>{ask.email}</h2>
      <h2>{ask.open}</h2>
      <h2>{ask.phone}</h2>
      <h2>{ask.location.street_address}, {ask.location.city}, {ask.location.state} {ask.location.zip}</h2>
      <h2>{ask.location.country}</h2>
      <h2>{ask.instructions}</h2>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal style={modalStyle}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> 
    </div>
  )
}

const modalStyle: CSS.Properties = {
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
}
