import { TextField } from '@mui/material';
import * as S from './styles'

const InputSeach = () => {
    return <S.IptSearch>
        <TextField id="outlined-basic" label="Pesquisa" variant="outlined" />
    </S.IptSearch>;
};

export default InputSeach;