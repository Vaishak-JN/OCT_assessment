import arrow from "../assets/right.png"
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useContext } from "react";
import AppContext from "../store/app-context";


const LoginFrom = ({ handleLogin }) => {

    const { otp } = useContext(AppContext)

    const Schema = Yup.object().shape({

        otp: Yup.string().min(4, 'Enter a valid 4 digit otp').max(4, 'Enter a valid 4 digit otp').required('Field Required'),

    });

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({

        initialValues: {
            otp: "",
        },
        validationSchema: Schema,
        onSubmit: values => {
            if (values.otp === otp) {
                handleLogin()
                // showModalHandler()
            }
        },

    });
    return (
        <>
            <h1>Verification</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="otp" name="otp" onChange={handleChange} value={values.otp} onBlur={handleBlur} placeholder="OTP" />


                <p>You haven’t received OTP yet? Resend it</p>


                <button disabled={values.otp.length !== 4} type="submit">Enter OTP <img src={arrow} alt="right" /></button>
            </form></>
    )
}

export default LoginFrom