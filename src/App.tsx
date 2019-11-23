import './App.css';
import React, { useEffect, useState } from 'react';
import Checkbox from './components/Checkbox';
import Commit from './components/Commit';
import Select from './components/Select';
import constants from './constants/strings';
import { GithubItem } from './constants/types';

const App: React.FC = () => {
  const [value, updateValue] = useState<string>(constants.defaultValue);
  const [commits, updateCommits] = useState<GithubItem[]>([]);
  const [censored, updateCensored] = useState<boolean>(true);

  useEffect(() => {
    updateCommits([]);

    fetch(`${constants.githubApiUrl}?sort=committer-date&q=fuck+${value}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.cloak-preview', // Required for API Preview
      },
    })
      .then(response => response.json())
      .then(({ items }) => {
        updateCommits(items);
      })
      .catch(err => {
        console.error(err);
      });
  }, [value]);

  return (
    <div className='App'>
      <h1>{censored ? 'F***' : 'Fuck'} All The Things</h1>
      <h3>
        Inspired by{' '}
        <a
          href='http://www.commitlogsfromlastnight.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Commit Logs From Last Night
        </a>
      </h3>
      <p>
        Created by{' '}
        <a href='https://groff.dev' target='_blank' rel='noopener noreferrer'>
          Matt Groff
        </a>{' '}
        using the Github API.{' '}
        <a
          href='https://github.com/mattlgroff/f-all-the-things'
          target='_blank'
          rel='noopener noreferrer'
        >
          Source on Github
        </a>
      </p>
      <header className='App-header'>
        {censored ? 'F*** ' : 'Fuck '}
        <Select
          value={value}
          options={constants.options}
          onSelect={updateValue}
        />
      </header>
      <Checkbox value={censored} onCheck={updateCensored} /> Censored
      <div>
        {commits.length === 0 && 'Loading'}
        {commits.map(commit => (
          <Commit key={commit.node_id} item={commit} censored={censored} />
        ))}
      </div>
    </div>
  );
};

export default App;
