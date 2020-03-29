import React, { FunctionComponent } from "react";
import CSS from 'csstype';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { connect } from "react-redux";
import { postAsk } from "../store/askState/thunks";
import { Ask } from "../store/askState/types";

interface RequestFormProps {
  postAsk: (ask: Ask) => void;
}

const RequestForm: FunctionComponent<RequestFormProps> = ({ postAsk }) => {
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
      alert(JSON.stringify(values, null, 2));
      console.log(values)
      postAsk(values);
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
      <label style={labelStyle} htmlFor="email">Email Address</label>
      <input style={inputStyle}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label style={labelStyle} htmlFor="requester">Requester Name</label>
      <input style={inputStyle}
        id="requester"
        name="requester"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.requester}
      />
      {formik.errors.requester ? <div>{formik.errors.requester}</div> : null}

      <label style={labelStyle} htmlFor="item">Item Type</label> 
      <input style={inputStyle}
        id="item"
        name="item"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.item}
      />
      {formik.errors.item ? <div>{formik.errors.item}</div> : null}

      <label style={labelStyle} htmlFor="phone">Phone Number</label>
      <input style={inputStyle}
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <label style={labelStyle} htmlFor="street_address">Street Address</label>
      <input style={inputStyle}
        id="street_address"
        name="location.street_address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location.street_address}
      />
      {formik.errors.location?.street_address ? <div>{formik.errors.location?.street_address}</div> : null}

      <label style={labelStyle} htmlFor="city">City</label>
      <input style={inputStyle}
        id="city"
        name="location.city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location.city}
      />
      {formik.errors.location?.city ? <div>{formik.errors.location?.city}</div> : null}

      <label style={labelStyle} htmlFor="zip">Zip Code</label>
      <input style={inputStyle}
        id="zip"
        name="location.zip"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.location.zip}
      />
      {formik.errors.location?.zip ? <div>{formik.errors.location?.zip}</div> : null}

      <label style={labelStyle} htmlFor="state">State</label>
      <input style={inputStyle}
        id="state"
        name="location.state"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location.state}
      />
      {formik.errors.location?.state ? <div>{formik.errors.location?.state}</div> : null}

      <label style={labelStyle} htmlFor="country">Country</label>
      <input style={inputStyle}
        id="country"
        name="location.country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location.country}
      />
      {formik.errors.location?.country ? <div>{formik.errors.location?.country}</div> : null}

      <label style={labelStyle} htmlFor="instructions">Additional Instructions</label>
      <input style={inputStyle}
        id="instructions"
        name="instructions"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.instructions}
      />
      {formik.errors.instructions ? <div>{formik.errors.instructions}</div> : null}

      <button style={buttonStyle} type="submit">Submit</button>
    </form>
  );
};

const requestStyle: CSS.Properties = {
  background: "#faf3dc",
  display: "flex",
  flexWrap: "wrap",
  border: "red solid",
  alignItems: "flex-start"
}

const labelStyle: CSS.Properties = {
  width: "50%",
  padding: "10px 10px 0px 0px"
}

const inputStyle: CSS.Properties = {
  width: "50%",
  padding:"0px 0px 0px 0px"
}

const buttonStyle: CSS.Properties = {
  width: "50%",
  height: "auto",
  padding: "0px 0px 0px 0px"
}

export default connect
(
  state => ({}), // mapStateToProps
  {              // mapDispatchToProps
    postAsk: postAsk
  }
)(RequestForm);
