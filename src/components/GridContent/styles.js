import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;

    ${Title} {
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
