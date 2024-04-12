import { Box, Button, styled } from "@mui/material";

export const LocalCSSProperties = {
  drawerWidth: "289px",
};

export const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${LocalCSSProperties.drawerWidth})`,
  minHeight: "100vh",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

export const StyledContentContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr 7fr",
  flexDirection: "column",
  flex: "1",
  width: "90%",
  maxWidth: "816px",

  [theme.breakpoints.down("md")]: {
    gridTemplateRows: "1fr 8fr",
  },
}));

export const StyledPageTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledNewUserButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "73px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  border: "solid 1px",
  borderRadius: "4px",

  "& *": {
    flexGrow: 1,
  },
  [theme.breakpoints.down("md")]: {
    border: "none",
    backgroundColor: "#c4c4c4",
    "& p": {
      display: "none",
    },
    "& svg": {
      height: "100%",
    },
  },
}));
