import * as S from './styles';
import Header from '../../organisms/Header';
import Home from '../../organisms/Section';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <>
            <S.SectionHeader>
                <Header></Header>
            </S.SectionHeader>
            <S.SectionMaps>
                <Home></Home>
            </S.SectionMaps>
        </>
    )
}

export default Frontend;