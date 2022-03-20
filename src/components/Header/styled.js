import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center; //alinha na vertical
  justify-content: center; //alinha na horizontal

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
