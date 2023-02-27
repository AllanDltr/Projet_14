import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { DatePicker, DateOfBirth } from '../DatePicker/DatePicker';
import { Select } from "@chakra-ui/select";
import { Modal } from '../Modale/Modale';
import { states } from '../../datas/states';
import './Form.css'
import props from 'prop-types';


export function  Form() {
    const [openModal, setOpenModal] = useState(false);
    const [state, setState] = useState("");


    const handleChange = (e) => {
        setState({state:e.target.value});
    };

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
                    <label htmlFor="state" > STATE </label>
                    <Select id="state" name="state" value="Alabama" onChange={handleChange}>
                        {states.map((state) => (
                        <option key={state.key} value={state.name}>{state.name}</option>
                            ))}
                    </Select>
                </div>
                <div className="form__wrapper">
                    <label htmlFor="zipCode"> Zip Code </label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
                <div className="form__wrapper">
                    <label htmlFor="department"> Department </label>
                    <Select id="department" name="department">
                        <option value="0"> Sales </option>
                        <option value="1"> Marketing </option>
                        <option value="2"> Engineering </option>
                        <option value="3"> Human Resources </option>
                        <option value="4"> Legal </option>
                    </Select>
                </div>

            </form>
            <button className="modal__OpenBtn" onClick={() => {setOpenModal(true)}}> Save </button>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
)};