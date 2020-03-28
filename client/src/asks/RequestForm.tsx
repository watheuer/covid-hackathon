import React from "react";
import CSS from 'csstype';
import { useFormik } from "formik";

interface FormResponse {
  email: string;
  item: string;
  phone: string;
  street_address: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  instructions: string;
}

var valid_items = ["masks","volunteers"]
var valid_country = ["Usa", "usa", "USA", "United States", "United States of America"]

const validate = (values : FormResponse) => {
  const errors = {} as FormResponse;

  //validate email
  if(!values.email){
    errors.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //validate item type
  if(!values.item){
    errors.item = 'Item type is required'
  }
  else if(valid_items.indexOf(values.item) === -1){
    errors.item = "Invalid Item Type supplied. Valid Item types are masks and volunteers";
  }

  //validate phone number - currently only validates that it is x-x-x, should also support other formats
  if(!/^[0-9]{3}-[0-9]{3}-[0-9]{4}/i.test(values.phone)){
    errors.phone = "Invalid Phone Number. Valid phone number format is xxx-xxx-xxxx";
 }

  //validate street address
  if(!values.street_address){
    errors.street_address = "Street Address is Required"
  }

  //validate city
  if (!values.city) {
    errors.city = "City is Required"
  }

  //validate zip
  if (!values.zip) {
    errors.zip = "Zip Code is Required"
  }
  else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.zip)){
    errors.zip = "Zip Code format is xxxxx or xxxxx-xxxx"
  }

  //validate state
  if (!values.state) {
    errors.state = "State is Required"
  }

  //validate country
  if (!values.country) {
    errors.country = "Country is Required"
  }
  else if (valid_country.indexOf(values.country) === -1) {
    errors.country = "Only USA is supported currently."
  }

  //validate instructions (none?)
  return errors;
}

export default function RequestForm() {
  const formik = useFormik({
    initialValues: { 
      email: "",
      item: "",
      phone: "",
      street_address: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      instructions: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
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
        name="street_address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.street_address}
      />
      {formik.errors.street_address ? <div>{formik.errors.street_address}</div> : null}

      <label style={labelStyle} htmlFor="city">City</label>
      <input style={inputStyle}
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      {formik.errors.city ? <div>{formik.errors.city}</div> : null}

      <label style={labelStyle} htmlFor="zip">Zip Code</label>
      <input style={inputStyle}
        id="zip"
        name="zip"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.zip}
      />
      {formik.errors.zip ? <div>{formik.errors.zip}</div> : null}

      <label style={labelStyle} htmlFor="state">State</label>
      <input style={inputStyle}
        id="state"
        name="state"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.state}
      />
      {formik.errors.state ? <div>{formik.errors.state}</div> : null}

      <label style={labelStyle} htmlFor="country">Country</label>
      <input style={inputStyle}
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      {formik.errors.country ? <div>{formik.errors.country}</div> : null}

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