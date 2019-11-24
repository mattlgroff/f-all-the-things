const defaultValue = 'css';

const options: string[] = [
  'angular',
  'ansible',
  defaultValue,
  'ember',
  'git',
  'graphql',
  'html',
  `ie11`,
  'java',
  'javascript',
  `jquery`,
  'node',
  'oauth',
  'react',
  'redux',
  'ruby',
  'rust',
  'typescript',
  'vue',
];

const githubApiUrl = 'https://api.github.com/search/commits';

export default {
  defaultValue,
  options,
  githubApiUrl,
};
