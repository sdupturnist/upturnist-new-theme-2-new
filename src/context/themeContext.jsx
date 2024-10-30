import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Function to get the initial theme from localStorage or default to 'light'
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : 'light'; // Default to 'light'
      } catch (error) {
        console.error('Failed to parse theme from localStorage', error);
        return 'light'; // Default to 'light' in case of error
      }
    }
    return 'light'; // Default to 'light' if window is not available
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Effect to apply the theme class to the <html> element
  useEffect(() => {
    const htmlElement = document.body;

    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    }

    // Save the theme to localStorage
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
