import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { DatePicker, DateOfBirth } from '../DatePicker/DatePicker';
import './Form.css'

export const Form = () =>{

    return (
        <div className="create__employee__content">
            <h1> Create Employee </h1>
            <form id="form">
                <div className="form__wrapper">
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="dateOfBirth"> Date of Birth </label>
                    <DatePicker> </DatePicker>
                </div>
                <div className="form__wrapper">
                    <label htmlFor="startDate"> Start Date </label>
                    <DatePicker> </DatePicker>
                </div>
                <div className="form__wrapper">
                    <label htmlFor="street"> Street </label>
                    <input type="text" id="street" name="street" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="city"> City </label>
                    <input type="text" id="city" name="city" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="state"> State </label>
                    <input type="text" id="state" name="state" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="zipCode"> Zip Code </label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="department"> Department </label>
                    <select id="department" name="department">
                        <option value="0"> Sales </option>
                        <option value="1"> Marketing </option>
                        <option value="2"> Engineering </option>
                        <option value="3"> Human Resources </option>
                        <option value="4"> Legal </option>
                    </select>
                </div>

            </form>
        </div>
)};