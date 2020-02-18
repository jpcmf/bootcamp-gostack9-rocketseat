import styled from 'styled-components';

import colors from '~/styles/colors';

export const SelectInputWrapper = styled.div`
  label {
    align-items: flex-start;
    color: ${colors.dark};
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 8px;
  }

  & > div > div:nth-child(1),
  & > div > div:nth-child(2) {
    border-radius: 4px;
    border: solid 1px ${colors.grey};
    color: ${colors.dark};
    height: 45px;
    padding: 0 15px;
    width: 100%;

    &::placeholder {
      color: ${colors.grey};
      font-size: 16px;
      height: 19px;
      line-height: 19px;
      margin: 0 0 10px;
    }
  }

  span {
    align-self: flex-start;
    color: ${colors.primary};
    font-weight: bold;
    margin-top: 8px;
  }
`;
