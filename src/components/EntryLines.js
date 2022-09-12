import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry }) {
  return (
    <Container>
      {" "}
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} deleteEntry={deleteEntry} />
      ))}
    </Container>
  );
}

export default EntryLines;
