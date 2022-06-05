import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Loader from "../loader/Loader";
import Message from "../message/Message";

import "./contact.css";
import { useForm } from "../../hooks/useForm";

const initialFrom = {
  name: "",
  email: "",
  message: "",
};

const validationsFrom = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo Nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email solo es incorrecto";
  }
  if (!form.message.trim()) {
    errors.message = "El campo Mensaje es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "El campo Mensaje no debe exceder los 255 caracteres";
  }
  return errors;
};

const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    formSend,
  } = useForm(initialFrom, validationsFrom);

  return (
    <section id="contact">
      <h2 className="contact__title">Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a href="mailto:cesarfc0311@gmail.com">
            <HiOutlineMailOpen className="contact__option-icon" />
              </a>
          </article>
          <article className="contact__option">
            <a href="https://m.me/tEstO.TrancE" target="_blank">
            <RiMessengerLine className="contact__option-icon" />
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://api.whatsapp.com/send?phone=+525521956641"
              target="_blank"
            >
            <AiOutlineWhatsApp className="contact__option-icon" /> 
            </a>
          </article>
        </div>
        {/*End Contact Options*/}
        <form ref={formSend} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
          />
          {errors.name && <p className="contact__form-error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <p className="contact__form-error">{errors.email}</p>
          )}
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
          ></textarea>
          {errors.message && (
            <p className="contact__form-error">{errors.message}</p>
          )}
          {loading && <Loader />}
          {response && (
            <Message msg="Los datos han sido enviados" bgColor="#198754" />
          )}
          <button type="submit" className="btm btm-primary">
          Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
