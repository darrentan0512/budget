
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

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50,
    isExpense: true

  }
]

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const entriesRedux = useSelector(state => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      console.log(entryId);
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
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


  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const editEntry = (id) => {
    console.log(id);
    console.log(`Edit entry ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      setEntryId(id);
    }
  }

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense
    })
    setEntries(result);
    resetEntry();
  }

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }
  return (
    <Container>
      <MainHeader title='Budget App' />
      <DisplayBalance title='YOUR BALANCE' value={total} size='small' />
      <DisplayBalances 
        totalIncome = {totalIncome}
        totalExpense = {totalExpense}
      />

      <MainHeader title='History' type='h3' />
      <EntryLines
        entries={entriesRedux}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

