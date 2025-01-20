import Home from './component/Home';
import Sidebar from './component/Sidebar';

function App() {

  return (
    <main className='h-screen'>
      <div className='h-full flex'>
        <Sidebar />
        <Home />
      </div>
    </main>
  )
}

export default App;