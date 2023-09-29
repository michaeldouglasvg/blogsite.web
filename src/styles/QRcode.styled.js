import styled from 'styled-components';

export const QRcodeScannerStyles = styled.div`
   width: 100%;
   height: 100%;
   z-index: 1000;
   background: rgba(0,0,0,.9);
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: space-around;
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   overflow: hidden;
   & > .Code{
      width: 250px;
      height: 250px;
      max-width: 290px;
      max-height: 300px;
      background: white;
      border-radius: 3px;
      padding: .4rem;
      & > .QRcodebtn{
        width: 90%;
        margin: 5rem auto;
        display: grid;
        place-items: center;
      }
   }
`