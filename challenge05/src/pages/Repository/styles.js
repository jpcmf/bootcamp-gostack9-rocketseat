import styled from 'styled-components';

export const Loading = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  height: 100vh;
  justify-content: center;
`;

export const Owner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  a {
    color: #7159c1;
    align-items: center;
    display: flex;
    text-decoration: none;

    svg {
      margin-right: 5px;
    }
  }

  img {
    border-radius: 50%;
    width: 120px;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
    margin-top: 5px;
    max-width: 400px;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  border-top: solid 1px #eee;
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;

  li {
    align-items: center;
    border: solid 1px #eee;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    padding: 15px 10px;

    & + li {
      margin-top: 10px;
    }

    img {
      border: solid 2px #eee;
      border-radius: 50%;
      max-width: 36px;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          color: #333;
          text-decoration: none;
          transition: all ease 300ms;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background-color: #eee;
          border-radius: 2px;
          color: #333;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          margin-left: 10px;
          padding: 3px 4px;
        }
      }

      p {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  button {
    border-radius: 4px;
    border: 0;
    margin: 0 10px;
    outline: 0;
    padding: 8px;

    &:nth-child(${props => props.active + 1}) {
      background-color: #576574;
      color: #fff;
    }
  }
`;

export const PageActions = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-top: 15px;

  button {
    border-radius: 4px;
    border: solid 1px #576574;
    color: #576574;
    outline: 0;
    padding: 8px;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.35;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.35;
    }
  }
`;
