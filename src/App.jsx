import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Movie, MovieDetail } from './pages'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        {/* 라우팅 */}
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/movie/:name" component={MovieDetail}/>
          <Route path="/movie" component={Movie}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
