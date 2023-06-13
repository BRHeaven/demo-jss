import styled from "styled-components";
export const ButtonSelect = styled.button`
    display: block;
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 1.2em;
    font-weight: 600;
    background-color: ${(props) => {
        if (props.primary === "primaryItachi") {
            return "#0c0c0c";
        } else if (props.primary === "primaryMinato") {
            return "#9fbb22";
        } else if (props.primary === "primaryShank") {
            return "#c90009";
        } else {
            return "#6B4732";
        }
    }};
    color : white;
    transition: .5s all;
    &:hover {
        color : ${(props) => {
            if (props.primary === "primaryItachi") {
                return "#0c0c0c";
            } else if (props.primary === "primaryMinato") {
                return "#9fbb22";
            } else if (props.primary === "primaryShank") {
                return "#c90009";
            } else {
                return "#6B4732";
            }
        }};
        background-color: white;
        border: 1px solid ${(props) => {
            if (props.primary === "primaryItachi") {
                return "#0c0c0c";
            } else if (props.primary === "primaryMinato") {
                return "#9fbb22";
            } else if (props.primary === "primaryShank") {
                return "#c90009";
            } else {
                return "#6B4732";
            }
        }};
    }
`;