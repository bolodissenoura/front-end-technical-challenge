import { TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import * as S from './styles'

const ListMap = () => {
    return <S.ListSection>
        <List className="lt-principal">
            <ListItem className="lt-item">
                <ListItemAvatar>
                    <Avatar>
                        <h1>SP</h1>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Alameda Santos" secondary="29854.12" />
            </ListItem>
        </List>
    </S.ListSection>;
};

export default ListMap;