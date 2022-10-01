import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelegram } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlnd362', 'template_9kwvc1m', form.current, 'Zsn6MiCroxal55rla')
    
    e.target.reset()
  };

  return (
    
    <section id='contact'>
      <h5>Fale comigo</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dev.marcioreis@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/> 
            <h4>Whatsapp</h4>
            <h5>(11) 99434-1245</h5>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/> 
            <h4>Telegram</h4>
            <h5>marcioreissantos</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="messege" rows="7" placeholder='Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>

  )
}

export default Contact