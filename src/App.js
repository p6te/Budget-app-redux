import {
  Container,
  Statistic,
  Header,
  Segment,
  Grid,
  Icon,
  Form,
  Button,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Budget</Header>
        <Statistic size="small">
          <Statistic.Label>Your balance:</Statistic.Label>
          <Statistic.Value>23645</Statistic.Value>
        </Statistic>
        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Incoming:
                  </Statistic.Label>
                  <Statistic.Value style={{ textAlign: "left" }}>
                    2300
                  </Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size="tiny" color="red">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Expenses:
                  </Statistic.Label>
                  <Statistic.Value style={{ textAlign: "left" }}>
                    1200
                  </Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">History</Header>
        <Segment color="red">
          <Grid textAlign="right" columns={3}>
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Somethnig
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                102
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit"></Icon>
                <Icon name="trash"></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color="green">
          <Grid textAlign="right" columns={3}>
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Somethnig
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                134
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit"></Icon>
                <Icon name="trash"></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input
              icon="tags"
              width={12}
              label="description"
              placeholder="New thing"
            />
            <Form.Input
              icon="dollar"
              iconPosition="left"
              width={4}
              label="value"
              placeholder="100"
            />
          </Form.Group>
          <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button>Ok</Button>
          </Button.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
