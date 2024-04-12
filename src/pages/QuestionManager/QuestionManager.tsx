import { useState } from "react";
import ManagerDrawer from "../../components/manager/ManagerDrawer";
import ManagerAppBar from "../../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Pagination,
  Typography,
} from "@mui/material";
import DummyToolbar from "../../components/common/DummyToolbar";
import { ManagerSearchBar } from "../../components/manager/ManagerSearchBar";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import QuestionInfoCard from "../../components/manager/QuestionInfoCard";
import {
  LocalCSSProperties,
  StyledContentContainer,
  StyledMainContainer,
  StyledNewUserButton,
  StyledPageTitleContainer,
} from "./QuestionManager.style";

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
