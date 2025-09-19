import React, { useState } from "react";

function App() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Registration Form</h1>
      
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ margin: "10px 0" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "6px", width: "200px" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "6px", width: "200px" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: "6px", width: "200px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px", fontSize: "16px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
