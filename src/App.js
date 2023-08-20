
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import { useState } from 'react';

var initialEntries = [
  {
    description: "Work income",
    value: "1000.00",
    isExpense: false
  },
  {
    description: "Water bill",
    value: "20.00",
    isExpense: true
  },
  {
    description: "Rent",
    value: "300",
    isExpense: true
  },
  {
    description: "Power bill",
    value: "50",
    isExpense: true

  }
]

function App() {

  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title='Test' />
      <DisplayBalance title='YOUR BALANCE' value='2,550.53' size='small' />
      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      {
        entries.map((entry) => (
          <EntryLine description={entry.description}
            value={entry.value}
            isExpense={entry.isExpense}
          />
        ))
      }

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;

