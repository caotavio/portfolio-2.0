import React from 'react';
import LinkedinButton from './LinkedinButton';
import GithubButton from './GithubButton';

function Footer() {
  return(
    <footer className="font-mono px-6 py-5 justify-center text-center">
      <p className="text-md text-white font-semibold">
        Built from scratch by Tav the Dev
      </p>
      <div className ="mt-4">
        <LinkedinButton />
        <GithubButton />
      </div>
    </footer>
  )
}

export default Footer;