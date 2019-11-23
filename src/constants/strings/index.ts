const defaultValue = 'css';

const options: string[] = [
  defaultValue,
  'git',
  'graphql',
  'html',
  'java',
  'javascript',
  'node',
  'oauth',
  'ruby',
  `apple`,
  `google`,
  `ie11`,
  `jquery`,
];

const githubApiUrl = 'https://api.github.com/search/commits';

export default {
  defaultValue,
  options,
  githubApiUrl,
};
