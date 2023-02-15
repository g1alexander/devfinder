import { atom } from "nanostores";

export type UserGithub = {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
};

const userGithub = atom<UserGithub>({
  avatar_url: "https://avatars.githubusercontent.com/u/61170485?v=4",
  name: "Alexander Granados",
  login: "g1alexander",
  created_at: "2020-02-18T00:55:24Z",
  bio: "Front-end Developer | Vue JS - React JS 👨‍💻 🚀 ",
  followers: 23,
  following: 45,
  public_repos: 39,
  location: "Colombia",
  company: "@agricapital",
  blog: "g1alexander.com",
  twitter_username: "g1alexander_",
});

const setData = (data: UserGithub) => {
  userGithub.set(data);
};

// darkmode
const darkMode = atom<boolean>(
  localStorage.getItem("theme") === "dark" || false
);

export { userGithub, setData, darkMode };
