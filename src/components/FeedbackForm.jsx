import { useState } from "react";
import "../App.css";

export default function FeedbackForm() {
  // Set up state using a single formData object to hold user's name, email, and feedback
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // Handle input changes for all form fields with a single function
  const handleChange = (event) => {
    // set your formData -- don't forget about your friend the spread operator
  };

  // Calculate remaining characters for the feedback textarea
  const maxChars = 200;
  const remainingCharacters = 0; // update this

  // Check if any field is empty to enable/disable the submit button
  // assignment below is wrong
  const isFormComplete = formData.name == "test";

  ``;
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form-container">
        <h2>Feedback Form</h2>
        <form className="feedback-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
            <div className="char-count">
              {remainingCharacters} characters remaining
            </div>
          </label>
          {/* Add a click event for submit */}
          <button type="submit" disabled={!isFormComplete}>
            Submit
          </button>
        </form>
      </div>

      {/* Generate a preview container that displays the form values in real time */}
      <div className="preview-container">
        <h2>Preview</h2>
        <div className="preview-content">
          <p>Your form data should be mirrored here</p>
        </div>
      </div>
    </div>
  );
}
