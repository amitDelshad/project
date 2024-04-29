import SearchBar from '../components/SearchBar';
import Sites from '../components/Sites';
import TopRow from '../components/TopRow';
import { Button, Grid, Popover, Stack } from '@mui/material';
import { useState } from 'react';

export default function Index(setPage) {

  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <TopRow setPage = {setPage} refresh={refresh} setRefresh={setRefresh}/>
      <SearchBar handleChange={handleChange} />
      <Grid container alignItems="center" direction="column" paddingTop='2%'>
        <Button variant="contained" style={{marginTop: '0.5%'}} onClick={handleClick}>Categories</Button>
      </Grid>
      <Popover open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
          <Stack direction='row'>
            <Stack>
              <Button onClick={()=>{setType('Technology'); handleClose()}}>technology</Button>
              <Button onClick={()=>{setType('Sports'); handleClose()}}>sports</Button>
              <Button onClick={()=>{setType('Health'); handleClose()}}>health</Button>
              <Button onClick={()=>{setType('Food'); handleClose()}}>food</Button>
            </Stack>
            <Stack>
              <Button onClick={()=>{setType('Finance'); handleClose()}}>finance</Button>
              <Button onClick={()=>{setType('Fashion'); handleClose()}}>fashion</Button>
              <Button onClick={()=>{setType('Education'); handleClose()}}>education</Button>
              <Button onClick={()=>{setType('Other'); handleClose()}}>other</Button>
            </Stack>
            <Stack>
              <Button onClick={()=>{setType('Entertainment'); handleClose()}}>entertainment</Button>
              <Button onClick={()=>{setType('Politics'); handleClose()}}>politics</Button>
              <Button onClick={()=>{setType('Travel'); handleClose()}}>travel</Button>
              <Button onClick={()=>{setType(''); handleClose()}}>all</Button>
            </Stack>
          </Stack>
        </Popover>
      <Sites text={text} type={type}/>
    </div>
  );
}
