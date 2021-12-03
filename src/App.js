import PostsPage from "./pages/PostsPage/PostsPage";
import styles from './App.module.css';
import PostPage from "./pages/PostPage/PostPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path={"/"}>
                  <PostsPage/>
              </Route>
              <Route path={"/post"}>
                  <PostPage/>
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
