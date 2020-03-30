import React, { FunctionComponent, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import styles from './Asks.module.scss';
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
    <div className={styles.requestmodal}>
      <div style={modalStyle}>
        <div>
          <div style={colLabel}>
            <h2>Requester</h2>
          </div>
          <div style={colData}>
            <h2>{ask.requester}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Item Type</h2>
          </div>
          <div style={colData}>
            <h2>{ask.item}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Email</h2>
          </div>
          <div style={colData}>
            <h2>{ask.email}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Request Status</h2>
          </div>
          <div style={colData}>
            <h2>{ask.open}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Phone Number</h2>
          </div>
          <div style={colData}>
            <h2>{ask.phone}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Address</h2>
          </div>
          <div style={colData}>
            <h2>{ask.location.street_address}, {ask.location.city}, {ask.location.state} {ask.location.zip}</h2>
          </div>
        </div>
        <div>
          <div style={colLabel}>
            <h2>Country</h2>
          </div>
          <div style={colData}>
            <h2>{ask.location.country}</h2>
          </div>
        </div>   
        <h2>{ask.instructions}</h2>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        More Information
      </button>
      <Modal
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
  borderRadius: "30px",
  backgroundColor: "#f2f2f2", 
  padding: "20px"
}

const labelStyle: CSS.Properties = {
  width: "50%",
  padding: "10px 10px 0px 0px",
  fontFamily: "'Signika', sans-serif",
  fontSize: "14px"
}

const colLabel: CSS.Properties = {
  float: "left",
  width: "40%",
  marginTop: "6px"
}

const colData: CSS.Properties = {
  float: "left",
  width: "60%",
  marginTop: "6px"
}
