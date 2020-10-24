import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useContext } from 'react';

import { Button, Item, Label, Segment } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';

interface IProps {
  deleteActivity: (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string,
  ) => void;
  target: string;
  submitting: boolean;
}

const ActivityList: React.FC<IProps> = ({
  deleteActivity,
  submitting,
  target,
}) => {
  const { selectActivity, activitiesByDate } = useContext(ActivityStore);
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
                  onClick={() => selectActivity(activity.id)}
                  color="blue"
                  content="View"
                  floated="right"
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
