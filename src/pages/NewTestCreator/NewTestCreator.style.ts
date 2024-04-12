import { Box, Grid, Select, styled } from "@mui/material";

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
  gridTemplateRows: "1fr 3fr 5fr 1fr",
  flexDirection: "column",
  flex: "1",
  width: "90%",
  maxWidth: "1200px",

  [theme.breakpoints.down("md")]: {
    gridTemplateRows: "4fr 5fr 1fr",
  },
}));

export const StyledPageTitleContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  flexDirection: "column",
  alignContent: "center",
  gridTemplateRows: "1fr 1fr",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledGridCenterAll = styled(Grid)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

export const StyledRowsNumberSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#9afac0",
  marginLeft: "10px",
  height: "32px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
