import React from 'react';
import SidePanel from '../Components/SidePanel';
import "./css/students.css";
import studentsLargeIcon from "../assets/students-icon-large.svg";
import addIcon from "../assets/add-icon.svg";
import profileIcon from "../assets/profile-icon-small.svg";
import editIcon from "../assets/edit.svg";
import viewIcon from "../assets/view.svg";
import RightDrawer from '../Components/RightDrawer';

const Students = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="students-container">
      <SidePanel />
      <div className="students-main">
        <div className="students-header">
          <div className="students-title">
            <img src={studentsLargeIcon} alt="Students" />
            <h1>Students</h1>
          </div>
          <div onClick={handleClick} className="add-student-button">
            <img src={addIcon} alt="Add" />
            <h3>Add Student</h3>
          </div>
        </div>
        <div className="students-data-head">
          <p>ID</p>
          <p>Profile</p>
          <p>Name</p>
          <p>Course</p>
          <p>Password</p>
          <p>Edit</p>
          <p>View</p>
        </div>
        <div className="student-data">
          <p>1</p>
          <div className="profile-image">
            <img src={profileIcon} alt="Profile" />
          </div>
          <p>Abdullah</p>
          <p>Web And App</p>
          <p>1234567</p>
          <div className="view">
            <img src={editIcon} alt="Edit" />
          </div>
          <div className="edit">
            <img src={viewIcon} alt="View" />
          </div>
        </div>
      </div>
      <RightDrawer open={drawerOpen} onClose={handleCloseDrawer} />
    </div>
  );
}

export default Students;
