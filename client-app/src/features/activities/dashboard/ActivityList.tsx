import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, Item, Label, Segment } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityList: React.FC = () => {
  const {
    selectActivity,
    activitiesByDate,
    deleteActivity,
    submitting,
    target,
  } = useContext(ActivityStore);
  return (
    <Segment clearing>
      <Item.Group divided>
        {activitiesByDate.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  color="blue"
                  content="View"
                  floated="right"
                  as={Link}
                  to={`/activities/${activity.id}`}
                />
                <Button
                  name={activity.id}
                  loading={target === activity.id && submitting}
                  onClick={event => deleteActivity(event, activity.id)}
                  color="red"
                  content="Delete"
                  floated="right"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
