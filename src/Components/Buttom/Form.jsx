import React,{useState} from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormData = () => {
  const data = [
    { name: "Name", type: "name" },
    { name: "Email", type: "Email" },
    { name: "Raeson for contact", type: "Reason" },
  ];

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


   const handleSubmit = (event) => {
     event.preventDefault();
     // Perform form submission or validation with the data
     console.log(formData);
   };

  return (
    <form onSubmit={handleSubmit} className="form">
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
          value={Subject}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit" className='p_btn'>Submit</button>
    </form>
    // <>
    //   <FloatingLabel
    //     controlId="floatingTextarea"
    //     label="Email address"
    //     className="mb-3"
    //   >
    //     <Form.Control
    //       type="text"
    //       // name="Name"
    //       // value={Name}
    //       // onChange={handleChange}
    //       // className=""
    //       // placeholder="name@example.com"
    //     />
    //   </FloatingLabel>
    //   <FloatingLabel
    //     controlId="floatingInput"
    //     label="Email address"
    //     className="mb-3"
    //   >
    //     <Form.Control
    //       type="email"
    //       placeholder="name@example.com"
    //       // name="Email"
    //       // className=""
    //       // value={Email}
    //       // onChange={handleChange}
    //     />
    //   </FloatingLabel>
    //   <FloatingLabel controlId="floatingPassword" label="Password">
    //     <Form.Control type="password" placeholder="Password" />
    //   </FloatingLabel>

    //   <button type="submit" className="p_btn">
    //     Submit
    //   </button>
    // </>
  );
};

  


export default FormData
