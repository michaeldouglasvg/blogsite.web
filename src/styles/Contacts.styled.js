import styled from 'styled-components';

export const ContactMainDisplay = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
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

export const LeftContainerContent = styled.div`
    width: 100%;
    padding: 1rem;

    & .Card{
        width: 100%;
        margin: 0 auto;
        padding: 1rem .1rem;
        border: ${({theme}) => theme.colors.border};
        border-radius: 3px;
        border-top: 1rem solid brown;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            margin: 1rem auto;
            width: 80%;
        }

        & section{
            width: 98%;
            margin: 1rem auto;
            display: flex;
            align-items: center;
            border: ${({theme}) => theme.colors.border};
            padding: .5rem;
            border-radius: 5px;
            border-left: 1rem solid gold;
            cursor: pointer;

            & .Icons{
                width: 30px;
                height: 30px;
                display: grid;
                place-items: center;
            }
            & .Descriptions{
                margin-left: 1rem;
                & p{
                    font-size: .9rem;
                    line-height: 1.5rem;
                    &:nth-child(1){
                        color: skyblue;
                    }
                }
            }
        }
    }
`

export const RightContainerContent = styled.div`
    width: 100%;
    padding: 1rem;

    & > .Formcontainer{
        width: 100%;
        margin: 0 auto;
        padding: 1rem .1rem;
        border: ${({theme}) => theme.colors.border};
        border-radius: 3px;
        border-top: 1rem solid purple;
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            margin: 1rem auto;
            width: 80%;
        }

        & form {
            width: 100%;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;

            & > .Formgroup{
                width: 100%;
                display: flex;
                align-items: start;
                justify-content: start;
                flex-direction: column;
                margin-top: 1rem;
                & > span {
                    padding: .4rem .1rem;
                }
                & > input{
                    padding: .8rem;
                    width: 100%;
                    background: transparent;
                    border: none;
                    outline: ${({theme}) => theme.colors.border};
                    border-radius: 5px;
                }
                & > input[type="submit"]{
                    padding: .8rem;
                    width: 100%;
                    background: green;
                    border: none;
                    outline: none;
                    color: white;
                    border-radius: 5px;
                }
                & > textarea{
                    padding: .8rem;
                    width: 100%;
                    height: 100px;
                    max-height: 100px;
                    background: transparent;
                    border: none;
                    outline: ${({theme}) => theme.colors.border};
                }
            }

            & > .checks{
                display: flex;
                align-items: center;
                margin: 1rem auto;
                & p{
                    font-size: .7rem;
                    margin-left: 1rem;
                    font-style: italic;
                }
            }
        }
    }
`