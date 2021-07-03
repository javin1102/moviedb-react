//26e53c79e6035b58b0922736b9a96231
//https://api.themoviedb.org/3/movie/550?api_key=26e53c79e6035b58b0922736b9a96231
//https://image.tmdb.org/t/p/original/[poster_path]

import { Route, Switch, BrowserRouter } from "react-router-dom";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
