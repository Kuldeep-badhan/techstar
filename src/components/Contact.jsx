import React, {useEffect} from 'react'

const Contact = () => {

    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 60, left: 0, behavior: 'auto'});
    }, []);
 
  
  return (
    <div className='contact'>
      <div>
        <h1>Contact Us</h1>
        <form >
            <div>
                <label > Name</label>
                <input type="text" required placeholder='abc'/>
            </div>
            <div>
                <label > Email</label>
                <input type="email" required placeholder='abc@xyz.com'/>
            </div>
            <div>
                <label >Message</label>
                <input type="text" required placeholder='tell us about your query...'/>
            </div>
            <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
