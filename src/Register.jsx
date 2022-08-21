import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import "./register.css"

const Register = () => {
    const formik = useFormik({
        initialValues: {
            personName: "",
            age: "",
            sex: "",
            mobile: "",
            govtIDType: "",
            govtIDNumber: "",
            guardianRelation: "",
            guardianName: "",
            email: "",
            emergencyContact: "",
            address: "",
            state: "",
            city: "",
            country: "India",
            pincode: "",
            occupation: "",
            religion: "",
            maritalStatus: "",
            bloodGroup: "",
            nationality: "Indian"
        },

    })

    console.log(formik.values);
    return (
        <div>
            <form className='reg-form'>
                <div className="personal-details">
                    <h3>Personal Details</h3>
                    <div className='person'>
                        <div className="name">
                            <label>Name</label>
                            <input
                                type="text"
                                id="personName"
                                placeholder='Enter Name'
                                value={formik.values.personName}
                                onChange={formik.handleChange}
                                className="p-name"
                            />
                        </div>
                        <div className="age">
                            <label>Date of Birth or Age</label>
                            <input
                                type="text"
                                id="age"
                                placeholder='DD/MM/YYYY or Age in Years'
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                className="age-input"

                            />
                        </div>
                        <div className="sex">
                            <label>Sex</label>
                            <select
                                value={formik.values.sex}
                                id="sex"
                                onChange={formik.handleChange}
                            >
                                <option value="" selected>Enter Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Does not wish to specify">Does not wish to specify</option>
                            </select>
                        </div>

                    </div>
                    <div className="contact">
                        <div className="mobile">
                            <label>Mobile</label>
                            <input
                                type="text"
                                id="mobile"
                                placeholder='Enter Mobile'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                className="mobile-input"

                            />


                        </div>
                        <div className="govt-id">
                            <label>Govt Issued ID</label>
                            <select
                                value={formik.values.govtIDType}
                                id="govtIDType"
                                onChange={formik.handleChange}
                                className="govtID-input"
                            >
                                <option value="" selected>ID Type</option>
                                <option value="Driver's License">Driver's License</option>
                                <option value="PAN">PAN</option>
                                <option value="Passport">Passport</option>

                            </select>
                            <input
                                type="text"
                                id="govtIDNumber"
                                placeholder='Enter Govt ID '
                                value={formik.values.govtIDNumber}
                                onChange={formik.handleChange}
                                className="govtIDnum-input"

                            />


                        </div>
                    </div>
                </div>
                <h3>Contact Details</h3>
                <div className="contact-details">

                    <div className="guardian">
                        <label>Guardian Details</label>
                        <select
                            name="guardianRelation"
                            id="guardianRelation"
                            onChange={formik.handleChange}
                            className="guardianRelation"
                            value={formik.values.guardianRelation}

                        >
                            <option selected>Enter Label</option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Relative">Relative</option>



                        </select>
                        <input
                            type="text"
                            id="guardianName"
                            placeholder='Guardian Name'
                            value={formik.values.guardianName}
                            onChange={formik.handleChange}


                        />

                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Enter Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}


                        />
                    </div>
                    <div className="emergency">
                        <label className="em-label">Emergency Contact Number</label>
                        <input
                            type="text"
                            id="emergencyContact"
                            placeholder='Enter Emergency No'
                            value={formik.values.emergencyContact}
                            onChange={formik.handleChange}


                        />
                    </div>
                </div>

                <h3>Address Details</h3>
                <div className="address-details">
                    <div className="address">
                        <label >Address</label>
                        <input
                            type="text"
                            id="address"
                            placeholder='Enter Address'
                            value={formik.values.address}
                            onChange={formik.handleChange}


                        />

                    </div>
                    <div className="state">
                        <label >State</label>
                        <select
                            name="state"
                            id="state"
                            onChange={formik.handleChange}
                            value={formik.values.state}


                        >
                            <option selected>Enter State</option>
                            <option value="State1">State1</option>
                            <option value="State2">State2</option>
                            <option value="State3">State3</option>



                        </select>

                    </div>
                    <div className="city">
                        <label >City</label>
                        <select
                            name="city"
                            id="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}


                        >
                            <option selected>Enter city/town/village</option>
                            <option value="City1">City1</option>
                            <option value="City2">City2</option>
                            <option value="City3">City3</option>



                        </select>
                    </div>
                    <div className="country">
                        <label >Country</label>
                        <input
                            type="text"
                            id="country"
                            placeholder='India'
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            disabled="disabled"

                        />

                    </div>
                    <div className="pincode">
                        <label >Pincode</label>
                        <input
                            type="text"
                            id="pincode"
                            placeholder='Enter pincode'
                            value={formik.values.pincode}
                            onChange={formik.handleChange}


                        />

                    </div>
                </div>
                <h3>Other Details</h3>
                <div className="other-details">
                    <div className="occupation">
                    <label >Occupation</label>
                        <input
                            type="text"
                            id="occupation"
                            placeholder='Enter occupation'
                            value={formik.values.occupation}
                            onChange={formik.handleChange}


                        />
                    </div>
                    <div className="religion">
                    <label >Religion</label>
                        <select
                            name="religion"
                            id="religion"
                            onChange={formik.handleChange}
                            value={formik.values.religion}


                        >
                            <option selected>Enter Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Christian">Christian</option>



                        </select>
                    </div>
                    <div className="marital-status">
                    <label >Marital Status</label>
                        <select
                            name="marital-status"
                            id="maritalStatus"
                            onChange={formik.handleChange}
                            value={formik.values.maritalStatus}


                        >
                            <option selected>Enter Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            



                        </select>
                    </div>
                    <div className="blood-group">
                    <label >Blood Group</label>
                        <select
                            name="blood-group"
                            id="bloodGroup"
                            onChange={formik.handleChange}
                            value={formik.values.bloodGroup}


                        >
                            <option selected>Enter Blood group</option>
                            <option value="O">O</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            



                        </select>
                    </div>
                    <div className="nationality">
                    <label >Nationality</label>
                        <input
                            type="text"
                            id="nationality"
                            placeholder='India'
                            value={formik.values.nationality}
                            onChange={formik.handleChange}
                            disabled="disabled"

                        />
                    </div>
                </div>

                <div className="buttons">
                    <button className='cancel'>Cancel<br/>(ESC)</button>
                    <button className='submit'>Submit<br/>(Ctrl+S)</button>
                </div>
                

            </form>
        </div>
    )
}

export default Register