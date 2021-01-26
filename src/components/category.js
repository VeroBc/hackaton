import React, { useState, useEffect } from 'react';
import { Item } from './item.js';
import { subscribeCategory} from '../services/backend';
import '../App.css';

export const Category = (props) => {

  const [category, setCategory] = useState([]);
  
  useEffect(() => subscribeCategory(setCategory, props.categoryType), [props.categoryType]) 
  
  return (
    <div className ='Menu' style={styles.container}>
      
      <div className='productsList' style={styles.block}>
        {category.map((item, index) => <Item key = {'m'+index} data = {item} />)}
        
      </div>
     
    </div>
  )
}


let styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  block: {
    // display: 'inline-block',
    // border: 1,
    borderStyle: 'groove',
    // paddingTop: 10,
    // margin: 10
  },
}
