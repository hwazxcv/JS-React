import styled from 'styled-components';

export const InputText = styled.input`
  border: 1px solid #d5;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border-radius: 3px;
  display: block;
  & + & {
    margin-top: 10px;
  }
`;
