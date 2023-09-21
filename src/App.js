import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

//componentes
import NavBar from "./components/nav-bar";


//páginas
import DashPage from "./pages/dash-page";
import WeatherChannel from './pages/weather-channel';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <DashPage />},
    { path: '/weather-update', element: <WeatherChannel />},
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent(){
  return(
  <div className='flex justify-between'>
    <NavBar />
    <AppRoutes />
  </div>
  )
}

export default App;
