import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-warning">Contact Page</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input 
              type="text" 
              className="form-control"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea 
              className="form-control"
              rows="3"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      ) : (
        <div className="alert alert-success mt-3">
          Thank you, <strong>{name}</strong>! Your message has been received.
        </div>
      )}
    </div>
  );
}

export default Contact;
