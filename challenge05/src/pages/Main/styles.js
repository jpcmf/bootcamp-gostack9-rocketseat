import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    border-radius: 4px;
    border: 1px solid ${props => (props.error ? 'red' : '#eee')};
    flex: 1;
    font-size: 16px;
    padding: 10px 15px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
  border: 0;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 0 15px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0;

    & + li {
      border-top: solid 1px #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
