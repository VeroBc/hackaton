import { db } from './firebase';
import firebase from 'firebase';

export const subscribeCategory = (callBackReturnCategory, categoryType ) => {
  db.collection('products').where("category", "==", categoryType).get()
    .then((results) => {
      let categoryArray =[];
      results.forEach(product => categoryArray.push(( { id: product.id, ...product.data() } )));
      callBackReturnCategory(categoryArray);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export const subscribeBrand = (callBackReturnCategory, categoryBrand ) => {
  db.collection('products').where("brand", "==", categoryBrand).get()
    .then((results) => {
      let categoryArray =[];
      results.forEach(product => categoryArray.push(( { id: product.id, ...product.data() } )));
      callBackReturnCategory(categoryArray);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export const setUser = (user) => {
  return db.collection('users')
    .doc(user.uid)
    .set(user)
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch(e => {
      console.log('problemas al crear la coleccion de users', e)
    });
};

export const getCurrentUser = () => {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return Promise.resolve(null);
  const docRef = firebase.firestore().collection('users').doc(currentUser.uid);
  return docRef.get()
    .then(doc => doc.data())
    .catch(e => console.log('error while getting currentUser docRef', e));
};

// export const saveItem = (item) => {

//   let orderToSave = {
//     status: order.status,
//     userRef: {},
//     itemOrder: {}
//   }

//   for(let i = 0; i < order.items.length; i++)
//     orderToSave.itemOrder[i.toString()] = db.doc("products/" + order.items[i].id)
  
//   orderToSave.userRef = db.doc("users/" + order.userRef.uid)
  
//   db.collection('order').doc().set(orderToSave);
// };

export const saveOrder = (order) => {

  let orderToSave = {
    date: order.time,
    status: order.status,
    userRef: {},
    itemOrder: {}
  }

  for(let i = 0; i < order.items.length; i++)
    orderToSave.itemOrder[i.toString()] = db.doc("products/" + order.items[i].id)
  
  orderToSave.userRef = db.doc("users/" + order.userRef.uid)
  
  db.collection('order').doc().set(orderToSave);
};


// export const subscribeOrder = (callBackReturnOrderList) => {
//   db.collection('order').where("status", "==",  "pending").onSnapshot((queryResult) => {
//     const arrayPromises = [];
//     const arrayData = [];
//     queryResult.forEach( (doc) => {
//       const data = doc.data();
//       arrayData.push({ id: doc.id, ...doc.data() });

//       const items = Object.entries(data.itemOrder);

//       const arrayPromesasDeItems = items.map( ([, item]) =>  
//         item.get().then( dataDelGet => ( { id: dataDelGet.id, ...dataDelGet.data() } )
//       ));
//       const promesaDeLosItems = Promise.all(arrayPromesasDeItems);

//       let promesaDeUsuario = Promise.resolve(null);
//       if (data.userRef) 
//         promesaDeUsuario = data.userRef.get().then( dataDelGet => ( { id: dataDelGet.id, ...dataDelGet.data() }));

//       const promesaDeTodaLaOrden = Promise.all([promesaDeLosItems, promesaDeUsuario]) 

//       arrayPromises.push(promesaDeTodaLaOrden);

//     });
//     //  arrayPromises.push(
//     //          Promise.all(Object.entries(data.itemOrder).map( ([index, item]) => item.get())));
//     Promise.all(arrayPromises).then(arrayDeArrays => {
//       for (let i = 0; i < arrayDeArrays.length; i++) {
//         let [items, user] = arrayDeArrays[i];
//         arrayData[i].items =  items;
//         arrayData[i].user = user;
//       }
//       callBackReturnOrderList(arrayData)

//     });
//   });
// };