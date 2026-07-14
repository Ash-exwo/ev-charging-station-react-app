import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewBooking = () => {

    const [data, changeData] = useState([])

    const fetchBookingData = () => {

        axios.get("http://localhost:5002/view-booking")
            .then(
                (response) => {

                    changeData(response.data)

                }
            )
            .catch(
                (error) => {

                    console.log("Error fetching booking details")

                    alert("Failed to view booking details")

                }
            )

    }


    useEffect(() => {

        fetchBookingData()

    }, [])


    return (

        <div className="ev-page">

            <NavBar/>

            <div className="container-fluid px-4 py-5">

                <div className="ev-card">

                    <div className="text-center">

                        <div className="ev-icon">
                            ⚡
                        </div>

                        <h2 className="ev-title mb-2">

                            VIEW ALL BOOKINGS

                        </h2>

                        <p className="ev-subtitle mb-5">

                            Explore all EV charging reservations and vehicle details

                        </p>

                    </div>


                    <div className="table-responsive">

                        <table className="table table-hover align-middle text-center ev-table">

                            <thead>

                                <tr>

                                    <th>Booking ID</th>

                                    <th>Owner Name</th>

                                    <th>Email</th>

                                    <th>Phone</th>

                                    <th>Registration No.</th>

                                    <th>Vehicle Brand</th>

                                    <th>Vehicle Model</th>

                                    <th>Battery Capacity</th>

                                    <th>Connector Type</th>

                                    <th>Charging Date</th>

                                    <th>Time Slot</th>

                                    <th>Estimated Units</th>

                                    <th>Bay Number</th>

                                </tr>

                            </thead>


                            <tbody>

                                {

                                    data.map(

                                        (value, index) => {

                                            return (

                                                <tr key={index}>

                                                    <td className="fw-bold">

                                                        {value.bookingId}

                                                    </td>


                                                    <td className="fw-semibold">

                                                        {value.ownerName}

                                                    </td>


                                                    <td>

                                                        {value.email}

                                                    </td>


                                                    <td>

                                                        {value.phone}

                                                    </td>


                                                    <td>

                                                        {value.vehicleRegistrationNumber}

                                                    </td>


                                                    <td>

                                                        {value.vehicleBrand}

                                                    </td>


                                                    <td>

                                                        {value.vehicleModel}

                                                    </td>


                                                    <td>

                                                        {value.batteryCapacity} kWh

                                                    </td>


                                                    <td>

                                                        <span className="ev-badge">

                                                            {value.connectorType}

                                                        </span>

                                                    </td>


                                                    <td>

                                                        {value.chargingDate}

                                                    </td>


                                                    <td>

                                                        {value.timeSlot}

                                                    </td>


                                                    <td>

                                                        {value.estimatedUnits} kWh

                                                    </td>


                                                    <td>

                                                        <span className="ev-bay-badge">

                                                            Bay {value.chargingBayNumber}

                                                        </span>

                                                    </td>

                                                </tr>

                                            )

                                        }

                                    )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ViewBooking