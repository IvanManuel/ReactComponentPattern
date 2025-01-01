import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckBox } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log({ values });
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Must to acept the terms'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'This option is not allowed')
                            .required('Required'),
                    })
                }
            >
                {
                    () => (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Ivan"
                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Mendoza"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="mendoza@gmail.com"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckBox label="Terms & Conditions" name="terms"  />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
