import { useAppStore } from '../store';

const Header = () => {
  // Using selectors to prevent unnecessary re-renders
  const storeName = useAppStore((state) => state.storeName);
  const theme = useAppStore((state) => state.theme);
  
  console.log('Header rendered');
  
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
      color: theme === 'dark' ? '#fff' : '#000',
      marginBottom: '2rem',
      borderBottom: `1px solid ${theme === 'dark' ? '#555' : '#ddd'}`,
    }}>
      <h1>{storeName}</h1>
      <p>Current Theme: {theme}</p>
    </header>
  );
};

export default Header;