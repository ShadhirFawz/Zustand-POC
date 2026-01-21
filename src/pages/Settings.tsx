import { useAppStore } from '../store';
import { useState } from 'react';

const Settings = () => {
  const [inputValue, setInputValue] = useState('');
  
  // Select specific pieces of state to avoid unnecessary re-renders
  const storeName = useAppStore((state) => state.storeName);
  const updateStoreName = useAppStore((state) => state.updateStoreName);
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  
  console.log('Settings rendered');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      updateStoreName(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <div style={{
      padding: '2rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      maxWidth: '500px',
      justifyItems: 'center',
    }}>
      <h2>Settings</h2>
      
      <div style={{ marginBottom: '2rem', justifyItems: 'center' }}>
        <h3>Store Name</h3>
        <p>Current name: <strong>{storeName}</strong></p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', justifyItems: 'center', marginTop: '3rem' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter new store name"
            style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}
          />
          <button type="submit" style={{fontSize: '10px'}}>Update Name</button>
        </form>
      </div>
      
      <div style={{justifyItems: 'center'}}>
        <h3>Theme Settings</h3>
        <p>Current theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme} style={{marginTop: '3rem'}}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default Settings;