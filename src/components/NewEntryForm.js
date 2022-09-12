import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <Form unstackable>
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
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
      />
    </Form>
  );
}

export default NewEntryForm;
