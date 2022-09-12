import { useState } from "react";
import { Container, Statistic, Segment, Grid, Icon } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    setEntries([
      ...entries,
      {
        description,
        value,
        id: entries.length + 1,
        isExpense,
      },
    ]);
  }

  return (
    <div className="App">
      <Container>
        <MainHeader title="Budget" />
        <DisplayBalance title="Your budget" amount={2312} />
        <DisplayBalances />
        <MainHeader title="History" type="h3" />

        <EntryLines entries={entries} deleteEntry={deleteEntry} />

        <MainHeader title="New transaction" type="h3" />
        <NewEntryForm addEntry={addEntry} />
      </Container>
    </div>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "1000",
    isExpense: false,
  },
  {
    id: 2,
    description: "shopping",
    value: "45",
    isExpense: true,
  },
  {
    id: 3,
    description: "rent",
    value: "400",
    isExpense: true,
  },
  {
    id: 4,
    description: "power bill",
    value: "60",
    isExpense: true,
  },
];
