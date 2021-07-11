import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";
import { ContactButton } from "./Contact.style";

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

  return (
    <form onSubmit={formik.handleSubmit}>
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
        type="email"
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

      <ContactButton type="submit">Send Message</ContactButton>
    </form>
  );
};

export default SignupForm;
