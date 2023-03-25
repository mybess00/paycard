import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ConfigFile from './paycard-config.json';
import { ToastContainer } from 'react-toastify';
import PayCard from './components/PayCard';
import UserInfo from './layout/UserInfo';

function App() {
  return (
    <div className="App">
      <UserInfo userConfig={ConfigFile.User}/>
      <div className='grid grid-cols-5 gap-3 lg:grid-cols-4 phone:grid-cols-2 mx-[12%] phone:mx-3 auto-rows-max mt-6'>
        {
          ConfigFile.PayData.map((element, index) => {
            return <PayCard
                    id={`${index}${element.id}`}
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
