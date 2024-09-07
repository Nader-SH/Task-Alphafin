// import logo from './logo.svg';
import './App.css';
import { FaAccessibleIcon } from 'react-icons/fa';
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello, React + Tailwind!</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        <FaAccessibleIcon className="inline-block mr-2" /> Cheers!
      </button>
    </div>
  );
}

export default App;
