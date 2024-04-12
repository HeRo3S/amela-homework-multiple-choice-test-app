import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Pagination,
  styled,
} from "@mui/material";
import SubjectCard from "../components/dashboard/SubjectCard";
import DashboardDrawer from "../components/dashboard/Drawer";
import { useState } from "react";
import { SearchBar } from "../components/dashboard/SearchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardAppbar from "../components/dashboard/Appbar";
import DummyToolbar from "../components/common/DummyToolbar";

const drawerWidth = "289px";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${drawerWidth})`,
  minHeight: "1024px",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

const UtilityBarContainer = styled(Grid)({
  margin: "20px 0",
  width: `calc(95%)`,
  "& .MuiGrid-item": {
    padding: "0 10px",
  },
});

const StyledDifficultyButtonGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledDifficultyButton = styled(Button)({
  minWidth: "200px",
  width: "auto",
  height: "73px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  border: "solid 1px",
  borderRadius: "4px",
});

const StyledCardsContainer = styled(Grid)(({ theme }) => ({
  padding: "50px 0",
  width: `calc(90%)`,
  minHeight: "787px",
  backgroundColor: "#d9d9d9",
}));

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
        width={drawerWidth}
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
