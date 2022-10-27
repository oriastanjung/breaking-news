import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--blue-3)',
        color: 'white',
      }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &#169; {new Date().getFullYear()} Copyright O. Riastanjung
      </div>
    </footer>
  );
}

export default Footer;
