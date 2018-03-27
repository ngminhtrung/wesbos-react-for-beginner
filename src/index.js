import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';

const Root = () => {
  return(
    <div> 
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </Switch>
    </div>
  )
}

render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>, 
    document.querySelector('.container'));
