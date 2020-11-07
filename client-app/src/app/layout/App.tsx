import React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Route path="/activities" exact component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/createActivity', '/manage/:id']}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default withRouter(observer(App));
