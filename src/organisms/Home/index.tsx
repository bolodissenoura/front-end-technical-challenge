import { Grid, ListItem } from '@mui/material';
import ListMap from '../../molecules/ListMap';
import * as S from './styles'

const Home = () => {
    return <S.SectionHome>
        <Grid container spacing={3} display="flex" justifyContent="center" alignItems="center">
            <Grid item xs={6} md={6}>
                <ListItem><ListMap /></ListItem>
            </Grid>
            <Grid item xs={6} md={6}>
                <ListItem>Maps</ListItem>
            </Grid>
        </Grid>
    </S.SectionHome>;
};

export default Home;