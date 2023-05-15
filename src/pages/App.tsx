import React from "react";
import "../css/index.css";
import { CommentProvider } from "../utils/CommentContext";
import Main from "../components/Main";

const App: React.FC = () => {
  return (
    <CommentProvider>
      <main className="bg-[#F5F6FA]">
        <Main />
      </main>
    </CommentProvider>
  );
};

export default App;
