import React from 'react'
import { Form } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import './CreateEmployees.css'


export const CreateEmployees = () => {
    return (
        <div>
            <div className="home__container">
                <h1 className="logo"> HR net </h1>
                <Link to="/current-employees" > View Current Employees </Link>
                <Form />
            </div>
        </div>
    )}