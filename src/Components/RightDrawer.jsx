import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import dummyUser from "../assets/dummy-user.svg"
import uploadIcon from "../assets/upload-icon.svg"

export default function RightDrawer({ open, onClose }) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        course: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here

        // For example, you can log the form data to the console
        console.log(formData);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
            role="presentation"
            onClick={() => handleClose(anchor)}
            onKeyDown={() => handleClose(anchor)}
        >
            <div className="drawer-main">
                <div className="add-student-head-drawer">
                    <h1>Add Student</h1>
                    <div className="add-student-drawer">
                        <p>Add</p>
                    </div>
                </div>
                <div className="user-image">
                    <img src={dummyUser} alt="Profile" />
                    <div className="upload-icon">
                        <img src={uploadIcon} alt="Upload" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">Course:</label>
                        <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </Box>
    );
    const handleClose = (anchor) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        // Use the onClose prop to handle closing the drawer
        if (open) {
            // Only call onClose if the drawer is open
            onClose(anchor);
        }
    };

    return (
        <div className='none'>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={() => handleClose(anchor)}>{anchor}</Button>
                    <Drawer
                        anchor="right"
                        open={open}
                        onClose={handleClose(anchor)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
