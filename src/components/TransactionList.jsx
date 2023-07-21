import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions} =  useContext(GlobalContext);


  return (
    <>
      <h3>History</h3>
      {/* <ul className="list">
        {transactions.map(transaction => (<li className="minus" key={transaction.text}>
          {transaction.text}
          <span>$400</span>
          <button className="delete-btn">X</button>
        </li>))}
      </ul> */}

      <ul className="list">
        {transactions.map(transaction => (< Transaction
        transaction={transaction}
        key={transaction.id} />))}
      </ul>
    </>
  );
};

export default TransactionList;
