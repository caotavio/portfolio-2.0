import React from 'react';

function Contact() {
  return(
    <div id="contact" className="mx-auto py-20 sm:py-48 w-full my-auto sm:w-3/4 lg:w-2/5">
      <h2 className="divider-center text-lg sm:text-2xl text-center font-semibold text-lightsaberlight">V. Get In Touch</h2>
      <div className="flex flex-col mt-16 text-center text-lg">
        <p>If you have any questions, want to show me new opportunities or even have a virtual coffee with me so we can talk
          about <span className="text-lightsaberlight">web development</span> <span className="text-gray-200">(or nerdy stuff)</span>,
          just send me an email and I will get back to you asap. May the Force be with you.
        </p>
        <a className="cursor-default" href="mailto:otavio.araujodev@gmail.com?subject=Greetings%20from&body=Hello%20there%20Otavio">
          <button className="mx-auto mt-20 text-center py-3 px-6 font-semibold tracking-wider text-lightsaberlight hover:bg-lightsaberlight hover:text-main border-2 rounded-sm border-lightsaberlight transition ease-in duration-300">Say "Hello There"</button>
        </a>
      </div>
    </div>
  )
}

export default Contact;