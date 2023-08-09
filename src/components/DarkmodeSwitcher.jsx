const DarkmodeSwitcher = ({ toggleDarkMode }) => {
  return (
    <label>
      <input type="checkbox" onClick={toggleDarkMode} />
      <span className="check"></span>
    </label>
  );
};

export default DarkmodeSwitcher;
