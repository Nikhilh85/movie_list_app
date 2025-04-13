import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery, resetPage } from "../state/features/movies/movieSlice";
import { useDebounce } from "../hooks/useDebounce";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedInput));
    dispatch(resetPage());
  }, [debouncedInput]);

  return (
    <header className="bg-white shadow p-8">
      <h1 className="text-2xl font-bold text-center mb-4">Movie List App</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search movies..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </header>
  );
};

export default Header;
