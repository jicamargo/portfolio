import React, { useState, useEffect } from 'react';
import '../css/ContactMe.css';

const ContactMe = () => {
  const contactFormAction = "https://formspree.io/f/xoqzkbpj"; // URL to send the form data

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    msg: '',
  });

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  const saveInfo = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errMsg = '';

    if (!userInfo.name) {
      errMsg += 'name, ';
    }

    if (!userInfo.email) {
      errMsg += 'email, ';
    } else if (!userInfo.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errMsg += 'valid email, ';
    }

    if (!userInfo.msg) {
      errMsg += 'message, ';
    }

    if (errMsg === '') {
      // Send the form data
      showErrorMsg('Sending your message...');
      saveInfo();
      try {
        const response = await fetch(contactFormAction, {
          method: 'POST',
          body: JSON.stringify(userInfo),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          showErrorMsg('Your message has been sent!', true);
        } else {
          showErrorMsg('Failed to send your message. Please try again later.', false);
        }
      } catch (error) {
        showErrorMsg('Failed to send your message. Please try again later.', false);
      }
    } else {
      errMsg = `Please enter your ${errMsg.slice(0, -2)}.`;
      showErrorMsg(errMsg, false);
    }
  };

  const showErrorMsg = (message, success) => {
    const msgElement = document.querySelector('.lblErrorMsgGral');
    msgElement.innerText = message;
    msgElement.style.color = success ? 'darkgreen' : 'red';
  };

  return (
    <section id="contact" className="contact_cnt">
      <div className="grid_text">
        <div className="ContactDescript">
          I'm always interested in hearing about new projects, so if you'd like to chat, please get in touch.
        </div>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form_input_fields">
          <div className="field">
            <input
              className="input_field"
              type="text"
              name="name"
              placeholder="Full name"
              value={userInfo.name}
              maxLength="30"
              onChange={handleInputChange}
            />
            <label className="lblErrorMsg"></label>
          </div>
          <div className="field">
            <input
              className="input_field"
              type="email"
              name="email"
              placeholder="Email address"
              value={userInfo.email}
              onChange={handleInputChange}
            />
            <label className="lblErrorMsg"></label>
          </div>
          <div className="field">
            <textarea
              className="text_area"
              name="msg"
              placeholder="Write me something"
              value={userInfo.msg}
              maxLength="500"
              onChange={handleInputChange}
            />
            <label className="lblErrorMsg"></label>
          </div>
          <div className="lblmsg_cnt">
            <label className="lblErrorMsgGral"></label>
            <input className="SeeProjectBtn BtnClass project_btn_submit" type="submit" name="btnsubmit" value="Get in touch" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
