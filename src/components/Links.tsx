import { useStore } from "@nanostores/react";
import { userGithub } from "@store/state";
import "@styles/links.css";

const Links = () => {
  const user = useStore(userGithub);

  const isAvailable = (value: string, isAhref = false, isTwitter = false) => {
    if (isAhref) {
      return value ? (
        <a
          href={`${
            value.includes("https://")
              ? ""
              : !isTwitter
              ? "https://"
              : "https://twitter.com/"
          }${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <span>Not Available</span>
      );
    }

    return value ? <span>{value}</span> : <span>Not Available</span>;
  };

  const isDesactived = (value: string) => {
    return value ? "" : "desactived";
  };
  return (
    <ul className="links">
      <div className="links__block-one">
        <li className={isDesactived(user.location)}>
          <img src="icons/icon-location.svg" alt="" />

          {isAvailable(user.location)}
        </li>

        <li className={isDesactived(user.blog)}>
          <img src="icons/icon-website.svg" alt="" />

          {isAvailable(user.blog, true)}
        </li>
      </div>
      <div className="links__block-two">
        <li className={isDesactived(user.twitter_username)}>
          <img src="icons/icon-twitter.svg" alt="" />

          {isAvailable(user.twitter_username, true, true)}
        </li>

        <li className={isDesactived(user.company)}>
          <img src="icons/icon-company.svg" alt="" />

          {isAvailable(user.company)}
        </li>
      </div>
    </ul>
  );
};

export default Links;
