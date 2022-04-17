import { TextField } from '@mui/material';
import React, { useEffect, useState } from "react";
import * as S from './styles'

const InputSeach = () => {

    const [search, setSearch] = useState('');

    return <S.IptSearch>
        {search}
        <TextField
            id="outlined-basic"
            label="Pesquisa"
            variant="outlined"
            onChange={e => setSearch(e.target.value)}
        />
    </S.IptSearch>;
};

export default InputSeach;