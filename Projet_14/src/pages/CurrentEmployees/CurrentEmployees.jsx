import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentEmployees.css';
import { DataTable } from '../../components/DataTable/DataTable';
// import Example from '../../components/MaterialTable/MaterialTable';
import {Header } from '../../components/Header/Header'

export const CurrentEmployees = () => {
    return (
        <div>
            <div className="home__container">
                <Header />
                <h2> Current Employees </h2>
                <DataTable> </DataTable>
                {/* <Example /> */}
            </div>
        </div>
    )};