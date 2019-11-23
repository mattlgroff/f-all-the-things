export interface GithubItem {
  author: Author;
  commit: Commit;
  node_id: string;
}

export interface Commit {
  message: string;
  url: string;
}

export interface Author {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
}
