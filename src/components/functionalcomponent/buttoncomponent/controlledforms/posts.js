import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const AddPost = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    email:"",
    password:"",

   
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} /><br/><br/>
      </label>
      <br />
      <label>
        Body:
        <textarea name="body" value={formData.body} onChange={handleChange}></textarea>
      </label>
      <br/>
      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br/><br/>
      </label>
      <label>
        <br/>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br/><br/>
      </label>

      <br />
      <button type="submit">simple form</button>
    </form>
  );
};

export default AddPost;