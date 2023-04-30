import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";
function App() {
    return (<div><TransactionHistory items={ transactions }/></div>);
}

export default App
