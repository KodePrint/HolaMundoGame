import { useState } from 'react';
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Layout from '../containers/Layout';
// Import Pages
import Home from '../pages/Home';
import PrincipalStage from '../pages/PrincipalStage';
import LevelOne from '../pages/LevelOne';
import useInitialState from '../hooks/useInitialState';
import TheGameContext from '../context/TheGameContext';

const App = () => {
  const initialState = useInitialState();

  return (
    <TheGameContext.Provider value={initialState}>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='principal-stage/' element={<PrincipalStage/>} />
              <Route exact path='level-one/' element={<LevelOne/>} />
              <Route exact path='principal-stage/' element={<PrincipalStage/>} />
              <Route exact path='principal-stage/' element={<PrincipalStage/>} />
              <Route path='*' element={<h1>Not found</h1>}/>
            </Routes>
          </Layout>
      </BrowserRouter>
    </TheGameContext.Provider>
  );
}

export default App;
