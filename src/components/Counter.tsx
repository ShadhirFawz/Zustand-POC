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
      maxWidth: '400px',
      margin: '1rem 0',
      justifyItems: 'center',
      alignItems: 'center',
    }}>
      <h2>Counter Component</h2>
      <div style={{marginTop: '5rem', fontSize: '2rem'}}>
        <p>
            Count: <strong>{counter}</strong>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', justifyContent: 'center' }}>
        <button onClick={incrementCounter}>&#43;</button>
        <button onClick={decrementCounter}>&#8722;</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;