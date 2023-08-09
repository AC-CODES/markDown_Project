import DarkmodeSwitcher from "./DarkmodeSwitcher";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
      <h2>Expresate con estilo</h2>

      <DarkmodeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
};

export default Navbar;
