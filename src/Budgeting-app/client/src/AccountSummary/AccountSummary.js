import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { Navigate, useNavigate } from "react-router-dom"

function AccountSummaryPage() {

    const navigate = useNavigate();
    return (
        <div>
            <section className='options'>
                <button className='home' onClick={() => navigate('/Home')}>Home</button>
                {/* This will eventually need to be changed once the html css and js are written for the help page */}
                <button className='help'>Help</button>
                {/* As of now I am having "signout" send the user back to the home screen but I am unsure how to "forget" their information */}
                <button className='signout' onClick={() => navigate('/Home')}>Sign Out</button>
                {/* I assume that when the user changes the data the react components in the FinancialData.js it will be updated and resend to the endpoint */}
                <button className='updateForm' onClick={() => navigate('/FinancialData')}>Update Form</button>
            </section>
            <div className='asumBackground'>
            </div>
            <div className='twoc'>
                <div className='accountSummary'>
                    <h2 className='asumText'>Account Summary</h2>
                    <h4 className='aholdername'>Account Holder Name:</h4>
                    <div className="namebox">
                        <p className="namet"><b>Last Name, First Name</b></p>
                    </div>
                    <h4 className='balance'>Account Balance:</h4>
                    <div className="balancebox">
                        <p className="currbalt"><b>$0.00</b></p>
                    </div>
                    <h4 className='agetextasum'>Account Holder Age:</h4>
                    <div className="agebox">
                        <p className="curraget"><b>18 Years Old</b></p>
                    </div>
                    <h4 className='dagetextasum'>Desired Retirement Age:</h4>
                    <div className="dagebox">
                        <p className="daget"><b>65 Years Old</b></p>
                    </div>
                    <h3 className='tmbd'>This Month's Breakdown</h3>
                    <div className='tmbdcont'>
                        <p className="tmbdtext"><b>You are currently overspending! Consider eating out less to save money.</b></p>
                    </div>
                </div>
                <div className='graphcontainer'>
                    <h2 className='graphText'>Expected Return For Retirement</h2>
                    <div className='graphspace'>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AccountSummaryPage;