import { useState } from 'react';
import './Styles/SignUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    country: 'INDIA',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="signup-form-container">
      <div id="close-btn" className="fas fa-times"></div>

      <form onSubmit={handleSubmit}>
        <h3>SIGN UP</h3>
        <table>
          <tbody>
            <tr>
              <td>NAME</td>
              <td>
                <input
                  type="text"
                  name="name"
                  required
                  className="box1"
                  maxLength="30"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td>
                <input
                  type="email"
                  name="email"
                  required
                  className="box1"
                  maxLength="50"
                  placeholder="Enter your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>PHONE</td>
              <td>
                <input
                  type="text"
                  name="phone"
                  required
                  className="box1"
                  maxLength="10"
                  placeholder="Enter your Mobile no."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>GENDER</td>
              <td className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="MALE"
                  checked={formData.gender === 'MALE'}
                  onChange={handleChange}
                />{' '}
                MALE
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  checked={formData.gender === 'FEMALE'}
                  onChange={handleChange}
                />{' '}
                FEMALE
              </td>
            </tr>
            <tr>
              <td>COUNTRY</td>
              <td>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                  className="box1"
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input
                  type="password"
                  name="password"
                  required
                  className="box1"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>CONFIRM PASSWORD</td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="box1"
                  placeholder="RE-Enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" id="btn1" value="SUBMIT" className="btn1" />
        <button type="button" id="btn2" className="btn1" onClick={() => {/* Handle back button click */}}>
          BACK
        </button>
      </form>
    </div>
  );
};

export default SignUp;
