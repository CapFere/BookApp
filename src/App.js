import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Loader from 'react-loaders';
import BookSectionPage from './components/pages/book-section';
import PageNotFound from './components/pages/page-not-found'
import BookDetailPage from './components/pages/book-detail';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={BookSectionPage} exact/>
          <Route path='/books/catagory/:catagoryName' exact render={props=>{
            let {catagoryName}=props.match.params;
            return(<BookSectionPage catagoryName={catagoryName}/>)
          }}/>
          <Route path='/book/:bookID' exact render={props=>{
            let {bookID}=props.match.params;
            return(<BookDetailPage bookID={bookID}/>)
          }}/>
          <Route  component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
