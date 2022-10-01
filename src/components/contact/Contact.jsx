import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelegram } from 'react-icons/bs'

const Contact = () => {
  return (
    
    <section id='contact'>
      <h5>Fale comigo</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <h4><MdEmail /> Email</h4>
            <h5>dev.marcioreis@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <h4><RiWhatsappFill /> Whatsapp</h4>
            <h5>(11) 99434-1245</h5>
          </article>
          <article className='contact__option'>
            <h4><BsTelegram /> Telegram</h4>
            <h5>marcioreissantos</h5>
          </article>
        </div>
        <form action="">
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