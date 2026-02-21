import submitForm from './submitForm.js';

export default function ContactFormAnswer() {
  return (
    <div className="page">
      <form
        action='https://questions.greatfrontend.com/api/questions/contact-form'
        method='post'
        onSubmit={submitForm}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='name' required/>
          </div>
          <div>
              <label htmlFor="name">Email</label>
            <input type="email" name='email' placeholder='email' required/>
            </div>
            <div>
            <label htmlFor="name">Message</label> 
          </div> 
        <textarea name="message" placeholder='message' required/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
