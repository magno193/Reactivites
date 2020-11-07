import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Item, Label } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  return (
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
          <Label basic content={activity.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default observer(ActivityListItem);
