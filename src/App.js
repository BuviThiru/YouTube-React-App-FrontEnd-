
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
  <main>
    <div>
    <Header/>
    </div>
    <div className='flex'>
    <Sidebar />
    <Body/>
    </div>
  </main>
   
  );
}

export default App;
