import styled from 'styled-components';

export const AboutMainDisplay = styled.article`
    width: 100%;
    margin: .1rem auto;
    margin-top: 60px;
    box-shadow: 1px solid rgba(0,0,0,.2);
    padding: 1rem .2rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        height: calc(100vh - 60px);
        width: calc(100vw - 12%);
        margin: .1rem auto;
        margin-top: 60px;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        height: calc(100vh - 80px);
        width: calc(100vw - 12%);
        margin: .1rem auto;
        margin-top: 60px;
    }
`

export const AboutGoalstyles = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
    place-items: center;
    align-self: start;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        height: 60vh;
    }
    & > .Cardsection{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        & h1{
            font-size: 3.2rem;
            color: grey;
        }
        & > .Logoabout{
            width: 280px;
            height: 180px;
            & .Icons{
                width: 100%;
                height: 100%;
            }
        }
        & > p{
            text-align: center;
            line-height: 1.5rem;
            color: grey;
        }
    }
`
export const AboutAttainmentstyles = styled.div`
    width: 100%;
    padding: .4rem 1rem;
    & h1{
        font-size: 3rem;
        color: ${({theme}) => theme.colors.color};
    }
    & p{
        line-height: 1.5rem;
        color: grey;
    }
    & .Linkjoin{
        color: blue;
        text-decoration: underline;
        padding-top: 1rem;
    }
`
