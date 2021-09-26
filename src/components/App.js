import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import '../contexts/AuthContext';
import AuthProvider from '../contexts/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';

function App() {
  return (
   <Router>
     <AuthProvider>
   <Layout>
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/signup' component={SignUp} />
       <Route exact path='/login' component={LogIn} />
       <Route exact path='/quiz' component={Quiz} />
       <Route exact path='/result' component={Result} />
      </Switch>
   </Layout>
   </AuthProvider>
   </Router>
    
  );
}
export default App;
