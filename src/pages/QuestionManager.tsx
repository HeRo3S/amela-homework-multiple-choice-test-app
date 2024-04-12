import { useState } from "react";
import ManagerDrawer from "../components/manager/ManagerDrawer";
import ManagerAppBar from "../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Pagination,
  Typography,
  styled,
} from "@mui/material";
import DummyToolbar from "../components/common/DummyToolbar";
import { ManagerSearchBar } from "../components/manager/ManagerSearchBar";
import AccountInfoCard from "../components/manager/AccountInfoCard";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import QuestionInfoCard from "../components/manager/QuestionInfoCard";

const LocalCSSProperties = {
  drawerWidth: "289px",
};

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${LocalCSSProperties.drawerWidth})`,
  minHeight: "100vh",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

const StyledContentContainer = styled(Box)(({ theme }) => ({
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

const StyledPageTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledNewUserButton = styled(Button)(({ theme }) => ({
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

export default function QuestionManager() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const onCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };
  const onClickMobileDrawerButton = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <ManagerAppBar
        name="Question Manager"
        onClickDrawerButton={onClickMobileDrawerButton}
      />
      <ManagerDrawer
        width={LocalCSSProperties.drawerWidth}
        isMobileOpen={isMobileDrawerOpen}
        onCloseMobile={onCloseMobileDrawer}
      ></ManagerDrawer>
      <StyledMainContainer>
        <DummyToolbar />
        <StyledContentContainer>
          <StyledPageTitleContainer>
            <Breadcrumbs separator=">" aria-label="breadcrumbs">
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="h6">Home</Typography>
              </Link>
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="h6">Question Manager</Typography>
              </Link>
              <Typography color="text.primary" variant="h6">
                Đảm báo chất lượng phần mềm
              </Typography>
            </Breadcrumbs>
          </StyledPageTitleContainer>
          <Grid container columns={7} columnSpacing={1}>
            <Grid item xs={6} md={5}>
              <ManagerSearchBar />
            </Grid>
            <Grid item xs={1} md={2}>
              <StyledNewUserButton>
                <AddCircleRoundedIcon
                  fontSize="large"
                  sx={{ color: "#00adc1" }}
                />
                <Typography>New Question</Typography>
              </StyledNewUserButton>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6">Tổng số câu hỏi: 38</Typography>
            {Array(4).fill(<QuestionInfoCard />)}
          </Box>
        </StyledContentContainer>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{ paddingY: "10px", alignSelf: "center" }}
        />
      </StyledMainContainer>
    </Box>
  );
}
