import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      console.log(index);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      setDescription("");
      setValue();
      setIsExpense(true);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += parseInt(entry.value));
      }
      return (totalIncomes += parseInt(entry.value));
    });
    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  function addEntry() {
    setEntries([
      ...entries,
      {
        id: entries.length + 1,
        description,
        value,
        isExpense,
      },
    ]);
    resetEntry();
  }

  function resetEntry() {
    setDescription("");
    setValue();
    setIsExpense(true);
  }

  return (
    <div className="App">
      <Container>
        <MainHeader title="Budget" />
        <DisplayBalance title="Your budget" amount={total} />
        <DisplayBalances
          incomeTotal={incomeTotal}
          expenseTotal={expenseTotal}
        />
        <MainHeader title="History" type="h3" />

        <EntryLines
          entries={entries}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />

        <MainHeader title="New transaction" type="h3" />
        <NewEntryForm
          addEntry={addEntry}
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
        <ModalEdit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addEntry={addEntry}
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Container>
    </div>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "shopping",
    value: 345,
    isExpense: true,
  },
  {
    id: 3,
    description: "rent",
    value: 34,
    isExpense: true,
  },
  {
    id: 4,
    description: "power bill",
    value: 23,
    isExpense: true,
  },
];
