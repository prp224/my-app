import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <button onClick={() => scrollToSection('about')}>About me</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('education')}>Education</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('work')}>Work</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('hobbies')}>Hobbies</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
