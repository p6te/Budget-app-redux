import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="description"
          placeholder="New thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="value"
          placeholder="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
