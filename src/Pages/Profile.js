import TopRow from '../components/TopRow';
import { Avatar, Grid, Typography, Box } from '@mui/material';
import dbHandler from '../db/dbHandler';

export default function Profile(setPage) {

    const userName = dbHandler.getUser().firstName;
    const categories = ['Technology', 'Health', 'Sports', 'Finance', 'Entertainment',
     'Education', 'Travel', 'Food', 'Fashion', 'Politics', 'Other'];

    return (
        <div>
            <TopRow setPage = {setPage}/>
            <Grid container alignItems="center" direction="column" padding={5}>
                <Avatar src="" style={{ padding: '8.5%', marginBottom: '3%'}}/>
                <Typography style={{ fontFamily: 'monospace', fontSize: '250%' }}>{userName}</Typography>
            </Grid>
            <Typography>{'Your categories are:'}</Typography>
            <Box sx={{ '&::-webkit-scrollbar': {display: 'none',}, overflow: 'auto', maxHeight: '100px'}}>
                {categories.map((categorie) => (
                    <Typography>{`-${categorie}`}</Typography>
                ))}
            </Box>  
        </div>
    );
}
