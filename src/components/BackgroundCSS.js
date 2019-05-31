import styled from 'styled-components'

export const Wrapper = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background:  ${props => props.bgcolor || '#ffffff'};
    z-index: -1;

    ::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.6;
        background-image: url('${props => props.bgimage || ''}');
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        

`

