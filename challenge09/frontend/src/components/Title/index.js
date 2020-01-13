import styled from 'styled-components';

const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  h2 {
    color: #444;
    font-size: 24px;
    line-height: 28px;
  }

  div {
    align-items: center;
    display: flex;

    a + button {
      margin-left: 16px;
    }

    form {
      margin-left: 16px;
    }
  }
`;

export default Title;
