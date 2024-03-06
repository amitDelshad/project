import SearchBar from '../components/SearchBar';
import Sites from '../components/Sites';
import TopRow from '../components/TopRow';
import { Button, Grid } from '@mui/material';

export default function Index(setPage) {

  const siteSearch = () => {
    alert('will search by site');
  }

  const folderSearch = () => {
    alert('will search by folder');
  }

  return (
    <div>
      <TopRow setPage = {setPage}/>
      <SearchBar/>
      <Grid container alignItems="center" direction="column">
        <Button variant="contained" style={{marginTop: '0.5%'}} onClick={() => {siteSearch()}}>Search By Site</Button>
        <Button variant="contained" style={{marginTop: '0.5%'}} onClick={() => {folderSearch()}}>Search By Folder</Button>
      </Grid>
      <Sites/>
    </div>
  );
}
