import React from 'react';
import './Toast.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const handleToast = () => {
        toast("Congratulation!You have Complete Activity..")
    }
    return (
        <div className='btn-Activity-complete'>
            <button onClick={handleToast} className='btn-complete'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;