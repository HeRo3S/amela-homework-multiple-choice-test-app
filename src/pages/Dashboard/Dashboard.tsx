import { Box, Grid, Menu, MenuItem, Pagination } from "@mui/material";
import SubjectCard from "../../components/dashboard/SubjectCard";
import DashboardDrawer from "../../components/dashboard/Drawer";
import { useState } from "react";
import { SearchBar } from "../../components/dashboard/SearchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardAppbar from "../../components/dashboard/Appbar";
import DummyToolbar from "../../components/common/DummyToolbar";
import {
  LocalCssProperties,
  StyledMainContainer,
  UtilityBarContainer,
  StyledDifficultyButtonGridContainer,
  StyledDifficultyButton,
  StyledCardsContainer,
} from "./Dashboard.style";

export default function Dashboard() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [anchorDiffEl, setAnchorDiffEl] = useState<null | HTMLElement>(null);
  const isDifficultyMenuOpen = Boolean(anchorDiffEl);

  const onCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };
  const onClickMobileDrawerButton = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  const onClickDifficultyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorDiffEl(e.currentTarget);
  };
  const onClickDifficutlyMenuItem = () => {
    setAnchorDiffEl(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <DashboardAppbar onClickDrawerButton={onClickMobileDrawerButton} />
      <DashboardDrawer
        width={LocalCssProperties.drawerWidth}
        isMobileOpen={isMobileDrawerOpen}
        onCloseMobile={onCloseMobileDrawer}
      ></DashboardDrawer>
      <StyledMainContainer>
        <DummyToolbar />
        <UtilityBarContainer container columnSpacing={4}>
          <Grid item xl={10} md={9} sm={12}>
            <SearchBar />
          </Grid>
          <StyledDifficultyButtonGridContainer item xl={2} md={3}>
            <StyledDifficultyButton
              id="difficult-btn"
              onClick={(e) => onClickDifficultyButton(e)}
            >
              Difficult
              <ArrowDropDownIcon />
            </StyledDifficultyButton>
            <Menu
              anchorEl={anchorDiffEl}
              open={isDifficultyMenuOpen}
              onClose={onClickDifficutlyMenuItem}
            >
              <MenuItem onClick={onClickDifficutlyMenuItem}>Easy</MenuItem>
              <MenuItem onClick={onClickDifficutlyMenuItem}>Hard</MenuItem>
            </Menu>
          </StyledDifficultyButtonGridContainer>
        </UtilityBarContainer>
        <StyledCardsContainer container>
          {Array(6).fill(
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SubjectCard />
            </Grid>,
          )}
        </StyledCardsContainer>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{ paddingY: "10px" }}
        />
      </StyledMainContainer>
    </Box>
  );
}
