import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input``;

interface CheckboxProps {
  value: boolean;
  onCheck: Function;
}

const CheckboxComponent = ({ value, onCheck }: CheckboxProps) => {
  return (
    <Checkbox
      type={'checkbox'}
      checked={value}
      onChange={() => {
        onCheck(!value);
      }}
      aria-label={'Censored Checkbox'}
    ></Checkbox>
  );
};

export default CheckboxComponent;
