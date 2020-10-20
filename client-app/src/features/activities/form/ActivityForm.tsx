import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  submitting: boolean;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initalFormState,
  createActivity,
  editActivity,
  submitting,
}) => {
  const initializeForm = () => {
    if (initalFormState) {
      return initalFormState;
    }
    return {
      id: '',
      title: '',
      description: '',
      category: '',
      date: '',
      city: '',
      venue: '',
    };
  };
  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () => {
    if (initalFormState) {
      editActivity(activity);
    } else {
      const newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name="description"
          rows={2}
          placeholder="Description"
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name="category"
          placeholder="Category"
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name="date"
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          name="city"
          placeholder="City"
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name="venue"
          placeholder="Venue"
          value={activity.venue}
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
