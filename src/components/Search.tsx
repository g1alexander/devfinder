import "@styles/search.css";
import { useState } from "react";
import { userGithub } from "@store/state";

const Search = () => {
  const [search, setSearch] = useState("");

  const [error, setError] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    try {
      const data = await fetch(`https://api.github.com/users/${search}`).then(
        (res) => res.json()
      );

      if (data.message === "Not Found") {
        return setError(true);
      }

      setError(false);

      const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        followers,
        following,
        public_repos,
        location,
        company,
        blog,
        twitter_username,
      } = data;

      userGithub.set({
        avatar_url,
        name,
        login,
        created_at,
        bio,
        followers,
        following,
        public_repos,
        location,
        company,
        blog,
        twitter_username,
      });

      setSearch("");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-search">
      <div className="form-search__block-one">
        <img src="/icons/icon-search.svg" alt="" />

        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Github username..."
        />
      </div>

      <div className="form-search__block-two">
        {error && <span>No results</span>}

        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
