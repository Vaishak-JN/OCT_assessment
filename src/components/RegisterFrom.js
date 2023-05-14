import arrow from "../assets/right.png"
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useContext, useState } from "react";
import AppContext from "../store/app-context";


const RegisterFrom = ({ changeRegistration, handleTempUser }) => {

    const { createOtp } = useContext(AppContext)


    const [check, setCheck] = useState(false)

    const Schema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Field Required'),
        email: Yup.string().email('Invalid email').required('Field Required'),
        number: Yup.string().min(10, 'Enter a valid 10 digit number').max(10, 'Enter a valid 10 digit number').required(' Field Required'),

    });

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({

        initialValues: {
            name: "",
            email: "",
            number: ""
        },
        validationSchema: Schema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            if (!check) {
                return
            } else {
                createOtp()
                handleTempUser(values)
                changeRegistration()
            }
        },

    });
    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} placeholder="Full Name" />
                {touched.name && errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <input type="text" id="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} placeholder="Email ID" />
                {touched.email && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <input type="text" id="number" name="number" onChange={handleChange} value={values.number} onBlur={handleBlur} placeholder="Mobile Number" />
                {touched.number && errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
                <div className="check">
                    <input id="check" type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                    <label htmlFor="check">I read and accept to the Privacy Policy & Terms and Conditions.</label>
                </div>

                <button disabled={!check} type="submit">Receive OTP <img src={arrow} alt="right" /></button>
            </form>
        </>
    )
}

export default RegisterFrom