import { useState } from 'react';
import './Styles/SignUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birthday: '0',
    birthMonth: '0',
    birthYear: '0',
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
              <td>DATE OF BIRTH (DOB)</td>
              <td className="dob">
                <select
                  name="birthday"
                  required
                  value={formData.birthday}
                  onChange={handleChange}
                >
                  <option value="0">DAY</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="birthMonth"
                  required
                  value={formData.birthMonth}
                  onChange={handleChange}
                >
                  <option value="0">MONTH</option>
                  {[
                    'JAN',
                    'FEB',
                    'MAR',
                    'APR',
                    'MAY',
                    'JUN',
                    'JUL',
                    'AUG',
                    'SEP',
                    'OCT',
                    'NOV',
                    'DEC',
                  ].map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="birthYear"
                  required
                  value={formData.birthYear}
                  onChange={handleChange}
                >
                  <option value="0">YEAR</option>
                  {Array.from({ length: 25 }, (_, i) => (
                    <option key={i} value={2024 - i}>
                      {2024 - i}
                    </option>
                  ))}
                </select>
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
