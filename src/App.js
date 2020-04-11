import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz'
import {Switch, Route, Redirect} from "react-router-dom";
import QuizList from "./pages/QuizList/QuizList";
import Auth from "./pages/Auth/Auth";
import QuizCreator from "./pages/QuizCreator/QuizCreator";

function App() {
  return (
   <Layout>
       {/* Routing */}
       <Switch>
           <Route path="/" exact component={QuizList}/>
           <Route path="/auth" exact component={Auth}/>
           <Route path="/quiz-creator" exact component={QuizCreator}/>
           <Route path="/quiz/:id" exact component={Quiz}/>
           <Redirect to="/" />
       </Switch>
   </Layout>
  );
}

export default App;
