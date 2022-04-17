import styled from "styled-components";

export const ListSection = styled.div`
    
    .lt-search{
        padding-bottom: 10px;
        width: 400px;
    }

    .lt-principal{
        background-color: white;
        height: 300px;
        min-width: 400px;
        border-radius: 16px;
        overflow-y: scroll;
        overflow-x: hidden;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .lt-item{
        background-color: whitesmoke;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin-bottom: 10px;
        width: 300px;
        border-radius: 16px;
        transition: transform 250ms;
        margin-left: auto;
        margin-right: auto;
        :hover{
            cursor: pointer !important;
            transform: translateY(-5px);
        }
    }
`