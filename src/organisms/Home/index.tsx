import { Grid, ListItem } from '@mui/material';
import ListMap from '../../molecules/ListMap';
import Map from '../../molecules/Map';
import * as S from './styles'

const Home = () => {
    return <S.SectionHome>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <ListItem><ListMap /></ListItem>
            </Grid>
            <Grid item xs={12} md={6}>
                <ListItem><Map /></ListItem>
            </Grid>
        </Grid >
    </S.SectionHome>;
};

export default Home;