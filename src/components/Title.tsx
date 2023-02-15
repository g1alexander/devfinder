import { useStore } from "@nanostores/react";
import { darkMode } from "@store/state";
import "@styles/title.css";

const Title = () => {
  const isDarkMode = useStore(darkMode);

  const handleDarkMode = async () => {
    const darkTheme = "dark-theme";
    const lightTheme = "light-theme";
    await darkMode.set(true);

    document.body.classList.remove(lightTheme);
    document.body.classList.add(darkTheme);
    localStorage.setItem("theme", "dark");
  };

  const handleLightMode = async () => {
    const darkTheme = "dark-theme";
    const lightTheme = "light-theme";
    await darkMode.set(false);

    document.body.classList.remove(darkTheme);
    document.body.classList.add(lightTheme);
    localStorage.setItem("theme", "light");
  };

  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>

      <div className="header__button">
        {isDarkMode ? (
          <button onClick={handleLightMode}>
            <span>LIGHT</span>
            <img src="/icons/icon-sun.svg" alt="dark-mode" />
          </button>
        ) : (
          <button onClick={handleDarkMode}>
            <span>DARK</span>
            <img src="/icons/icon-moon.svg" alt="dark-mode" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Title;
