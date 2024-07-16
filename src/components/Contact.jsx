export const Contact = () => {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type='text' placeholder='Full Name' required/>
        <input type='text' placeholder='Type Your Emial' required/>
        <textarea name='' id='' placeholder='Write here your message'></textarea>
        <input type='submit' value='Send'/>
      </form>
    </div>
  )
}
