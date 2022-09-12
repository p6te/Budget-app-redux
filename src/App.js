import { Container, Statistic, Segment, Grid, Icon } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <div className="App">
      <Container>
        <MainHeader title="Budget" />
        <DisplayBalance title="Your budget" amount={2312} />
        <DisplayBalances />
        <MainHeader title="History" type="h3" />
        <EntryLine description="shopping" value={321} isExpense />
        <EntryLine description="gift" value={122} />
        <EntryLine description="shopping" value={21} isExpense />

        <MainHeader title="New transaction" type="h3" />
        <NewEntryForm />
      </Container>
    </div>
  );
}

export default App;
