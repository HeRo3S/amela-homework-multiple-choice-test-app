import { useState } from "react";
import ManagerDrawer from "../components/manager/ManagerDrawer";
import ManagerAppBar from "../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import DummyToolbar from "../components/common/DummyToolbar";
import { ManagerSearchBar } from "../components/manager/ManagerSearchBar";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
  display: "grid",
  flexDirection: "column",
  alignContent: "center",
  gridTemplateRows: "1fr 1fr",
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
  backgroundColor: "#ffffff",

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

const StyledRowsNumberSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#9afac0",
  position: "relative",
  left: "10%",
  height: "32px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function TestQuizManagerPage() {
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
        name="Test manager"
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
            <Typography variant="h5">Test Manager</Typography>
            <Breadcrumbs separator=">" aria-label="breadcrumbs">
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Typography color="text.primary" variant="body1">
                Test quiz manager
              </Typography>
            </Breadcrumbs>
          </StyledPageTitleContainer>
          <Grid container columns={7} columnSpacing={1}>
            <Grid item xs={6} md={5}>
              <ManagerSearchBar />
            </Grid>
            <Grid item xs={1} md={2}>
              <StyledNewUserButton>
                <AddIcon fontSize="large" />
                <Typography>New test</Typography>
              </StyledNewUserButton>
            </Grid>
          </Grid>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "#d9d9d9", padding: "20px 20px" }}
          >
            <Typography variant="h6">Danh sách bài test</Typography>
            <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Test name</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Start</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(4).fill(
                    <TableRow>
                      <TableCell>Bài Toán 1</TableCell>
                      <TableCell>7m</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>
                        <EditIcon />
                        <DeleteIcon />
                      </TableCell>
                    </TableRow>,
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              sx={{ paddingY: "10px" }}
            />
            <StyledRowsNumberSelect defaultValue={8}>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </StyledRowsNumberSelect>
          </Box>
        </StyledContentContainer>
      </StyledMainContainer>
    </Box>
  );
}
