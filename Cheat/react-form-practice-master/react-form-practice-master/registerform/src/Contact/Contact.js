import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import "./Contact.css"
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
import * as yup from 'yup'
export default function Contact() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            zip: '',
            country: ''
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(8, 'FirstName is short')
                .required('FirstName cannot be left blank'),
            lastname: yup.string()
                .min(8, 'LastName is short')
                .required('LastName cannot be left blank'),
            address: yup.string()
                .min(32, 'Address is short')
                .required('Address cannot be left blank'),
            city: yup.string()
                .required('City cannot be left blank'),
            zip: yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(6, 'Must be exactly 6 digits')
                .max(6, 'Must be exactly 6 digits')
                .required('Phone cannot be left blank'),
            country: yup.string()
                .required('Country can not be left blank')

        }),

    });
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className="main">
                <h1 className="title">Checkout</h1>
                <h3>Shipping Address</h3>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="First name"
                                    type="text"
                                    variant="standard"
                                    id="firstname"
                                    name="firstname"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: 400 }}
                                />
                                {formik.errors.firstname && formik.touched.firstname ? <span className="txt">{formik.errors.firstname}</span> : null}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Last name"
                                    type="text"
                                    variant="standard"
                                    id="lastname"
                                    name="lastname"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: 400 }}
                                />
                                {formik.errors.lastname  && formik.touched.lastname ? <span className="txt">{formik.errors.lastname}</span> : null}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Address Line 1"
                                    type="text"
                                    variant="standard"
                                    id="address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: 400 }}
                                />
                                {formik.errors.address && formik.touched.address ? <span className="txt">{formik.errors.address}</span> : null}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address Line 2"
                                    type="text"
                                    variant="standard"
                                    style={{ width: 400 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="City"
                                    type="text"
                                    variant="standard"
                                    id="city"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ width: 400 }}
                                />
                                {formik.errors.city && formik.touched.city ? <span className="txt">{formik.errors.city}</span> : null}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="State/Province/Region"
                                    type="text"
                                    variant="standard"
                                    style={{ width: 400 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Zip/Postal Code"
                                    type="text"
                                    variant="standard"
                                    style={{ width: 400 }}
                                    id="zip"
                                    name="zip"
                                    value={formik.values.zip}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.zip && formik.touched.zip ? <span className="txt">{formik.errors.zip}</span> : null}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Country"
                                    type="text"
                                    variant="standard"
                                    style={{ width: 400 }}
                                    id="country"
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.country && formik.touched.country ? <span className="txt">{formik.errors.country}</span> : null}
                            </Grid>
                        </Grid>
                        <div className='checkbtn'>
                            <Checkbox {...label} /> Use this address for payment details
                        </div>
                        <div className='btn'>
                            <Button variant="contained">Next</Button>
                        </div>
                    </form>
                </div>
            </Container>
            <div className='foot'>
                <p>Copyright &copy; <a href="#">Your Website</a> 2022</p>
            </div>
        </React.Fragment>

    )
}
