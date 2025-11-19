
import './NavBar.css';

export default function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">MovieSearch</h1>
      <div className="nav-links">
        <button onClick={() => scrollToSection('hero')} className="nav-button">Home</button>
        <button onClick={() => scrollToSection('movies')} className="nav-button">Browse</button>
      </div>
    </nav>
  );
}