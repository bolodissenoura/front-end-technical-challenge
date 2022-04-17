import { TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import * as S from './styles'
import React, { useEffect, useState } from "react";
import api from '../../services/api'

const ListMap = () => {
    const [stores, setStores] = useState<any[]>([]);

    useEffect(() => {
        api
            .get("/")
            .then((response) => {
                setStores(response.data.stores);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return <S.ListSection>
        <List className="lt-principal">
            {stores?.map((store, key) => {
                return (
                    <>
                        <ListItem className="lt-item">
                            <ListItemAvatar>
                                <Avatar>
                                    <h1>SP</h1>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={store.name} secondary={store.name} />
                        </ListItem>
                    </>
                )
            })}

        </List>
    </S.ListSection>;
};

export default ListMap;