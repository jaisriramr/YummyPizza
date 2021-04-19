import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Home from './Screen/Home/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
