import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Router/Router';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div data-theme="light" className="max-w-[1440px] mx-auto bg-light">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
