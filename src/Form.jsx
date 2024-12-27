
// import React, { useState } from 'react'
// import './Form.css'


// function Form() {

// const[values ,setValues] =useState({
//   firstname: '',
//   lastname:'',
//   email:'',
//   datebirth:'',
//   address:'',
//   course:'',
//   gender:'',

// })
// const handleChange =(e)=>{
//     setValues({...values,[e.target.name]:[e.target.value]})
// }
// const handleSubmit =(e) =>{
//   e.preventDefault()
//   console.log(values);
  
// }
// const Reset =() =>{
//   setValues({firstname: '',lastname : '', email: ''})
// }

//   return (
//     <div class="main">

//       <div className="in">
//         <h3 className='main-head'>Student Registration form</h3>
//         <form onSubmit={handleSubmit} >

//           <label htmlFor="firstname">FirstName</label>
//           <input type="text" placeholder='Enter First Name ' name='firstname'
//           onChange={(e)=>handleChange(e)} required value={values.firstname}/>


//           <label htmlFor="lasttname">LastName</label>
//           <input type="text" placeholder='Enter Last Name ' name='lastname'  onChange={(e)=>handleChange(e)} required   value={values.lastname}/>

//           <label htmlFor="email">Email</label>
//           <input type="email" placeholder='Enter Your Email ' name='email'  onChange={(e)=>handleChange(e)} required  value={values.email} />

//           <label htmlFor="datebirth">Date of Birth</label>
//           <input type="date" name='datebirth'  onChange={(e)=>handleChange(e)} required/>

//           <label htmlFor="address">Address</label>
//           <textarea name="address" id="address" placeholder='Your Address' onChange={(e)=>handleChange(e) } required  value={values.address}></textarea>


//           <label htmlFor="gender">Gender</label>
//           <input type="radio" name='gender'  onChange={(e)=>handleChange(e)}/>Male
//           <input type="radio" name='gender'  onChange={(e)=>handleChange(e)} />Female
//           <input type="radio" name='gender' onChange={(e)=>handleChange(e)} />Other


//           <label htmlFor="course">Course</label>
//           <select name="course" id="course"  onChange={(e)=>handleChange(e)} required>
//             <option value="hidden">Select</option>
//             <option value="computerseince">Computer Seince</option>
//             <option value="commerce">Commerce</option>
//             <option value="biology">Biology</option>
//             <option value="humanities">humanities</option>
            
//           </select>
//            <br />
//           <button type="button" onClick={Reset}>Reset</button>
//           <button type="submit">Submit</button>

//         </form>
//       </div>

//     </div>
//   )
// }
// //
// export default Form

import React, { useState } from 'react';
import './Form.css';
import { Modal, Button } from 'react-bootstrap'; 

function Form() {
  const [values, setValues] = useState({
    firstname: '',
    mobile: '', 
    email: '',
    datebirth: '',
    address: '',
    course: '',
    gender: '',
  });

  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  const Reset = () => {
    setValues({
      firstname: '',
      mobile: '', 
      email: '',
      datebirth: '',
      address: '',
      course: '',
      gender: '',
    });
  };

  return (
    <div className="main">
      <div className="in">
        <h3 className="main-head">Student Registration form</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            onChange={handleChange}
            required
            value={values.firstname}
          />

          <label htmlFor="mobile">Mobile Number</label> 
          <input
            type="tel" 
            placeholder="Enter Mobile Number"
            name="mobile"  
            onChange={handleChange}
            required
            value={values.mobile}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            required
            value={values.email}
          />

          <label htmlFor="datebirth">Date of Birth</label>
          <input
            type="date"
            name="datebirth"
            onChange={handleChange}
            required
            value={values.datebirth}
          />
          <br />
          <textarea
            name="address"
            id="address"
            placeholder="Your Address"
            onChange={handleChange}
            required
            value={values.address}
          ></textarea>

          <label htmlFor="gender">Gender</label>
          <input class="mm"
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={values.gender === 'Male'}
          />
        Male
          <input  class="mm"
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={values.gender === 'Female'}
          />
          Female
          
          <label htmlFor="course">Course</label>
          <select
            name="course"
            id="course"
            onChange={handleChange}
            required
            value={values.course}
          >
            <option value="hidden">Select</option>
            <option value="computerscience">Computer Science</option>
            <option value="commerce">Commerce</option>
            <option value="biology">Biology</option>
            <option value="humanities">Humanities</option>
          </select>
          <br />
          <button id='btn' type="button" onClick={Reset}>Reset</button>
          <button type="submit">Submit</button>
        </form>
      </div>

      
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>First Name:{values.firstname}</p>
          <p>Mobile Number:{values.mobile}</p> 
          <p>Email: {values.email}</p>
          <p>Date of Birth: {values.datebirth}</p>
          <p>Address: {values.address}</p>
          <p>Gender: {values.gender}</p>
          <p>Course: {values.course}</p>
        </Modal.Body>
       
      </Modal>
    </div>
  );
}

export default Form;
