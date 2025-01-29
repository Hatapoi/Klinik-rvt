import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <main className='h-screen'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  )
}

export default App;