import { createGlobalStyle } from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";
import styled from "styled-components";

export const lightTheme = {
  color: {
    background: "#FAFAFA",
    point: "#8041D9",
    icon: "#8041D9",
  },
};

export const darkTheme = {
  color: {
    background: "#2C2D33",
    point: "#eaeaea",
    icon: "#eaeaea", // 아이콘의 색상 속성 추가
  },
};

export const IconButton = styled(MuiIconButton)`
  color: ${({ theme }) => theme.color.icon};
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.point};
  }

  .MuiButton-IconButton .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.icon} !important;
  }

  .MuiButton-root {
    color: ${({ theme }) => theme.color.icon} !important;
  }

`;
