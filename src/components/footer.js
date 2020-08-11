import React from 'react';
import LinkedinButton from './icons/LinkedinButton';
import GithubButton from './icons/GithubButton';

function Footer() {
  return(
    <footer className="font-mono px-6 py-5 justify-center text-center">
      <p className="text-md text-white font-semibold">
        Built from scratch by Tav the Dev
      </p>
      <div className ="mt-4">
        <LinkedinButton />
        <button>
          <a className="text-lightsaberlight hover:text-matrix2" href="https://github.com/caotavio">
            <GithubButton />
          </a>
        </button>
      </div>
    </footer>
  )
}

export default Footer;