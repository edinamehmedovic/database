import React, {Suspense} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import ModalProvider from "./contexts/ModalContext";

const Login = React.lazy(() => import('./pages/login/Login'));
const Movies = React.lazy(() => import('./pages/movies/Movies'));
const MovieEdit = React.lazy(() => import('./pages/movies/MovieEdit'));
const Books = React.lazy(() => import('./pages/books/Books'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Persons = React.lazy(() => import('./pages/persons/Persons'));
const Movies2 = React.lazy(() => import('./pages/movies2/Movies2'));


const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          {/*<ReactQueryDevtools initialIsOpen={false} />*/}
          <ModalProvider>
            <div className="App">
                    <Switch>
                        <Route path={"/login"} component={() => <Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}/>
                        <Route path={"/movies/:id"} component={() => <Suspense fallback={<div>Loading...</div>}><MovieEdit/></Suspense>}/>
                        <Route path={"/movies2"} component={() => <Suspense fallback={<div>Loading...</div>}><Movies2/></Suspense>}/>
                        <Route path={"/movies"} component={() => <Suspense fallback={<div>Loading...</div>}><Movies/></Suspense>}/>
                        <Route path={"/books"} component={() => <Suspense fallback={<div>Loading...</div>}><Books/></Suspense>}/>
                        <Route path={"/persons"} component={() => <Suspense fallback={<div>Loading...</div>}><Persons/></Suspense>}/>
                        <Route path={"/"} component={() => <Suspense fallback={<div>Loading...</div>}><Home/></Suspense>}/>
                    </Switch>
            </div>
          </ModalProvider>
      </QueryClientProvider>
  );
}

export default App;