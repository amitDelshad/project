import TopRow from '../components/TopRow';
import { Avatar, Grid, Typography } from '@mui/material';
import dbHandler from '../db/dbHandler';

export default function Profile(setPage) {

    const userName = dbHandler.getUser().firstName;

    return (
        <div>
            <TopRow setPage = {setPage}/>
            <Grid container alignItems="center" direction="column" padding={5}>
                <Avatar src="" style={{ padding: '8.5%', marginBottom: '3%'}}/>
                <Typography style={{ fontFamily: 'monospace', fontSize: '250%' }}>{userName}</Typography>
            </Grid>
        </div>
    );
}
