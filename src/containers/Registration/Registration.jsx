import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../components/Form/Fields/Text";
import styles from "./Registration.module.scss";
import Button from "../../components/Button";

const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName field is required"),
  lastName: Yup.string().required("LastName field is required"),
  phone: Yup.string().required("FirstName field is required"),
  email: Yup.string().required("LastName field is required"),
});
export default function Registration() {
  const [dob, setDob] = useState("");
  const [formData, setFormData] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className={styles.Box}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
          setFormData({ ...formData, values, dob });
          setShowContactForm(true);
        }}
      >
        <Form>
          <div
            className={styles.FormBox}
            style={{
              visibility: showContactForm ? "hidden" : "visible",
              height: showContactForm ? "0px" : "auto",
            }}
          >
            <div className={styles.Form}>
              <Text name="firstName" label="First Name" />
              <Text name="lastName" label="LastName" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                Date Of Birth
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <Button text="Next" />
            </div>
          </div>
        </Form>
      </Formik>
      <Formik
        initialValues={{
          phone: "",
          email: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
          const formValues = { ...formData, values };
          console.log(formValues);
          setFormData(formValues);
        }}
      >
        <Form>
          <div
            className={styles.FormBox}
            style={{ visibility: showContactForm ? "visible" : "hidden" }}
          >
            <div className={styles.Form}>
              <Text name="phone" label="Phone" />
              <Text name="email" label="Email" />

              <Button text="Submit" type="submit" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
