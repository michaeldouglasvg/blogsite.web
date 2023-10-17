import styled from "styled-components";

export const ButtonStyles = styled.button`
    padding: .8rem 1rem;
    border: none;
    outline: none;
    box-shadow: ${({theme}) => theme.colors.boxshadow};
`