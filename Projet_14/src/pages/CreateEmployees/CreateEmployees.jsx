import React from 'react'
import { Form } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import {Header} from '../../components/Header/Header'
import './CreateEmployees.css'


export const CreateEmployees = () => {
    return (
        <div>
            <div className="home__container">
                <Header />
                <Form />
            </div>
        </div>
    )}