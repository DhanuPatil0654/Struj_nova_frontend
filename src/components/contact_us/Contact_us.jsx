import React, { useState } from "react";
import "./contact.css";

import facebookIcon from "../../assets/icons/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/icons/insta.png";
import linkedinIcon from "../../assets/icons/icons/Group.png";
import whatsappIcon from "../../assets/icons/icons/logos_whatsapp-icon.png";
import mailIcon from "../../assets/icons/icons/mail.png";

// const GOOGLE_WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbxeNENB-ksqEXkTbmXyKO7xos-_H1rz0rVat_Oo7n_8sOYXTYbT4qMSxQpHh2CT-f_CJA/exec";

const GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx-cpokxvNppaa7AD8xMEAy48KZf6rUl0L7wG1edWP8iq6LPnv0Uv97GJ1944SfMqoK/exec"
const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Live validation
    setErrors((prev) => {
      const updated = { ...prev };

      // Name
      if (name === "name") {
        updated.name = value.trim() ? "" : "Name is required.";
      }

      // Email
      if (name === "email") {
        if (!value.trim()) {
          updated.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          updated.email = "Enter a valid email address.";
        } else {
          updated.email = "";
        }
      }

      // Mobile
      if (name === "mobile") {
        if (!value.trim()) {
          updated.mobile = "Mobile number is required.";
        } else if (!/^[0-9]{10}$/.test(value)) {
          updated.mobile = "Mobile number must be 10 digits.";
        } else {
          updated.mobile = "";
        }
      }

      // Subject
      if (name === "subject") {
        updated.subject = value.trim() ? "" : "Subject is required.";
      }

      // Message
      // Message
      if (name === "message") {
        if (!value.trim()) {
          updated.message = "Message is required.";
        } else if (value.length > 250) {
          updated.message = "Message cannot exceed 250 characters.";
        } else {
          updated.message = "";
        }
      }

      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter Name.";
    if (!formData.email.trim()) newErrors.email = "Please enter Email.";
    if (!formData.mobile.trim())
      newErrors.mobile = "Please enter Mobile number.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter Subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter Message.";
    if (formData.message.length > 250)
      newErrors.message = "Message cannot exceed 250 characters.";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    const mobilePattern = /^[0-9]{10}$/;
    if (formData.mobile && !mobilePattern.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {

      setLoading(true); // ✅ START LOADER


      // ✅ SEND DATA TO GOOGLE SHEET
      await fetch(GOOGLE_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // IMPORTANT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Form data sent to Google Sheets.");

      // ✅ SUCCESS UI
      setSuccessMessage("Thank you! Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSuccessMessage(""), 3000);

    } catch (error) {
      console.error("Form submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // ✅ STOP LOADER
    }
  };

  return (
    <section className="contact-section" data-aos="fade-up">
      <div className="container">
        <div className="contact-wrapper row">
          {/* LEFT FORM */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-form-box">
              <h2 className="contact-form-title">GET CHARGE WITH US</h2>
              <p className="contact-form-subtitle">
                Powering Your Goals with Smarter EV Solutions. Let’s Connect & Build
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <div className="half-inputs">
                  <div style={{ width: "100%" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>

                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <p className="error-message">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="error-message">{errors.subject}</p>
                )}

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <p
                  className={`char-count ${formData.message.length > 250 ? "exceeded" : ""
                    }`}
                >
                  {formData.message.length}/250
                </p>

                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? <span className="btn-loader"></span> : "Submit"}
                </button>


                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info">
              <h3>
                Your Connection to Smarter
                <br /> Electric Mobility Starts
                <br /> Here.
              </h3>
              <p>
                StrujNova is a fast-growing EV tech startup focused on building reliable, future-ready solutions in electric mobility.
                From intelligent power systems to advanced battery technology and smart charging infrastructure, we innovate to make clean mobility accessible for everyone.
                <br />
                Have questions about our EV products or services?
                Reach out to us — we’re here to guide you with the right solution.
              </p>

              <div className="info-row d-flex flex-wrap justify-content-between">
                <div className="info-block mb-3">
                  <h5>Our Address</h5>
                  <p className="mb-0">
                    Karvenagar, Pune-52 (411052),
                    Maharashtra, India
                  </p>
                </div>

                <div className="info-block mb-3">
                  <h5>Email</h5>
                  <p className="mb-0">
                    <a
                      href="mailto:info.strujnova@gmail.com"
                      className="email-link"
                    >
                      info.strujnova@gmail.com
                    </a>
                  </p>
                </div>

              </div>

              <div className="info-row d-flex flex-wrap justify-content-between align-items-start">
                <div className="info-block">
                  <h5>Social Network</h5>
                  <div className="social-icons d-flex gap-2 flex-wrap">
                    <a href="https://www.facebook.com/share/1G6w28Zra8/" target="_blank">
                      <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://www.instagram.com/strujnova_energy_official?igsh=MWp2bTVzamtxeGdwNw==" target="_blank">
                      <img
                        src={instaIcon}
                        alt="Instagram"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/strujnova-energy-401591388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                      <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://wa.me/918275108855" target="_blank">
                      <img
                        src={whatsappIcon}
                        alt="WhatsApp"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="mailto:info.strujnova@gmail.com">
                      <img
                        src={mailIcon}
                        alt="Mail"
                        className="social-icon-img"
                      />
                    </a>

                  </div>
                </div>

                <div className="info-block">
                  <h5>Contact</h5>
                  <p className="mb-0">
                    <a href="tel:+918275108855" className="phone-link">
                      (+91) 8275108855
                    </a>
                  </p>
                  {/* <p className="mb-0">
    <a href="tel:+919284020090" className="phone-link">
      +91 92840 20090
    </a>
  </p> */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
