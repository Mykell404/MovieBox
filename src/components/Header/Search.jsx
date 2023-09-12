import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="w-96 rounded-md border border-white bg-transparent px-2 py-1 text-white placeholder:font-normal placeholder:text-white focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
