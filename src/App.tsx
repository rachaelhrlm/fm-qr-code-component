import React, { FunctionComponent } from "react";

export const App: FunctionComponent = () => {
  return (
    <main className="bg-gray-light h-screen w-full flex place-content-center place-items-center p-8">
      <div className="flex flex-col bg-white p-5 border rounded-3xl w-[24rem]">
        <img className="border rounded-2xl" src={`${process.env.PUBLIC_URL}/images/image-qr-code.png`} alt="QR code" />
        <div className="flex flex-col text-center gap-6 p-7">
          <h1 className="text-2xl text-blue-dark font-bold">Improve your front-end skills by building projects</h1>
          <p className="text-gray-blue">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  );
};
