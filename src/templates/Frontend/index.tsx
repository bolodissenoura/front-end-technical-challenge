import * as S from './styles';
import Header from '../../organisms/Header';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <>
            <S.SectionHome>
                <Header></Header>
            </S.SectionHome>
            <S.SectionCard>
                <h1>CARD TEST</h1>
            </S.SectionCard>
        </>
    )
}

export default Frontend;