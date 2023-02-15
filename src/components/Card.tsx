import Links from "./Links";
import "@styles/card.css";
import { useStore } from "@nanostores/react";
import { userGithub } from "@store/state";

const Card = () => {
  const user = useStore(userGithub);

  // format date in day month year
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <section className="card">
      <aside className="card__aside">
        <img src={user.avatar_url} alt="" width="150" height="150" />
      </aside>

      <article className="card__article">
        <header className="card__article-header">
          <div>
            <h2>{user.name}</h2>
            <h4>@{user.login}</h4>
          </div>

          <span>Joined {formatDate(user.created_at)}</span>
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
