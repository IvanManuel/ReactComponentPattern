import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    // const { handleSubmit, getFieldProps, errors, touched } = useFormik({});

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log({ values });
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Must be at 2 characters at least')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password1: Yup.string()
                            .min(6, 'Must be at least 6 characters')
                            .required('Required'),
                        password2: Yup.string()
                            .min(6, 'Must be at least 6 characters')
                            .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
                            .required('Requerido'),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Nombre"
                                name="name"
                                placeholder="Ivan"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="ivan@mail.com"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="********"
                            />

                            <MyTextInput
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="********"
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset Form</button>
                        </Form>
                    )
                }

            </Formik>
        </div >

    )
}
