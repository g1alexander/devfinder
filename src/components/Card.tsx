import Links from "./Links";
import "@styles/card.css";
import { useStore } from "@nanostores/react";
import { userGithub } from "@store/state";
import { useEffect, useState } from "react";

const Card = () => {
  const user = useStore(userGithub);

  const [isTablet, setTablet] = useState(false);

  // format date in day month year
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    const myFunction = (x: MediaQueryList) => setTablet(x.matches);

    const x = window.matchMedia("(max-width: 769px)");

    myFunction(x);

    x.addEventListener("change", () => myFunction(x));
  }, [isTablet]);
  return (
    <section className="card">
      {!isTablet && (
        <aside className="card__aside">
          <img src={user.avatar_url} alt="" width="150" height="150" />
        </aside>
      )}

      <article className="card__article">
        <header className="card__article-header">
          {isTablet && (
            <img src={user.avatar_url} alt="" width="150" height="150" />
          )}
          <div>
            <h2>{user.name}</h2>
            <h3>{`@${user.login}`}</h3>
            {isTablet && <span>Joined {formatDate(user.created_at)}</span>}
          </div>

          {!isTablet && <span>Joined {formatDate(user.created_at)}</span>}
        </header>

        <p>{user.bio}</p>

        <section className="card__article-stats">
          <div>
            <h4>Repos</h4>
            <span>{user.public_repos}</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>{user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{user.following}</span>
          </div>
        </section>

        <Links />
      </article>
    </section>
  );
};

export default Card;
