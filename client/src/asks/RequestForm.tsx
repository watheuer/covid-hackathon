import React, { FunctionComponent } from "react";
import CSS from 'csstype';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { connect } from "react-redux";
import { postAsk } from "../store/askState/thunks";
import { Ask } from "../store/askState/types";

interface RequestFormProps {
  postAsk: (ask: Ask) => void;
  close?: () => void;
}
const RequestForm: FunctionComponent<RequestFormProps> = ({ postAsk, close }) => {
  const formik = useFormik({
    initialValues: { 
      id: 0,
      requester: "",
      item: "",
      open: true,
      email: "",
      phone: "",
      location: {
        street_address: "",
        city: "",
        zip: 0,
        state: "",
        country: "",
        lat: 0,
        long: 0
      },
      instructions: "",
      timestamp: "no"
    },
    onSubmit: values => {
      console.log(values)
      postAsk(values);
      if (close) close();
    },
    validationSchema: 
      Yup.object().shape
      (
        {
        id: Yup.number(),
        requester: Yup.string()
          .required('Requester is required'),
        open: Yup.bool(),
        email: Yup.string()
          .email('The format must be a valid email xx@xx.xx')
          .required('Email address is required'),
        item: Yup.string()
          .required('Item type is required')
          .matches(/(masks|toilet paper)/i, "Only accepted item types are masks and toilet paper"),
        phone: Yup.string()
          .length(10,"Must be a valid phone number of 10 digits")
          .matches(/^[0-9]{10}/, "Must be a valid phone number of 10 digits"),
        location: Yup.object().shape
        (
          {
            street_address: Yup.string()
              .required('Street address is required'),
            city: Yup.string()
              .required('City is required'),
            zip: Yup.number()
              .min(10000, 'Must be a valid five digit zip code')
              .max(99999, 'Must be a valid five digit zip code')
              .required('Required'),
            state: Yup.string()
              .required('State is required'),
            country: Yup.string()
              .required('City is required')
              .matches(/(usa|united states)/i, "Must be usa"),
            lat: Yup.number(),
            long: Yup.number()        
          }
        ),
        instructions: Yup.string(),
        timestamp: Yup.string()
        }
      ) 
    
  });  
  return (

    <form style={requestStyle} onSubmit={formik.handleSubmit}>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="email">Email Address</label>
        </div>
        <div style={colError}>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="requester">Requester Name</label>
        </div>
        <div style={colError}>
          {formik.errors.requester ? <div>{formik.errors.requester}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="requester"
            name="requester"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.requester}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="item">Item Type</label>
        </div>
        <div style={colError}>
          {formik.errors.item ? <div>{formik.errors.item}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="item"
            name="item"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.item}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="phone">Phone Number</label>
        </div>
        <div style={colError}>
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="street_address">Street Address</label>
        </div>
        <div style={colError}>
          {formik.errors.location?.street_address ? <div>{formik.errors.location?.street_address}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="street_address"
            name="location.street_address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.location.street_address}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="city">City</label>
        </div>
        <div style={colError}>
          {formik.errors.location?.city ? <div>{formik.errors.location?.city}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="city"
            name="location.city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.location.city}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="zip">Zip Code</label>
        </div>
        <div style={colError}>
          {formik.errors.location?.zip ? <div>{formik.errors.location?.zip}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="zip"
            name="location.zip"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.location.zip}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="state">State</label>
        </div>
        <div style={colError}>
          {formik.errors.location?.state ? <div>{formik.errors.location?.state}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="state"
            name="location.state"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.location.state}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="country">Country</label>
        </div>
        <div style={colError}>
          {formik.errors.location?.country ? <div>{formik.errors.location?.country}</div> : null}
        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="country"
            name="location.country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.location.country}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <div style={colType}>
          <label style={labelStyle} htmlFor="instructions">Additional Instructions</label>
        </div>
        <div style={colError}>
          {formik.errors.instructions ? <div>{formik.errors.instructions}</div> : null}

        </div>
        <div style={colInput}>
          <input style={inputStyle}
            id="instructions"
            name="instructions"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.instructions}
          />
        </div>
        <div style={rowAfter} />
      </div>

      <div>
        <button style={buttonStyle} type="submit">Submit</button>
        <div style={rowAfter} />
      </div>
    </form>
  );
};

const requestStyle: CSS.Properties = {
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  padding: "20px"
}

const labelStyle: CSS.Properties = {
  width: "50%",
  padding: "10px 10px 0px 0px",
  fontFamily: "'Signika', sans-serif",
  fontSize: "18px"
}

const inputStyle: CSS.Properties = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  resize: "vertical",
  fontFamily: "'Signika', sans-serif",
}

const buttonStyle: CSS.Properties = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "12px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  float: "right",
  marginTop: "12px"
}

const colType: CSS.Properties = {
  float: "left",
  width: "10%",
  marginTop: "6px"
}

const colError: CSS.Properties = {
  float: "left",
  width: "12%",
  marginTop: "6px",
  color: "red",
  fontFamily: "'Signika', sans-serif",
  fontSize: "14px"

}

const colInput: CSS.Properties = {
  float: "left",
  width: "78%",
  marginTop: "6px"
}

const rowAfter: CSS.Properties = {
  content: "",
  display: "table",
  clear: "both"
}

export default connect
  (
    state => ({}), // mapStateToProps
    {              // mapDispatchToProps
      postAsk: postAsk
    }
  )(RequestForm);

