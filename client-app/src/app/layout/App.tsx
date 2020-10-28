import React, { useEffect, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import HomePage from '../../features/home/HomePage';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route path="/" exact component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" exact component={ActivityDetails} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </>
  );
};

export default observer(App);
