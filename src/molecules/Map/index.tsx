import * as S from './styles'
import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { TextField } from '@mui/material';

const Map = () => {


    return <S.MapSection>
        <>
            <TextField
                className="lt-search"
                id="outlined-basic"
                label="Faturamento total"
                type="text"
                variant="outlined"
            >
                
            </TextField>
            <div className="lt-principal">

                <h1>aqui vai o mapa</h1>

            </div>
        </>

    </S.MapSection>;
};

export default Map;