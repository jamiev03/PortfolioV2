import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";
import { ContactButton } from "./Contact.style";
import Email from "../../Email";
import emailjs from 'emailjs-com';



const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      subjectArea: "",

      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        .max(15, "Must be 15 characters or less")

        .required("Required"),

      subjectArea: Yup.string()

        .max(200, "Must be 200 characters or less")

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  const MY_USER_ID = process.env.REACT_APP_USER_ID;
  const MY_TEMPLATE = process.env.REACT_APP_TEMPLATE_ID;
  const MY_SERVICE = process.env.REACT_APP_SERVICE_ID;

  const sendMail = (e) => {
    e.preventDefault();

    // place email.js here
    emailjs.sendForm(MY_SERVICE, MY_TEMPLATE, e.target, MY_USER_ID)

    

    .then((result) => {
      alert('Message sent! Thanks for stopping by', result.text);

    },
    (error) => {
      alert('error occurred, please try again', error.text)
    })
  }
  

  return (
    <form onSubmit={sendMail}>
      <label htmlFor="firstName">Name</label>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Name"
        value={formik.values.firstName}
      />

      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="errorText">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="email">Email</label>

      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div className="errorText">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="subjectArea">Message</label>

      <textarea
        id="subjectArea"
        name="subjectArea"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Message"
        value={formik.values.subjectArea}
      />

      {formik.touched.subjectArea && formik.errors.subjectArea ? (
        <div className="errorText">{formik.errors.subjectArea}</div>
      ) : null}

      <ContactButton onClick={() => console.log('something')}type="submit">Send Message</ContactButton>
    </form>
  );
};

export default SignupForm;
