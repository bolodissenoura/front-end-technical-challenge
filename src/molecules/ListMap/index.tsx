import { TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import * as S from './styles'
import React, { useEffect, useState } from "react";
import api from '../../services/api'

const ListMap = () => {
    const [stores, setStores] = useState<any[]>([]);
    const [searchFilter, setSearchFilter] = useState<any[]>([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        api
            .get("/")
            .then((response) => {
                setStores(response.data.stores);
                setSearchFilter(response.data.stores);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    useEffect(() => {
        const results = searchFilter.filter(resp =>
            resp.name.toLowerCase().includes(result)
        );
        setStores(results)
    }, [result])

    return <S.ListSection>

        <TextField
            className="lt-search"
            id="outlined-basic"
            label="Pesquisa"
            type="text"
            variant="outlined"
            onChange={event => { setResult(event.target.value.toLowerCase()) }}
        />
        <List className="lt-principal">
            {stores?.map((store, key) => {
                return (
                    <div key={store.revenue}>
                        <ListItem className="lt-item">
                            <ListItemAvatar>
                                <Avatar>
                                    {store.state}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={store.name} secondary={store.revenue} />
                        </ListItem>
                    </div>
                )
            })}

        </List>
    </S.ListSection>;
};

export default ListMap;