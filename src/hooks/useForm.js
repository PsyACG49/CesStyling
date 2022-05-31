import {useState} from 'react'
import { useRef } from "react";
import emailjs from "emailjs-com";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const formSend = useRef();


  const handleChange = (e) => {
      const {name, value} = e.target
      setForm({
          ...form,
          [name]: value
      })
  }


  const handleBlur = (e) => {
      handleChange(e)
      setErrors(validateForm(form))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0){
      setLoading(true);
      emailjs.sendForm(
        "service_byyytxn",
        "template_z7zo6kx",
        formSend.current,
        "DBfgdWQoIHTrntc9z"
      );
      setTimeout(() => {
        setLoading(false)
        setResponse(true);
        setForm(initialForm);
      }, 3000);
      setTimeout(() => setResponse(false), 5000);

    }else{
      return
    }
    
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    formSend
  };
}
