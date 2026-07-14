import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddBooking = () => {

    const [input, changeInput] = useState(
        {
            bookingId: "",
            ownerName: "",
            email: "",
            phone: "",
            vehicleRegistrationNumber: "",
            vehicleBrand: "",
            vehicleModel: "",
            batteryCapacity: "",
            connectorType: "",
            chargingDate: "",
            timeSlot: "",
            estimatedUnits: "",
            chargingBayNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:5002/add-booking", input).then(
            (response) => {

                console.log(response.data)

                alert("EV charging booking added successfully")


            }
        ).catch(
            (error) => {

                console.log(error)

                alert("Failed to add EV charging booking")

            }
        )
    }

    return (

        <div className="ev-page">

            <NavBar/>

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-10">

                        <div className="ev-card">

                            <div className="ev-header text-center">

                                <div className="ev-icon">
                                    ⚡
                                </div>

                                <h2 className="ev-title mb-2">
                                    EV CHARGING BOOKING
                                </h2>

                                <p className="ev-subtitle mb-5">
                                    Reserve your charging bay and power up your journey
                                </p>

                            </div>


                            <div className="row g-4">

                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Booking ID
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="bookingId"
                                        value={input.bookingId}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Owner Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ownerName"
                                        value={input.ownerName}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={input.email}
                                        onChange={inputHandler}
                                        placeholder="example@gmail.com"
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={input.phone}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Vehicle Registration Number
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="vehicleRegistrationNumber"
                                        value={input.vehicleRegistrationNumber}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Vehicle Brand
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="vehicleBrand"
                                        value={input.vehicleBrand}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Vehicle Model
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="vehicleModel"
                                        value={input.vehicleModel}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Battery Capacity (kWh)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="batteryCapacity"
                                        value={input.batteryCapacity}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Connector Type
                                    </label>

                                    <select
                                        className="form-control"
                                        name="connectorType"
                                        value={input.connectorType}
                                        onChange={inputHandler}
                                    >

                                        <option value="">
                                            Select Connector Type
                                        </option>

                                        <option>
                                            CCS2
                                        </option>

                                        <option>
                                            Type 2
                                        </option>

                                        <option>
                                            CHAdeMO
                                        </option>

                                        <option>
                                            GB/T
                                        </option>

                                    </select>

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Charging Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        name="chargingDate"
                                        value={input.chargingDate}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Time Slot
                                    </label>

                                    <input
                                        type="time"
                                        className="form-control"
                                        name="timeSlot"
                                        value={input.timeSlot}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Estimated Units (kWh)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="estimatedUnits"
                                        value={input.estimatedUnits}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-12">

                                    <label className="form-label fw-semibold">
                                        Charging Bay Number
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="chargingBayNumber"
                                        value={input.chargingBayNumber}
                                        onChange={inputHandler}
                                    />

                                </div>


                                <div className="col-12 text-center mt-5">

                                    <button
                                        className="ev-submit-btn"
                                        onClick={readValue}
                                    >
                                        ⚡ BOOK CHARGING SLOT
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default AddBooking