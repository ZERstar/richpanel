// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication method
// import { auth } from './firebase'; // Update the import path based on your Firebase configuration
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     rememberMe: false,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: fieldValue,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Use Firebase authentication method to create a new user
//       await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//       // If successful, navigate to the login page
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       // Handle error, display error message to the user, etc.
//     }
//   };

//   return (
//     <div className='regcontain'>
//       <div className="container">
//         <h2>Create Account</h2>
//         <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//           {/* First Name input */}
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* Email input */}
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* Password input */}
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* Remember Me checkbox */}
//           <div className="form-group remember-me" style={{ marginTop: 15, display: 'flex', alignItems: 'center' }}>
//             <input
//               type="checkbox"
//               id="rememberMe"
//               name="rememberMe"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//             />
//             <label htmlFor="rememberMe" style={{ marginLeft: 5 }}>Remember Me</label>
//           </div>
//           {/* Submit button */}
//           <div className="form-group" style={{ textAlign: 'center', marginTop: 50 }}>
//             <button type="submit">SignUp</button>
//           </div>
//         </form>
//         {/* Login link */}
//         <div className="login-link" style={{ textAlign: 'center', marginTop: 50 }}>
//           <p style={{ fontSize: 12 }}>Already have an account? <a href="/login" style={{ color: 'blue', textDecoration: 'none' }}>Login</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // Show a success notification
      toast.success('Registration successful! You can now log in.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.message);

      // Check if the error is due to an existing account
      if (error.code === 'auth/email-already-in-use') {
        toast.error('An account with this email already exists. Please log in.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Registration failed. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

return (
  <div className='regcontain'>
    <div className="container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {/* First Name input */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Password input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Remember Me checkbox */}
        <div className="form-group remember-me" style={{ marginTop: 15, display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe" style={{ marginLeft: 5 }}>Remember Me</label>
        </div>
        {/* Submit button */}
        <div className="form-group" style={{ textAlign: 'center', marginTop: 50 }}>
          <button type="submit">SignUp</button>
        </div>
      </form>
      {/* Login link */}
      <div className="login-link" style={{ textAlign: 'center', marginTop: 50 }}>
        <p style={{ fontSize: 12 }}>Already have an account? <a href="/login" style={{ color: 'blue', textDecoration: 'none' }}>Login</a></p>
      </div>
    </div>
  </div>
);
};

export default Register;