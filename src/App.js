import './App.css';
import ApplicationBar from './components/layout/ApplicationBar';
import ApplicationLayout from './components/layout/ApplicationLayout';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footer';


function App() {
  return ( 
  <div className = "App">
    <ApplicationLayout>
     <ApplicationBar title="Starwars Characters">

     </ApplicationBar>
     <Dashboard/>
     <Footer/>
    </ApplicationLayout>
   
    </div>
  );
}

export default App;