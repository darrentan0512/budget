
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState, useEffect } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { createStore, combineReducers } from 'redux';
import { useSelector } from 'react-redux';

function App() {

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector(state => state.entries);
  const isOpen = useSelector(state => state.modals.isOpen);

  useEffect(() => {
 
    //eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } 
      return (totalIncome += Number(entry.value));
    })
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
    setTotal(totalIncome - totalExpense);
    console.log(`Total income is ${totalIncome} and total expense is ${totalExpense}`);
  }, [entries]);

  return (
    <Container>
      <MainHeader title='Budget App' />
      <DisplayBalance title='YOUR BALANCE' value={total} size='small' />
      <DisplayBalances 
        totalIncome = {totalIncome}
        totalExpense = {totalExpense}
      />

      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} />
      <ModalEdit isOpen={isOpen}/>
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;

