import React,{useState} from 'react'
import { toast  } from "react-toastify";
const FormData = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Reason: "",
    Email: "",
    Subject:''
  });

  const { Name, Reason, Email, Subject } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form
      // onSubmit={handleSubmit}
      className="form "
      action="https://formspree.io/f/xayzrjgl"
      method="POST"
    >
      <label>
        Full Name:
        <input
          type="text"
          name="Name"
          value={Name}
          onChange={handleChange}
          className="form_input"
        />
      </label>
      <label>
        Reason for contact:
        <input
          type="text"
          name="Reason"
          value={Reason}
          className="form_input"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="Email"
          className="form_input"
          value={Email}
          onChange={handleChange}
        />
      </label>
      <label>
        <p> Write on reason:</p>
        <div>
          <textarea
            name="Subject"
            id=""
            cols="23"
            rows="5"
            className="form_input textarea"
            value={Subject}
            onChange={handleChange}
          ></textarea>
        </div>
      </label>
      <button type="submit" className="p_btn"  onClick={()=> toast.success('Your Message has been succesfully submitted')}>
        Submit
      </button>
    </form>
  );
};

  


export default FormData
