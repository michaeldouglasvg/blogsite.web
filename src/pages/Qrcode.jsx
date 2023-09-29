import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [url] = useState('https://mgracekr-site.netlify.ap');

  return (
    <>
      <QRCode value={url} style={{width: "99%", height: "99%"}}/>
    </>
  );
}

export default QRCodeGenerator;
