import { useState } from "react";
import ManagerDrawer from "../../components/manager/ManagerDrawer";
import ManagerAppBar from "../../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DummyToolbar from "../../components/common/DummyToolbar";
import { ManagerSearchBar } from "../../components/manager/ManagerSearchBar";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  LocalCSSProperties,
  StyledContentContainer,
  StyledMainContainer,
  StyledNewUserButton,
  StyledPageTitleContainer,
  StyledRowsNumberSelect,
} from "./ListTopicManager.style";

export default function ListTopicManagerPage() {
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
        name="List topic manager"
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
            <Typography variant="h5">List topic manager</Typography>
            <Breadcrumbs separator=">" aria-label="breadcrumbs">
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Typography color="text.primary" variant="body1">
                List topic manager
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
                <Typography>New topic</Typography>
              </StyledNewUserButton>
            </Grid>
          </Grid>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ backgroundColor: "#d9d9d9", padding: "20px 20px" }}
          >
            <Typography variant="h6">Danh sách topic</Typography>
            <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Topic name</TableCell>
                    <TableCell>Difficult</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array(4).fill(
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Toán</TableCell>
                      <TableCell>Khó</TableCell>
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
