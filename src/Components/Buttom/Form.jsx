import React,{useState} from 'react'

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


  //  const handleSubmit = (event) => {
    
  //    console.log(formData);
  //  };

  return (
    <form
      // onSubmit={handleSubmit}
      className="form"
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
        Raeson for contact:
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
        <textarea
          name="Subject"
          id=""
          cols="23"
          rows="5"
          className="form_input"
          value={Subject}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit" className="p_btn">
        Submit
      </button>
    </form>
   
  );
};

  


export default FormData
