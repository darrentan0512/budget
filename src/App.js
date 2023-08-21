
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "1000.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "20.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "300",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "50",
    isExpense: true

  }
]

function App() {

  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense
    })
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title='Test' />
      <DisplayBalance title='YOUR BALANCE' value='2,550.53' size='small' />
      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

