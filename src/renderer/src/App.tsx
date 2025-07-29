import React from 'react';

export const App: React.FC = (): React.JSX.Element => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold tracking-wide hover:bg-gray-500 p-2 cursor-pointer">Hello</h1>
      <p>Test</p>
      <button
        onClick={ipcHandle}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 outline-none"
      >
        Ping
      </button>
    </div>
  );
};
