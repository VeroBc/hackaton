import { db } from './firebase';

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