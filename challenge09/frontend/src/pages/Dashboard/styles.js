import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  margin: 30px auto;
  max-width: 1200px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;

  h2 {
    color: #444;
    font-size: 24px;
    line-height: 28px;
  }

  .actions {
    display: flex;

    button {
      align-items: center;
      background-color: #ee4d64;
      border-radius: 4px;
      border: 0;
      color: #fff;
      display: flex;
      font-size: 14px;
      font-weight: bold;
      height: 36px;
      padding: 0 16px;
      transition: background-color 300ms ease;
      margin-right: 16px;

      &:hover {
        background-color: ${darken(0.03, '#ee4d64')};
      }

      svg {
        margin-right: 8px;
      }
    }

    label {
      position: relative;

      svg {
        position: absolute;
        top: 11px;
        left: 15px;
      }
    }

    input {
      background-color: #fff;
      border-radius: 4px;
      border: solid 1px #ddd;
      height: 36px;
      padding: 0 16px 0 38px;
    }
  }
`;

export const Container = styled.div``;
