import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    //color: inherit;
    color: 'black';
    > img {
      height: 3rem;
    }
  `}
`;
