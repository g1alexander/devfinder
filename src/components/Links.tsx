import { useStore } from "@nanostores/react";
import { userGithub } from "@store/state";
import "@styles/links.css";

const Links = () => {
  const user = useStore(userGithub);
  return (
    <ul className="container-links">
      <div>
        <li>
          <img src="icons/icon-location.svg" alt="" />
          <span>{user.location}</span>
        </li>

        <li>
          <img src="icons/icon-website.svg" alt="" />
          <a href={user.blog}>{user.blog}</a>
        </li>
      </div>
      <div>
        <li className="desactived">
          <img src="icons/icon-twitter.svg" alt="" />
          <span>{user.twitter_username}</span>
        </li>

        <li>
          <img src="icons/icon-company.svg" alt="" />
          <span>{user.company}</span>
        </li>
      </div>
    </ul>
  );
};

export default Links;
