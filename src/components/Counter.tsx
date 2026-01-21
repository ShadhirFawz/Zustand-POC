import { useAppStore } from '../store';

const Counter = () => {
  // Select only counter and its actions
  const counter = useAppStore((state) => state.counter);
  const incrementCounter = useAppStore((state) => state.incrementCounter);
  const decrementCounter = useAppStore((state) => state.decrementCounter);
  const resetCounter = useAppStore((state) => state.resetCounter);
  
  console.log('Counter rendered');
  
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      maxWidth: '300px',
      margin: '1rem 0',
    }}>
      <h2>Counter Component</h2>
      <p>Count: <strong>{counter}</strong></p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
        This component only re-renders when counter changes
      </p>
    </div>
  );
};

export default Counter;