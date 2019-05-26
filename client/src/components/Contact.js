import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Screen from './Screen';

import styles from './Contact.css';

export default () => (
  <Screen>
    <h1>Contact</h1>
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.contact__form}>
          <Field type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="text" name="subject" placeholder="Subject" />
          <ErrorMessage name="subject" component="div" />

          <Field component="textarea" rows="6" cols="60" name="message" placeholder="Your Message" />
          <ErrorMessage name="message" component="div" />

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  </Screen>
);
