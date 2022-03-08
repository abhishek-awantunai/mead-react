import './App.scss';
import useLocalStorage from './custom-hooks/useLocalStorageHook';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="App">
      <h1>App Page</h1>
      <input type="text" placeholder="Enter name re baba" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
