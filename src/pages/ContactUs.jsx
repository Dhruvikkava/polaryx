import React, { useState } from "react";
import { Card, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

import ScrollToTop from "../components/ScrollToTop";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ContactImg from "../images/contact-us.png";

const ContactUs = () => {
  const defaultData = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(structuredClone(defaultData));
  const [isMobile] = useState(window.innerWidth < 767);

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {
      fullName: formData.fullName.trim() === "",
      email: formData.email.trim() === "",
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      const formSubmitUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSczhWbDuxkPnrUZZD3IPGkAsMSiyUZekbwwXKOgt8yE-PstBg/formResponse";
      const form = new FormData();
      form.append("entry.1800323269", formData.fullName);
      form.append("entry.1105260874", formData.email);
      form.append("entry.133278420", formData.subject);
      form.append("entry.863539681", formData.message);

      await fetch(formSubmitUrl, {
        method: "POST",
        body: form,
        mode: "no-cors",
      })
        .then(() => toast.success("Form submitted successfully!"))
        .catch((err) => console.error("Error:", err));
      setFormData(defaultData);
    }
  };

  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Custombanner name="Contact Us" heading={"Contact Us"} />
      <div className="container mt-5 mt-lg-5 mt-xl-6 pb-0 pb-lg-3 pb-xl-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={ContactImg}
              alt="contact-us"
              className="w-75 mb-3 mb-md-3 mb-lg-0"
            />
          </div>
          <div className="col-md-6 px-4">
            <Card
              className="px-4 py-3 m-0"
              sx={{ boxShadow: 3, borderRadius: 2 }}
            >
              <h4 className="color-primary font-weight-600 mb-3">
                Get In Touch
              </h4>
              <Typography variant="body2">
                Reach out for inquiries, quotes, or collaborations!
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={errors.fullName}
                  size={isMobile ? "small" : "medium"}
                  helperText={errors.fullName ? "Full Name is required" : ""}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={errors.email}
                  size={isMobile ? "small" : "medium"}
                  helperText={errors.email ? "Email is required" : ""}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={errors.subject}
                  size={isMobile ? "small" : "medium"}
                  helperText={errors.subject ? "Subject is required" : ""}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  error={errors.message}
                  size={isMobile ? "small" : "medium"}
                  helperText={errors.message ? "Message is required" : ""}
                />
                <button
                  className="hero-button d-flex justify-content-center align-items-center my-2 ms-auto"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
