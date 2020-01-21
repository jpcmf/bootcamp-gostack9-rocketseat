import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

// export const Header = styled.div`
//   align-items: center;
//   display: flex;
//   margin-bottom: 25px;
//   justify-content: space-between;

//   h2 {
//     color: #444;
//     font-size: 24px;
//     line-height: 28px;
//   }

//   .actions {
//     display: flex;

//     button {
//       align-items: center;
//       background-color: ${colors.primary};
//       border-radius: 4px;
//       border: 0;
//       color: #fff;
//       display: flex;
//       font-size: 14px;
//       font-weight: bold;
//       height: 36px;
//       padding: 0 16px;
//       transition: background-color 300ms ease;
//       margin-right: 16px;

//       &:hover {
//         background-color: ${darken(0.03, '#ee4d64')};
//       }

//       svg {
//         margin-right: 8px;
//       }
//     }

//     label {
//       position: relative;

//       svg {
//         position: absolute;
//         top: 11px;
//         left: 15px;
//       }
//     }

//     input {
//       background-color: #fff;
//       border-radius: 4px;
//       border: solid 1px #ddd;
//       height: 36px;
//       padding: 0 16px 0 38px;
//     }
//   }
// `;

// export const Content = styled.div`
//   background-color: #fff;
//   border-radius: 4px;
//   padding: 30px;
// `;

export const Table = styled.div`
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    thead {
      tr {
        th {
          color: ${colors.dark};
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 5px;
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        &:last-child {
          td {
            border: 0;
          }
        }

        td {
          border-bottom: solid 1px ${colors.lightGrey};
          font-size: 16px;
          padding: 17px 0;

          &:last-child {
            width: 15%;

            @media (min-width: 1200px) {
              width: 10%;
            }
          }

          .avatar {
            display: flex;
            align-items: center;

            img {
              border: solid 1px ${colors.lightGrey};
              border-radius: 50%;
              margin-right: 16px;
              height: 30px;
              width: 30px;
            }
          }

          .actions {
            a {
              color: ${colors.info};

              &:hover {
                color: ${props => props && darken(0.09, colors.info)};
              }
            }

            button {
              appearance: none;
              border: 0;
              color: ${colors.danger};
              margin-left: 20px;

              &:hover {
                color: ${props => props && darken(0.09, colors.danger)};
              }
            }
          }
        }
      }
    }
  }
`;
