import styled from 'styled-components';

export const GalleryMainDisplay = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    margin: .1rem auto;
    margin-top: 60px;
    
    & > .Gallerypage{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
            justify-content: start;
        } 
        
        & h1{
            padding: .4rem .1rem;
            font-size: 2rem;
            border-bottom: ${({theme}) => theme.colors.border};
        }
    }
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

export const GalleryHeaderBtns = styled.div`
    width: 100%;
    padding: .2rem 1rem;
    margin-top: 1rem;
    & button{
        padding: .6rem 1rem;
        outline: none;
        border: none;
        margin-left: .6rem;
        border-radius: 3px;
        background: transparent;
        border: ${({theme}) => theme.colors.border};
        color: ${({theme}) => theme.colors.color};
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    padding: .2rem;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    place-content: start;
    place-items: start;
    grid-gap: 3px;

    & .Imagecontainer{
        width: auto;
        margin-left: .2rem;
        height: 120px;
        max-height: 150px;
        max-width: 200px;
        overflow: hidden;
        & img{
            object-fit: fit;
            width: 100%;
            height: 100%;
        }
    }
`