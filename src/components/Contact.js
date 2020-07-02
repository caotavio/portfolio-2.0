import React from 'react';

function Contact() {
  return(
    <div id="contact" className="mx-auto w-full py-10 sm:w-3/4 lg:w-2/5">
      <h2 className="text-2xl text-center font-semibold">------- V. Get In Touch -------</h2>
      <div className="flex flex-col mt-10 text-center">
        <p>I bet that was a lot of info to take in huh? If you have any questions, want to show me new opportunities or even have a virtual coffee
          about web development or nerdy stuff just send me an email and I will get back to you asap. May the Force be with you.
        </p>
        <button className="mt-10 justify-center">Say "Hello There"</button>
      </div>
    </div>
  )
}

export default Contact;