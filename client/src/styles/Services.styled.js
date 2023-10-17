import styled from 'styled-components';

export const ServicesMainDisplay = styled.article`
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

export const ServicesCardssection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    grid-gap: .6rem;
`

export const SingleServiceCard = styled.div`
    width: 280px;
    display: flex;
    align-items: center;
    border: ${({theme}) => theme.colors.border};
    padding: 1rem .4rem;
    margin: .1rem auto;
    border-radius: 5px;
    & .Image{
        
        & img{
            width: 100%;
            height: 100%;
        }
    }
    & .Texts{
        margin-left: 1rem;
        & p{
            font-size: .8rem;
            line-height: 1rem;
        }
        & .singlelink{
            font-size: .8rem;
            line-height: 1rem;
            text-decoration: underline;
            color: blue;
            display: flex;
            align-items: center;
        }
    }
`