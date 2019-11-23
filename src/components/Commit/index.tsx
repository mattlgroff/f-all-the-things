import React from 'react';
import styled from 'styled-components';
import { GithubItem } from '../../constants/types';
import Author from '../../components/Author';

const Card = styled.div`
  background-color: white;
  box-shadow: 12px 12px 2px 1px rgba(85, 111, 122, 0.6);
  display: block;
  text-align: left;
  min-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75ch;
  width: 500px;
  padding: 25px;
  margin: auto;
  margin-bottom: 50px;
`;

const CommitMessage = styled.p`
  font-size: 20px;
  margin: 0px;
`;

interface CommitProps {
  censored: boolean;
  item: GithubItem;
}

const CommitComponent = ({ item, censored }: CommitProps) => {
  const { author, commit } = item;

  const censoredMessage = commit.message.replace(
    new RegExp('fuck', 'gi'),
    match => 'F***',
  );

  return (
    <Card>
      <Author author={author} />
      <CommitMessage>
        {censored ? censoredMessage : commit.message}
      </CommitMessage>
    </Card>
  );
};

export default CommitComponent;
