import React, { useState, useEffect } from 'react';
import { getCurrentUser } from './backend'
import { auth } from './firebase';

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

  // const [currentUser, setCurrentUser] = useState();
  const [currentUserData, setCurrentUserData] = useState();
  const [orderList, setOrderList] = useState([]);

  const addItemToOrder = (item) =>  {
    setOrderList([...orderList, item]);
  }

   const deleteItemFromOrder = (item) => {
    const tempArray = orderList.filter(itemInOrderList => itemInOrderList.id !== item.id );        
    setOrderList(tempArray);
  }

  const context = {
    orderList,
    // currentUser,
    currentUserData,
    addItemToOrder,
    deleteItemFromOrder,
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // setCurrentUser(user);
      getCurrentUser().then((userData) => setCurrentUserData(userData));
    })  
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
