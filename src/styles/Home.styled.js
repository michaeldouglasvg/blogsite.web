import styled from 'styled-components';

export const HomeMainDisplay = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    margin: .1rem auto;
    margin-top: 60px;
    grid-gap: 1rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        height: calc(100vh - 80px);
        width: 90%;
        margin: .1rem auto;
        margin-top: 60px;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        height: calc(100vh - 100px);
        width: 90%;
        margin: .1rem auto;
        margin-top: 80px;
    }
`
export const ContentLeft = styled.div`
    width: 100%;
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        height: calc(100vh - 80px);
        width: 90%;
        margin: .1rem auto;
        margin-top: 80px;
    }
    & .Greetings{
        width: 90%;
        margin: 1rem auto;
        text-align: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            text-align: left;
        }
        & > h1{
            color: blue;
            font-size: 2.8rem;
            @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
               font-size: 3.6rem;
            }
            & span{
                font-size: 2.8rem;
                color: orangered;
                @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
                  font-size: 3.6rem;
                }
            }
        }
    }

    & .Fullname{
        width: 90%;
        margin: .5rem auto;
        text-align: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            text-align: left;
        }
        & > h1{
            color: skyblue;
            font-size: 2.2rem;
            @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
               font-size: 3.2rem;
            }
        }
    }

    & .Title{
        width: 90%;
        margin: .8rem auto;
        text-align: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            text-align: left;
        }
        & > h2{
            font-size: 1.6rem;
            color: orange;
            @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
               font-size: 1.8rem;
            }
        }
    }

    & .Textdescription{
        width: 90%;
        margin: .8rem auto;
        text-align: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            text-align: left;
        }
        & > p{
            font-size: 1.2rem;
            line-height: 1.5rem;
            color: grey;
            @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }
    }

    & .ButtonsLinks{
        width: 90%;
        margin: .8rem auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            justify-content: start;
            margin-top: 2rem;
        }
    }
`

export const ContentRight = styled.div`
    width: 100%;
    & > .Image{
        width: 99%;
        overflow: hidden;
        margin: .1rem auto;
        border-radius: 3px;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            width: 80%;
            margin-top: 5rem;
        }
        & img{
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            border-radius: 3px;
        }
    }
`