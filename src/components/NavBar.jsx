import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg ev-navbar">

            <div className="container">

                <Link
                    className="navbar-brand ev-navbar-brand"
                    to="/"
                >
                    ⚡ EV CHARGE
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#evNavbar"
                    aria-controls="evNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse"
                    id="evNavbar"
                >

                    <div className="navbar-nav ms-auto gap-lg-3">

                        <Link
                            className="nav-link ev-nav-link"
                            to="/add-booking"
                        >
                            Add Booking
                        </Link>

                        <Link
                            className="nav-link ev-nav-link"
                            to="/view-booking"
                        >
                            View Booking
                        </Link>

                    </div>

                </div>

            </div>

        </nav>

    )
}

export default NavBar