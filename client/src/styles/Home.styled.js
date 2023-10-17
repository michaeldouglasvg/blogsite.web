import styled from 'styled-components';

export const HomeMainDisplay = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    margin: .1rem auto;
    margin-top: 60px;
    grid-gap: 1rem;
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

export const CarouselDiv = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > .Leftdisplayunit{
        width: 100%;
        background: #01272f;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
        & h1{
            font-size: 5rem;
            color: whitesmoke;
            text-align: center;
        }
        & h2{
            font-size: 4rem;
            color: orangered;
            padding-top: 1rem;
            text-align: center;
        }
        & p{
            color: white;
            line-height: 2rem;
            padding-top: 1rem;
            text-align: center;
        }
      
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            width: 48%;
            clip-path: ellipse(87% 47% at 11% 50%);
            height: 100%;
            align-items: start;
            /* &:nth-child(odd) {
                clip-path: polygon(0 9%, 100% 9%, 100% 81%, 75% 83%, 75% 100%, 46% 84%, 0 81%);
            } */
            clip-path: ellipse(87% 47% at 11% 50%);
           
            & h1{
                font-size: 5rem;
                color: whitesmoke;
                text-align: left;
            }
            & h2{
                font-size: 4rem;
                color: orangered;
                padding-top: 1rem;
                text-align: left;
            }
            & p{
                color: white;
                line-height: 2rem;
                padding-top: 1rem;
                text-align: left;
            }
        }
        
    }
    & > .Rightdisplayunit{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            width: 48%;
        }
        & > .Image{
            width: 100%;
            height: 80vh;
            & img{
                width: 100%;
                height: 100%;
            }
        }

    }
`
