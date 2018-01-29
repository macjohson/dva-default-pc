import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import App from './routes/App';
import dynamic from 'dva/dynamic';
import routers from './config/routers';

const {ConnectedRouter} = routerRedux;

function RouterConfig({ history,app }) {
  return (
    <ConnectedRouter history={history}>
      <App>
      <Switch>
        {
            routers.map(({path,...dynamics},key)=>(
              <Route path={path} exact key={key} component={
                dynamic({
                  app,
                  ...dynamics
                })
              }/>
            ))
          }
      </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
