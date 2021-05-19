import './App.css';
import {Switch, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Movies from "./pages/movies/Movies";
import MovieEdit from "./pages/movies/MovieEdit";
import Books from "./pages/books/Books";
import Persons from "./pages/persons/Persons";
import ModalProvider from "./contexts/ModalContext";
import Movies2 from "./pages/movies2/Movies2";


const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ModalProvider>
            <div className="App">
                    <Switch>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/movies/:id"} component={MovieEdit}/>
                        <Route path={"/movies2"} component={Movies2}/>
                        <Route path={"/movies"} component={Movies}/>
                        <Route path={"/books"} component={Books}/>
                        <Route path={"/persons"} component={Persons}/>
                        <Route path={"/"} component={Home}/>
                    </Switch>
            </div>
          </ModalProvider>
      </QueryClientProvider>
  );
}

export default App;