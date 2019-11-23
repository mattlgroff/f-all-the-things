import React from 'react';
import styled from 'styled-components';
import { Author as AuthorType } from '../../constants/types';

const Author = styled.div`
  align-content: center;
  display: flex;
`;

const Avatar = styled.img`
  height: 25px;
  margin-right: 5px;
  width: 25px;
`;

interface AuthorProps {
  author: AuthorType;
}

const AuthorComponent = ({ author }: AuthorProps) => {
  if (!author) {
    return <>No Author</>;
  }
  const { avatar_url, html_url, login } = author;

  return (
    <a href={html_url} target='_blank' rel='noopener noreferrer'>
      <Author>
        {!!avatar_url && <Avatar src={avatar_url} alt={`${login} Avatar`} />}
        <span>{login}:</span>
      </Author>
    </a>
  );
};

export default AuthorComponent;
