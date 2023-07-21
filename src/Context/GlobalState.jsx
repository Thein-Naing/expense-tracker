import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// 1.define initial state
const initialState = {
  transactions:  [
      // { id: 1, text: 'Flower', amount: -20 },
      // { id: 2, text: 'Salary', amount: 300 },
      // { id: 3, text: 'Book', amount: -10 },
      // { id: 4, text: 'Camera', amount: 150 }
    ]
}

//2.Create context
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {

const [state, dispatch] = useReducer(AppReducer, initialState);

// 5.Add actions(delete or add or update) and update this actions in reducer
function deleteTransaction(id) {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  })
}


// 6.Add actions(delete or add or update) and update this actions in reducer
function addTransaction(transaction) {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction
  })
}



// 3. wrap app with provider
return(

  <GlobalContext.Provider
  // 4.add value to Provider
  value={{ transactions: state.transactions,
           deleteTransaction, addTransaction}}>
    {children}
  </GlobalContext.Provider>

  );
}
