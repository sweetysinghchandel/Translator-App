import { useState } from "react";
import TranslatorStart from "./components/TranslatorStart";
import TranslatorApp from "./components/TranslatorApp";

const App = () => {
  const[showTranslatorApp , setShowTranslaterApp] =
  useState(false)
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93] flex justify-center items-center">
      <div className="w-[90%] max-w-lg bg-[#2d2d2d] rounded-xl shadow-xl shadow-gray-800 flex flex-col">
      
      {showTranslatorApp ?(
      <TranslatorApp onClose={() => setShowTranslaterApp(false)}/>
      ) :(
     <TranslatorStart onStart={() =>setShowTranslaterApp(true)}/> 
      )}
      
      </div>
      
    </div>
  );
};

export default App;
