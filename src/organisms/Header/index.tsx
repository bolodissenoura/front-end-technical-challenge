import { AppBar, Toolbar, Typography } from '@mui/material';
import * as S from './styles'

const Header = () => {
    return <S.Box>
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h5" color="inherit" component="div" className="title">
                        Deempenhos das Lojas
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    </S.Box>;
};

export default Header;