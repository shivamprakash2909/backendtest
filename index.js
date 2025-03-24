require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
const githubData = {
  login: "shivamprakash2909",
  id: 147336565,
  node_id: "U_kgDOCMgtdQ",
  avatar_url: "https://avatars.githubusercontent.com/u/147336565?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shivamprakash2909",
  html_url: "https://github.com/shivamprakash2909",
  followers_url: "https://api.github.com/users/shivamprakash2909/followers",
  following_url:
    "https://api.github.com/users/shivamprakash2909/following{/other_user}",
  gists_url: "https://api.github.com/users/shivamprakash2909/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shivamprakash2909/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/shivamprakash2909/subscriptions",
  organizations_url: "https://api.github.com/users/shivamprakash2909/orgs",
  repos_url: "https://api.github.com/users/shivamprakash2909/repos",
  events_url: "https://api.github.com/users/shivamprakash2909/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shivamprakash2909/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Shivam Prakash",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Cochin University of Science And Technology",
  twitter_username: null,
  public_repos: 9,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-10-08T16:55:58Z",
  updated_at: "2025-02-22T13:23:52Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello from twitter");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur code</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
