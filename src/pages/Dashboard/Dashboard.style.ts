import { Box, Button, Grid, styled } from "@mui/material";

export const LocalCssProperties = {
  drawerWidth: "289px",
};

export const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${LocalCssProperties.drawerWidth})`,
  minHeight: "1024px",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

export const UtilityBarContainer = styled(Grid)({
  margin: "20px 0",
  width: `calc(95%)`,
  "& .MuiGrid-item": {
    padding: "0 10px",
  },
});

export const StyledDifficultyButtonGridContainer = styled(Grid)(
  ({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
);

export const StyledDifficultyButton = styled(Button)((theme) => ({
  minWidth: "200px",
  width: "auto",
  height: "73px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  border: "solid 1px",
  borderRadius: "4px",
}));

export const StyledCardsContainer = styled(Grid)(({ theme }) => ({
  padding: "50px 0",
  width: `calc(90%)`,
  minHeight: "787px",
  backgroundColor: "#d9d9d9",
}));
