import SearchBar from '../components/SearchBar';
import Sites from '../components/Sites';
import TopRow from '../components/TopRow';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function Index(setPage) {

  const [text, setText] = useState('');
  const [type, setType] = useState('site');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <TopRow setPage = {setPage}/>
      <SearchBar handleChange={handleChange} />
      <Grid container alignItems="center" direction="column">
        <Button variant="contained" style={{marginTop: '0.5%'}} onClick={() => {setType('site')}}>Search By Site</Button>
        <Button variant="contained" style={{marginTop: '0.5%'}} onClick={() => {setType('category')}}>Search By Category</Button>
      </Grid>
      <Sites text={text} type={type}/>
    </div>
  );
}
