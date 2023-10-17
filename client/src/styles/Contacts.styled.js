import styled from 'styled-components';

export const ContactMainDisplay = styled.article`
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
export const ConntactSection = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        grid-template-columns: 1fr 2fr;
        grid-gap: 1rem;
    }

    & > .Leftsectionlinks{
        width: 100%;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start; 
        
        & .Singlecontactcard{
            border: ${({theme}) => theme.colors.border};
            width: 100%;
            box-shadow: ${({theme}) => theme.colors.boxshadow};
            padding: .4rem;
            border-top: .6rem solid goldenrod;
            margin-top: 1rem;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                border-top: .6rem solid #01272f;
                transition: all 500ms;
            }
            
            & .Top{
                width: 100%;
                display: flex;
                align-items: center;
                & .Icon{
                    width: 40px;
                    height: 40px;
                    display: grid;
                    place-items: center;
                    & .ic{
                        width: 100%;
                        height: 100%;
                    }
                }
                & .Text{
                    margin-left: 1rem;
                }
            }

            & .Bottom{
                width: 100%;
                padding: 1rem .4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: ${({theme}) => theme.colors.border};
            }
        }
    }

    & > .Rightforms{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        & .Forms{
            width: 100%;
            margin-top: 1rem;
            & h1{
                padding: .4rem;
                font-size: 2.3rem;
            }
            & form{
                width: 100%;
                & .Cells{
                   display: grid;
                   grid-template-columns: 1fr;
                   margin-top: 1rem;
                   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
                        grid-template-columns: 1fr 1fr;
                    }
                }
                & .submit{
                    align-items: start;
                }
                & .Formfields{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                    width: 98%;
                    margin: auto.1rem auto;
                    & span{
                        font-size: 1.5rem;
                        color: ${({theme}) => theme.colors.color};
                    }
                    & input{
                        padding: 1rem;
                        width: 98%;
                        border: none;
                        outline: ${({theme}) => theme.colors.border};
                        border-radius: 5px;
                        margin-top: .4rem;
                    }
                    & input[type='submit'] {
                        padding: 1.2rem;
                        outline: none;
                        background: skyblue;
                        color: white;
                        cursor: pointer;
                        margin-top: 1.5rem;
                    }
                    & textarea{
                        padding: 1rem;
                        width: 100%;
                        height: 20vh;
                        border: none;
                        outline: ${({theme}) => theme.colors.border};
                        margin-top: .4rem;
                    }
                }
            }
        }
    }
`