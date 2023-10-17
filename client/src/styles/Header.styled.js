import styled, { keyframes } from 'styled-components';
const openAnimation = keyframes`
  from {
    width: 40px;
  }
  to {
    width: 150px;
  }
`;

const closeAnimation = keyframes`
  from {
    width: 150px;
  }
  to {
    width: 40px;
  }
`

// Main header styles
export const HeaderStyledComponent = styled.header`
 width: 100%;
 padding: .1rem 1rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-wrap: wrap;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999;
 background: var(--background-color);
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 &:hover{
   box-shadow: ${({theme}) => theme.colors.boxshadow};
 }

 & > .Leftflex{
   display: flex;
   align-items: center;
   justify-content: space-between;

   & > .SideBars{
      width: 35px;
      height: 35px;
      padding: .2rem .8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      inset: -20px;
      margin-left: .6rem;
      cursor: pointer;
      &:hover{
         box-shadow: ${({theme}) => theme.colors.boxshadow};
        color: blue;
      }
   }
 }
 & > .Rightflex{
   display: flex;
   align-items: center;
   flex-wrap: wrap;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: .4rem 7rem;
 }
`
// Heade >> Logo style
export const Logo = styled.div`
 width: 60px;
 height: 35px;
 display: grid;
 place-items: center;
 cursor: pointer;
 overflow: hidden;
 border-radius: 5px;
 box-shadow: ${({theme}) => theme.colors.boxshadow};

 & > img{
  width: 100%;
  height: 100%;
  object-fit: scale-down;
 }
`
// Header >> Events style
export const Events = styled.div`
 height: 35px;
 width: 35px;
 display: grid;
 place-items: center;
 margin-left: .4rem;
 padding: .1rem .4rem;
 border-radius: 5px;
   &:hover{
      box-shadow: ${({theme}) => theme.colors.boxshadow};
      color: blue;
   }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  margin-left: 1rem;
 }
`
// Header >> Navigation links
export const HeaderNavLinks = styled.div`
 background: white;
 position: absolute;
 padding: .8rem 1rem;
 bottom: 0;
 width: 96%;
 height: 200px;
 margin: .6rem auto;
 border-radius: 3px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
 grid-gap: 1rem;
 display: none;

 & > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
  border-radius: 3px;
  p{
   padding: 1px;
  }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  background: white;
  position: absolute;
  padding: .8rem 1rem;
  bottom: 0;
  right: 1rem;
  width: 80%;
  height: 200px;
  margin: .6rem auto;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 1rem;
  display: none;


  & > div {
  width: 90px;
  height: 70px;
  p{
   padding: 1px;
  }
 }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  display: none;
 }
`
// Header >> Theme section and Settings
export const ThemeSettings = styled.div`
 width: 35px;
 height: 35px;
 padding: .2rem .8rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 5px;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 margin-left: .4rem;
 inset: -20px;
 cursor: pointer;
`
// Header >> Icons
export const IconSection = styled.div`
   display: none;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      display: block;
      padding: .1rem .6rem;
      display: flex;
      align-items: center;
   }
   & .Socioiconset{
      width: 35px;
      height: 35px;
      padding: .2rem .8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      margin-left: .4rem;
      inset: -20px;
      cursor: pointer;
      &:hover{
         box-shadow: ${({theme}) => theme.colors.boxshadow};
        color: blue;
      }
   }
`

// Header >> Large screen navigation
export const WindowViewNav = styled.div`
   width: 0px;
   max-width: 150px;
   height: 100vh;
   box-shadow: ${({theme}) => theme.colors.boxshadow};
   position: fixed;
   left: -40px;
   bottom: 0;
   z-index: 999;
   background: var(--background-color);
   overflow-x: hidden;
   animation: ${({ isopen }) => (isopen ? openAnimation : closeAnimation)} 0.2s ease-in-out forwards;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      width: 40px;
      left: 0;
   }



   & > .Scrollofset{
      width: 100%;
      max-height: calc(100vh - 100px);
      overflow-y: scroll;
      display: grid;
      place-items: start;
      &::-webkit-scrollbar{
         display: none;
      }
   }

   & > .TopNavigation{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto .1rem auto;
      border-bottom: ${({theme}) => theme.colors.border};
      padding: .5rem 1.1rem;
      width: 100%;
      background: #005064;
      color: white;
      & > .Iconclose{
         box-shadow: ${({theme}) => theme.colors.boxshadow};
         cursor: pointer;
      }
   }

   & .Footersection{
      width: 100%;
      padding: 1rem .1rem;
      display: grid;
      place-items: center;
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: ${({theme}) => theme.colors.border};
   }

   & .Navigationlinks{
      width: 100%;
      padding: .4rem .1rem;
      margin: .4rem auto;
      border-bottom: ${({theme}) => theme.colors.border};
      place-self: start;

      & .SingleLink{
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: start;
         padding: .6rem 1rem;
         border-radius: 15px;
         margin-top: .1rem;
         cursor: pointer;
         &:hover{
            background: #005064;
            color: orange;
            & > a{
               color: orange;
            }
         }

         & .Linkicon{
            font-size: 15px;
         }
         & .linktag{
            font-size: 15px;
         }
      }
   }
`
