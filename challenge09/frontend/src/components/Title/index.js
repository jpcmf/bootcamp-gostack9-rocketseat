import styled from 'styled-components';

const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

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
