import React from 'react';
// import { input } from './styles.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './styles.css';

const SearchBar = (props) => {
const styles = (mb, mr, width, height, clr) => {
  return {
    marginBottom: mb + 'px',
    marginRight: mr + 'px',
    width: width + 'vw',
    heigth: height + 'px',
    color: clr,
    fontSize: mr + 'px',
    
  }
}
  return (
    <div>
      <Input
      type='text'
      style={styles(30, 20, 70, 25, '#3f51b5')}
      value={props.value}
      onChange={props.change}
      onKeyPress={props.press}   />
      <Button style={{background: 'blue', color: 'white'}} variant='contained' onClick={props.click}>Click</Button>
    </div>
  )
}

export default SearchBar;