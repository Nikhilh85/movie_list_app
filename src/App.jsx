import React from "react";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <MovieList />
    </div>
  );
};

export default App;
