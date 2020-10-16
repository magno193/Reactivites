import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'
import { ActivityList } from './ActivityList'

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  activity: IActivity | null;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  activity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {activity && <ActivityDetails activity={activity} />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard
