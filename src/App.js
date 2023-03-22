
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import store from './utils/store';
import {Provider}  from 'react-redux';

function App() {
  return (
    <Provider store ={store}>
      <main>
    <div>
    <Header/>
    </div>
    <div className='flex'>
    <Sidebar />
    <Body/>
    </div>
  </main>

    </Provider>
  
   
  );
}

export default App;
