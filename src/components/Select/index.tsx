import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 24px;
`;

interface SelectProps {
  options: string[];
  value: string;
  onSelect: Function;
}

const SelectComponent = ({ options, value, onSelect }: SelectProps) => {
  return (
    <Select
      value={value}
      onChange={event => {
        onSelect(event.target.value);
      }}
    >
      {options.map(value => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};

export default SelectComponent;
