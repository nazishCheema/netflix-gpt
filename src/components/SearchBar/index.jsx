import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import preferedLang from "../../utils/preferedLang";
import { API_OPTIONS } from "../../constants";
import { addSearchResult } from "../../Redux/SearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store?.config?.preferedLang);
  const searchRef = useRef(null);

  // const handleSearchResult = async () => {
  //   const searchContent = `Act as a movie recommendation system and suggest some movie fro the query ${searchRef?.current?.value} and only give me name of 5 movies`;
  //   const searchResult = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: searchContent }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(searchResult?.choices);
  // };

  const handleSearchResult = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchRef?.current?.value}&include_adult=false&language=&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchResult(json?.results));
  };

  return (
    <div className="  pt-[8%] flex items-center justify-center ">
      <form
        onSubmit={(e) => e?.preventDefault()}
        className="grid grid-cols-12 bg-black  w-1/2 bg-opacity-40"
      >
        <input
          ref={searchRef}
          className="col-span-9 m-2 px-2 rounded-md"
          name="Search"
          placeholder={preferedLang[langKey]?.placeholder}
        />
        <button
          className="bg-red-700 text-white py-2 rounded-md m-2 col-span-3"
          onClick={handleSearchResult}
        >
          🔎 {preferedLang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
