import styled from 'styled-components';

export const GalleryMainDisplay = styled.article`
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

    & .TopGallerylinks{
        width: 100%;
        padding: .6rem .1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: ${({theme}) => theme.colors.border};
        padding: .6rem .1rem;
        & h1{
            font-size: 2.5rem;
            color: goldenrod;
        }

        & .Effects{
            display: flex;
            flex-direction: column;
            position: relative;
            & .buttoneffect{
                display: flex;
                align-items: center;
                cursor: pointer;
                & p{
                    margin-right: .6rem;
                    font-size: 1.3rem;
                    font-weight: 600;
                }
            }
            & .Dropdownoptions{
                position: absolute;
                top: 2rem;
                right: -.1rem;
                width: 150px;
                height: auto;
                padding: 1rem .2rem;
                background: whitesmoke;
                border-radius: 3px;
                box-shadow: ${({theme}) => theme.colors.boxshadow};
                z-index: 1000;
                border-top: .6rem solid orange;
                & p{
                    color: grey;
                    padding: .4rem .3rem;
                    cursor: pointer;
                    margin-top: .4rem;
                    width: 100%;
                    &:nth-child(1){
                        margin-top: -.4rem;
                    }
                    &:nth-last-child(1){
                        border-bottom: none;
                    }
                    &:hover{
                        color: black;
                        background: silver;
                        transition: all 500ms;
                    }
                }
            }
        }
    }
`

export const GalleryCardssection = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1.2rem;

    & .Imagediv{
        width: 100%;
        flex-direction: column;
        margin: 0rem auto;
        & img{
            width: 100%;
            &:hover{
                transform: rotateY(180deg);
                transition: all 1000ms;
                perspective-origin: 0;
            }
        }
    }
`

