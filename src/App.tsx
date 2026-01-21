import Header from './components/Header';
import Counter from './components/Counter';
import Settings from './pages/Settings';
import { useAppStore } from './store';

const App = () => {
  // Using selector to get theme for overall app styling
  const theme = useAppStore((state) => state.theme);
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        <Header />
        
        <main style={{ display: 'grid', gap: '2rem' }}>
          <div>
            <h2>Welcome to Zustand POC</h2>
            <p>
              This app demonstrates Zustand state management with sliced stores and selective re-renders.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <Counter />
            <Settings />
          </div>
          
          <div style={{
            padding: '1rem',
            backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f8f8',
            borderRadius: '8px',
            fontSize: '0.9rem',
          }}>
            <h3>Performance Notes:</h3>
            <ul style={{marginLeft: '1rem'}}>
              <li>Header only re-renders when storeName or theme changes</li>
              <li>Counter only re-renders when counter value changes</li>
              <li>Settings only re-renders when storeName or theme changes</li>
              <li>Each component uses selectors to subscribe to specific state slices</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;