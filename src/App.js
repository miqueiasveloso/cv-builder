import { useState } from 'react';
import './styles/styles.css';
import swal from 'sweetalert';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    institution: '',
    course: '',
    year: '',
    company: '',
    job: '',
    experience: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    swal(JSON.stringify(`Full Name: ${formData.name}, E-mail: ${formData.email}, Telephone: ${formData.telephone}, Institution: ${formData.institution}, Course Name: ${formData.course}, Year of Graduation: ${formData.year}, Company Name: ${formData.company}, Job Position: ${formData.job}, Years of Experience: ${formData.experience}`));
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="cv-form"
      >
        <input
          name="name"
          className="form-field"
          placeholder="Full Name..."
          value={formData.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="email"
          className="form-field"
          placeholder="E-mail Address..."
          value={formData.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="telephone"
          className="form-field"
          placeholder="Telephone Number..."
          value={formData.telephone}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="institution"
          className="form-field"
          placeholder="Institution's Name..."
          value={formData.institution}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="course"
          className="form-field"
          placeholder="Course's Name..."
          value={formData.course}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="year"
          className="form-field"
          placeholder="Year of Graduation..."
          value={formData.year}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="company"
          className="form-field"
          placeholder="Company's Name..."
          value={formData.company}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="job"
          className="form-field"
          placeholder="Job Position..."
          value={formData.job}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="experience"
          className="form-field"
          placeholder="Years of Experience..."
          value={formData.experience}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="Submit CV!" />
      </form>
    </div>
  );
}


export default App;