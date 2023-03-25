import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import PayCard from './components/PayCard';
import ConfigFile from './paycard-config.json';
import { ToastContainer } from 'react-toastify';
import Modal from './components/Modal';


function App() {
  return (
    <div className="App">
      <div className='grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mx-[7%] md:mx-1 sm:mx-1 auto-rows-max'>
        {
          ConfigFile.PayData.map((element, index) => {
            return <PayCard
                    id={index}
                    name={element.name}
                    content={element.content}
                    style={element.style}
                    />
          })
        }
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
