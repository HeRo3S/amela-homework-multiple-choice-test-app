import {
  Button,
  Grid,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";

export const LocalCSSValues = {
  TestInfoContainerHeight: "165px",
  DrawerWidth: "289px",
};

export const MainContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#c4c4c4",
  // height: "100%",
}));

export const QuestionButtonsGroupContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const TestInfoContainer = styled(Grid)(({ theme }) => ({
  padding: "10px 15px",
  backgroundColor: "#d9d9d9",
  // height: LocalCSSValues.TestInfoContainerHeight,
  border: "solid 1px",
  [theme.breakpoints.down("md")]: {
    border: "none",
    backgroundColor: "#c4c4c4",
    paddingBottom: "0px",
  },
}));

export const StyledTestTitle = styled(Typography)(({ theme }) => ({
  height: "61px",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledTimeLeftText = styled(Typography)(({ theme }) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
}));

export const StyledLinearProgress = styled(LinearProgress)({
  margin: "10px 0",
  height: "21px",
  backgroundColor: "#c4c4c4",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#41c54e",
  },
});

export const StyledQuestionContainer = styled(Grid)(({ theme }) => ({
  height: `calc(100% - ${LocalCSSValues.TestInfoContainerHeight})`,
  padding: "0 20px",
  display: "grid",
  gridTemplateRows: "3fr 6fr 4fr",
}));

export const StyledNavButtonsContainer = styled(Grid)({
  justifySelf: "flex-end",
  padding: "20px 20px",
  alignItems: "flex-end",
});

export const StyledNavButton = styled(Button)({
  backgroundColor: "#eee7a9",
  fontWeight: "700",
});

export const StyledMoveToQuestionButtonContainer = styled(Grid)(
  ({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }),
);
