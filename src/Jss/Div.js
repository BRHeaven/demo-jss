import styled from "styled-components"
export const Div = styled.div`
    &.divMain {
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        gap: 10px;
        width: 90%;
        padding: 20px;
        margin: 0 auto;
    }
`;
export const DivImage = styled.div`
    display: block;
    width : 100%;
`;
export const DivTitle = styled.div`
    display: block;
    width: 100%;
    background-color: #333333;
`;