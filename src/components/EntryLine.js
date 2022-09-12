import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({ description, value, isExpense = false }) {
  return (
    <Segment color={isExpense ? "red" : "green"}>
      <Grid textAlign="right" columns={3}>
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit"></Icon>
            <Icon name="trash"></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
