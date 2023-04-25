import React, { useState } from "react";

import QRCode from "react-qr-code";

const App = (): JSX.Element => {
  const [back, setBack] = useState("#3b82f6");
  const [fore, setFore] = useState("#ffffff");

  const [modalQR, setModalQR] = useState("This is the QR code test project");

  return (
    <div className="bg-LightGray min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl w-[280px] p-4">
        <div className="relative bg-qrback rounded-xl p-16">
          <QRCode value={modalQR} bgColor={back} fgColor={fore} size={128} />
        </div>
        <div className="text-base text-center font-OutfitBold whitespace-break-spaces py-4">
          Improve your front-end skills by building projects
        </div>
        <div className="text-sm text-center font-OutfitRegular pb-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default App;
