import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Router/Router';
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="light" className="max-w-[1440px] mx-auto bg-light">
      <RouterProvider router = {router}/>
      <Toaster/>
    </div>
  );
}

export default App;
