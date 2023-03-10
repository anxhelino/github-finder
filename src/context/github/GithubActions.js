import axios from "axios";
const GITHUB_URL = " https://api.github.com";
const GITHUB_TOKEN = "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";

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Getu user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repo: repos.data };
};
