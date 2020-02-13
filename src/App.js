import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import { RecipeProvider } from './Store/RecipeProvider';
import Main from './components/Main/Main';
import NotFound from './components/Error/PageNotFound';
import Recipe from './components/Main/Recipe/Recipe';
import Shop from './components/Main/Shop/Shop';


const App = () => {

  return (
    <Router>
      <AppBox>
        <RecipeProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/recipe' component={Recipe} />
            <Route path='/shop' component={Shop} />
            <Route component={NotFound} />
          </Switch>
        </RecipeProvider>
      </AppBox>
    </Router>
  );
}

export default App;

const AppBox = styled.div`
height: 100%;
width: 100%;
background-color: #EEE2DC;
display: flex;
overflow: auto;
`;