import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { id: 1, tittle: 'Car Insurance', amount: 234.67, date: new Date(2021, 2, 28) },
    { id: 2, tittle: 'Car pp', amount: 94.67, date: new Date(2021, 3, 6) },
    { id: 3, tittle: 'Car dd', amount: 4.67, date: new Date(2021, 1, 5) },
];

  return (
    <div>
      <h2>Lest's get started</h2>
      <ExpenseItem 
        tittle={expenses[0].tittle}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        tittle={expenses[1].tittle}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        tittle={expenses[2].tittle}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
